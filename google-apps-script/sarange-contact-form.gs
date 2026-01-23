// ============================================================
// 🚀 SARANGE - GOOGLE APPS SCRIPT v2.0
// ============================================================
// Compatible Outlook, Gmail, Apple Mail
// Emails HTML responsive avec affichage consentement marketing
// ============================================================

// 📋 CONFIGURATION GÉNÉRALE
const CONFIG = {
  SHEET_NAME: 'Leads',
  INTERNAL_EMAIL: 'contact@sarange.fr',
  SENDER_NAME: 'SARANGE Menuiseries',
  SCRIPT_URL: 'https://script.google.com/macros/s/VOTRE_ID/exec' // Remplacez par votre URL
};

// ============================================================
// 📮 FONCTION PRINCIPALE - doPost (réception des formulaires)
// ============================================================
function doPost(e) {
  try {
    const data = e.parameter;
    
    // Anti-spam
    if (data.robot_check && data.robot_check.length > 0) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'spam' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Normalisation du consentement marketing
    const marketingConsent = (data.Consentement_Marketing || '').includes('ACCEPTE') ? 'Oui' : 'Non';
    
    // Préparation des données normalisées
    const normalizedData = {
      name: data.name || 'Inconnu',
      phone: data.phone || 'Non renseigné',
      email: data.email || 'Non renseigné',
      address: data.address || 'Non renseignée',
      zip: data.zip || 'Non renseigné',
      message: data.message || '',
      project_html: data.project_html || '',
      project_summary: data.project_summary || 'Aucun produit',
      marketing_consent: marketingConsent,
      timestamp: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
    };
    
    // 1. Enregistrer dans Google Sheets
    saveToSheet(normalizedData);
    
    // 2. Envoyer email interne (à contact@sarange.fr)
    sendInternalEmail(normalizedData);
    
    // 3. Envoyer email de confirmation au client
    if (normalizedData.email && normalizedData.email.includes('@')) {
      sendClientEmail(normalizedData);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Erreur doPost: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
// 📊 ENREGISTREMENT GOOGLE SHEETS
// ============================================================
function saveToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet.appendRow([
      'Date', 'Nom', 'Téléphone', 'Email', 'Adresse', 'CP/Ville',
      'Projet', 'Message', 'Consentement Marketing'
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#0f172a').setFontColor('#ffffff');
  }
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.email,
    data.address,
    data.zip,
    data.project_summary,
    data.message,
    data.marketing_consent
  ]);
}

// ============================================================
// 📧 EMAIL INTERNE (à contact@sarange.fr)
// ============================================================
function sendInternalEmail(data) {
  const subject = `🔔 Nouvelle demande : ${data.name} - ${data.project_summary}`;
  const htmlBody = buildInternalEmailHTML(data);
  
  MailApp.sendEmail({
    to: CONFIG.INTERNAL_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME
  });
}

// ============================================================
// 📧 EMAIL CLIENT (confirmation)
// ============================================================
function sendClientEmail(data) {
  const subject = `✅ SARANGE - Votre demande de devis a bien été reçue`;
  const htmlBody = buildClientEmailHTML(data);
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.INTERNAL_EMAIL
  });
}

