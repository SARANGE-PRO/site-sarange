// Email Service Utility
// To be connected with EmailJS (https://www.emailjs.com/)

// TODO: Replace with your actual keys from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

/**
 * Sends an email using EmailJS
 * @param {Object} templateParams - The data to send (name, email, message, etc.)
 */
export const sendEmail = async (templateParams) => {
  console.log('🚀 [Email Simulation] Sending email with params:', templateParams);

  // Simulation delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real scenario, you would uncomment this:
  /*
    try {
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      console.log('SUCCESS!', response.status, response.text);
      return { success: true };
    } catch (error) {
      console.error('FAILED...', error);
      return { success: false, error };
    }
    */

  // Return simulated success
  return { success: true };
};

/**
 * Formats the contact form data for the email template
 */
export const formatLeadData = (formData, projectItems) => {
  const projectSummary = projectItems
    .map((item) => `- ${item.productLabel} (${item.type}): ${item.width}x${item.height}mm`)
    .join('\n');

  return {
    to_name: 'Équipe Sarange',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    address: `${formData.address} (${formData.zip})`,
    message: formData.message,
    project_details: projectSummary || 'Aucun produit configuré',
    source: 'Formulaire Site Web',
  };
};