// ============================================================
// 🖼️ TEMPLATE EMAIL INTERNE - Compatible Outlook
// ============================================================
function buildInternalEmailHTML(data) {
  // Section message client (si présent)
  const messageSection = data.message && data.message.trim() !== ''
    ? `
      <tr>
        <td style="padding: 20px 30px;">
          <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #fff7ed; border-left: 3px solid #f97316; border-radius: 6px;">
            <tr>
              <td style="padding: 15px;">
                <div style="font-size: 11px; font-weight: bold; color: #f97316; text-transform: uppercase; margin-bottom: 8px;">
                  💬 MESSAGE DU CLIENT :
                </div>
                <div style="font-style: italic; color: #7c2d12; font-size: 14px; line-height: 1.5;">
                  "${data.message}"
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `
    : '';
    
  // RGPD: Badge consentement marketing
  const consentBadge = data.marketing_consent === 'Oui'
    ? '<span style="background-color: #10b981; color: #ffffff; padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: bold; display: inline-block;">✓ OPT-IN MARKETING ACCEPTÉ</span>'
    : '<span style="background-color: #94a3b8; color: #ffffff; padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: bold; display: inline-block;">✗ PAS D\'OPT-IN MARKETING</span>';
    
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sarange - Nouvelle Demande</title>
    <!--[if mso]>
    <style type="text/css">
      body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
    </style>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    
    <!-- WRAPPER PRINCIPAL -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9;">
      <tr>
        <td align="center" style="padding: 20px 10px 40px 10px;">
          
          <!-- CONTAINER EMAIL -->
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- ========== HEADER ========== -->
            <tr>
              <td align="center" style="background-color: #0f172a; padding: 35px 30px; border-radius: 12px 12px 0 0;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td align="center">
                      <div style="font-size: 28px; font-weight: bold; color: #ffffff; letter-spacing: -1px; margin-bottom: 10px;">
                        🔔 NOUVELLE DEMANDE
                      </div>
                      <div style="color: #f97316; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                        Site Internet Sarange.fr
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- ========== CONTENU PRINCIPAL ========== -->
            <tr>
              <td style="padding: 30px;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  
                  <!-- Nom prospect + Badge Consentement -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <div style="font-size: 22px; font-weight: bold; color: #0f172a; margin-bottom: 15px;">
                        Prospect : ${data.name}
                      </div>
                      ${consentBadge}
                    </td>
                  </tr>
                  
                  <!-- Action requise -->
                  <tr>
                    <td style="padding-bottom: 25px;">
                      <div style="font-size: 15px; line-height: 1.6; color: #475569;">
                        Une nouvelle demande de devis vient d'arriver.<br>
                        <strong style="color: #f97316;">⚡ Action requise :</strong> Recontacter sous 2h ouvrées.
                      </div>
                    </td>
                  </tr>
                  
                  <!-- BLOC CONTACT (Fond jaune) -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 10px;">
                        <tr>
                          <td style="padding: 18px;">
                            <div style="font-size: 12px; font-weight: bold; color: #92400e; text-transform: uppercase; margin-bottom: 12px;">
                              📞 COORDONNÉES CLIENT
                            </div>
                            <div style="font-size: 14px; color: #451a03; line-height: 1.8;">
                              <strong>Téléphone :</strong> <a href="tel:${data.phone}" style="color: #451a03; text-decoration: none; font-weight: bold;">${data.phone}</a><br>
                              <strong>Email :</strong> <a href="mailto:${data.email}" style="color: #f97316; text-decoration: none;">${data.email}</a><br>
                              <strong>Adresse :</strong> ${data.address}<br>
                              <strong>CP/Ville :</strong> ${data.zip}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- BLOC PROJET (Fond gris) -->
                  <tr>
                    <td>
                      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;">
                        <tr>
                          <td style="padding: 18px;">
                            <div style="font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #e2e8f0;">
                              📄 DÉTAILS DU PROJET
                            </div>
                            <div style="font-size: 14px; color: #334155; line-height: 1.6;">
                              ${data.project_html || '<span style="color: #64748b; font-style: italic;">Aucun produit configuré - Demande d\'information générale</span>'}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
            
            <!-- Message client (si présent) -->
            ${messageSection}
            
            <!-- ========== FOOTER ========== -->
            <tr>
              <td align="center" style="background-color: #f1f5f9; padding: 20px; border-radius: 0 0 12px 12px;">
                <div style="font-size: 11px; color: #94a3b8; line-height: 1.5;">
                  Email généré automatiquement par le site Sarange.fr<br>
                  ${data.timestamp}
                </div>
              </td>
            </tr>
            
          </table>
          
        </td>
      </tr>
    </table>
    
</body>
</html>`;
}

// ============================================================
// 🖼️ TEMPLATE EMAIL CLIENT - Compatible Outlook
// ============================================================
function buildClientEmailHTML(data) {
  const customerName = data.name ? data.name.split(' ')[0] : 'Madame, Monsieur';
  
  // Section message (si présent)
  const messageSection = data.message && data.message.trim() !== ''
    ? `
      <tr>
        <td style="padding: 0 30px 20px 30px;">
          <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #fff7ed; border-left: 3px solid #f97316; border-radius: 6px;">
            <tr>
              <td style="padding: 15px;">
                <div style="font-size: 11px; font-weight: bold; color: #f97316; text-transform: uppercase; margin-bottom: 8px;">
                  💬 VOTRE REMARQUE :
                </div>
                <div style="font-style: italic; color: #7c2d12; font-size: 14px; line-height: 1.5;">
                  "${data.message}"
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `
    : '';
    
  // RGPD: Lien de désinscription (uniquement si opt-in)
  const unsubscribeLink = data.marketing_consent === 'Oui'
    ? `<br><span style="font-size: 10px; color: #94a3b8;">Vous recevrez nos offres commerciales. <a href="mailto:contact@sarange.fr?subject=Désinscription%20newsletter" style="color: #f97316; text-decoration: underline;">Se désinscrire</a></span>`
    : '';
    
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sarange - Confirmation</title>
    <!--[if mso]>
    <style type="text/css">
      body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
    </style>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    
    <!-- WRAPPER PRINCIPAL -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9;">
      <tr>
        <td align="center" style="padding: 20px 10px 40px 10px;">
          
          <!-- CONTAINER EMAIL -->
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- ========== HEADER SARANGE ========== -->
            <tr>
              <td align="center" style="background-color: #0f172a; padding: 40px 30px; border-radius: 12px 12px 0 0;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td align="center">
                      <!-- Logo texte (visible partout) -->
                      <div style="font-size: 36px; font-weight: bold; color: #ffffff; letter-spacing: -2px; margin-bottom: 10px;">
                        SARANGE<span style="color: #f97316; font-size: 42px;">.</span>
                      </div>
                      <div style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                        Fabricant Fenêtres PVC & Aluminium
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- ========== CONTENU PRINCIPAL ========== -->
            <tr>
              <td style="padding: 40px 30px;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  
                  <!-- Salutation -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <div style="font-size: 24px; font-weight: bold; color: #0f172a; margin-bottom: 18px;">
                        Bonjour ${customerName},
                      </div>
                      <div style="font-size: 16px; line-height: 1.7; color: #475569;">
                        Nous avons bien reçu votre demande de devis et nous vous en remercions. Votre projet est désormais entre de bonnes mains.
                        <br><br>
                        Chez <strong>SARANGE</strong>, nous nous engageons à vous offrir le 
                        <span style="color: #f97316; font-weight: bold; background-color: #fff7ed; padding: 2px 6px; border-radius: 4px;">
                          meilleur rapport qualité/prix
                        </span> sans compromis sur la qualité.
                      </div>
                    </td>
                  </tr>
                  
                  <!-- BLOC COORDONNÉES (Fond jaune) -->
                  <tr>
                    <td style="padding-bottom: 25px;">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 10px;">
                        <tr>
                          <td style="padding: 20px;">
                            <div style="font-size: 12px; font-weight: bold; color: #92400e; text-transform: uppercase; margin-bottom: 12px;">
                              📍 VOS COORDONNÉES
                            </div>
                            <div style="font-size: 14px; color: #451a03; line-height: 1.8;">
                              <strong>Téléphone :</strong> ${data.phone}<br>
                              <strong>Email :</strong> ${data.email}<br>
                              <strong>Adresse :</strong> ${data.address}<br>
                              <strong>Code Postal :</strong> ${data.zip}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- BLOC PROJET (Fond gris) -->
                  <tr>
                    <td style="padding-bottom: 30px;">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;">
                        <tr>
                          <td style="padding: 20px;">
                            <div style="font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0;">
                              📄 RÉCAPITULATIF DE VOTRE PROJET
                            </div>
                            <div style="font-size: 14px; color: #334155; line-height: 1.6;">
                              ${data.project_html || '<span style="color: #64748b; font-style: italic;">Aucun produit configuré - Demande d\'information générale</span>'}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- TIMELINE (Compatible Outlook) -->
                  <tr>
                    <td style="padding-bottom: 25px;">
                      <div style="font-size: 14px; font-weight: bold; color: #0f172a; margin-bottom: 15px;">
                        📋 Prochaines étapes :
                      </div>
                      <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <!-- Étape 1 -->
                        <tr>
                          <td width="40" valign="top" style="padding-right: 12px; padding-bottom: 15px;">
                            <div style="width: 24px; height: 24px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 24px; color: #ffffff; font-size: 12px; font-weight: bold;">✓</div>
                          </td>
                          <td style="padding-bottom: 15px; border-left: 2px solid #e2e8f0; padding-left: 15px;">
                            <div style="font-size: 14px; font-weight: bold; color: #0f172a;">Dossier enregistré</div>
                            <div style="font-size: 13px; color: #64748b;">Vos dimensions ont été enregistrées.</div>
                          </td>
                        </tr>
                        
                        <!-- Étape 2 -->
                        <tr>
                          <td width="40" valign="top" style="padding-right: 12px; padding-bottom: 15px;">
                            <div style="width: 24px; height: 24px; background-color: #f97316; border-radius: 50%; text-align: center; line-height: 24px; color: #ffffff; font-size: 12px; font-weight: bold;">2</div>
                          </td>
                          <td style="padding-bottom: 15px; border-left: 2px solid #e2e8f0; padding-left: 15px;">
                            <div style="font-size: 14px; font-weight: bold; color: #0f172a;">Étude & Chiffrage</div>
                            <div style="font-size: 13px; color: #64748b;">Analyse technique en cours.</div>
                          </td>
                        </tr>
                        
                        <!-- Étape 3 -->
                        <tr>
                          <td width="40" valign="top" style="padding-right: 12px;">
                            <div style="width: 24px; height: 24px; background-color: #cbd5e1; border-radius: 50%; text-align: center; line-height: 24px; color: #64748b; font-size: 12px; font-weight: bold;">3</div>
                          </td>
                          <td style="padding-left: 15px;">
                            <div style="font-size: 14px; font-weight: bold; color: #94a3b8;">Envoi du devis</div>
                            <div style="font-size: 13px; color: #94a3b8;">Sous 24 à 48h ouvrées.</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- CTA Téléphone -->
                  <tr>
                    <td align="center" style="padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td align="center" style="background-color: #f97316; border-radius: 8px;">
                            <a href="tel:0986713444" style="display: inline-block; padding: 14px 30px; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none;">
                              📞 Nous appeler : 09 86 71 34 44
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
            
            <!-- Message client (si présent) -->
            ${messageSection}
            
            <!-- ========== FOOTER ========== -->
            <tr>
              <td align="center" style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 30px; border-radius: 0 0 12px 12px;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td align="center" style="padding-bottom: 15px;">
                      <a href="https://www.sarange.fr" style="color: #64748b; font-size: 13px; font-weight: bold; text-decoration: none; padding: 0 10px;">www.sarange.fr</a>
                      <span style="color: #cbd5e1;">•</span>
                      <a href="tel:0986713444" style="color: #64748b; font-size: 13px; font-weight: bold; text-decoration: none; padding: 0 10px;">09 86 71 34 44</a>
                      <span style="color: #cbd5e1;">•</span>
                      <a href="mailto:contact@sarange.fr" style="color: #f97316; font-size: 13px; font-weight: bold; text-decoration: none; padding: 0 10px;">contact@sarange.fr</a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <div style="color: #94a3b8; font-size: 11px; line-height: 1.7;">
                        <strong>SARANGE France</strong><br>
                        Fabrication & Pose de menuiseries en Île-de-France<br>
                        © 2026 - Tous droits réservés${unsubscribeLink}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 15px;">
                      <div style="font-size: 10px; color: #94a3b8; line-height: 1.6; max-width: 480px; margin: 0 auto;">
                        Conformément au RGPD, vos données sont conservées de manière sécurisée.<br>
                        Pour exercer vos droits (accès, rectification, suppression), contactez 
                        <a href="mailto:contact@sarange.fr" style="color: #f97316; text-decoration: none;">contact@sarange.fr</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
          </table>
          
        </td>
      </tr>
    </table>
    
</body>
</html>`;
}

// ============================================================
// 🧪 FONCTION DE TEST
// ============================================================
function testEmails() {
  const testData = {
    parameter: {
      name: 'Jean Dupont',
      email: 'test@example.com', // Remplacez par votre email pour tester
      phone: '06 12 34 56 78',
      address: '123 Rue de Test',
      zip: '77380 Combs-la-Ville',
      message: 'Je souhaite un devis pour mes fenêtres. Merci.',
      project_summary: '2x Fenêtre PVC, 1x Volet roulant',
      project_html: `
        <div style="background-color: #ffffff; padding: 16px 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
            <span style="background-color: #0f172a; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px;">2x</span>
            <span style="font-weight: 700; color: #0f172a; font-size: 15px;">Fenêtre PVC</span>
            <span style="background-color: #ef4444; color: white; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">🔥 -20% PACK DUO</span>
          </div>
          <div style="font-size: 13px; color: #64748b; padding-left: 8px; border-left: 2px solid #ef4444;">
            <div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Type:</span> 2 vantaux</div>
            <div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Dimensions:</span> 1200x1400mm</div>
            <div style="margin-bottom: 4px;"><span style="color: #f97316;">✦</span> <span style="font-weight: 600;">Coloris:</span> Blanc</div>
          </div>
        </div>
      `,
      Consentement_Marketing: '✅ ACCEPTE',
      robot_check: ''
    }
  };
  
  doPost(testData);
  Logger.log('✅ Emails de test envoyés !');
}

// ============================================================
// 🌐 doGet (pour tester si le script fonctionne)
// ============================================================
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'SARANGE Contact Form API v2.0',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
