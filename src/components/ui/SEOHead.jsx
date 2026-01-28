import React, { useEffect } from "react";

const SEOHead = ({ title, description, canonical, schema }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
            // OG Title
            let ogTitle = document.querySelector("meta[property='og:title']");
            if (ogTitle) ogTitle.content = title;
            let twitterTitle = document.querySelector("meta[property='twitter:title']");
            if (twitterTitle) twitterTitle.content = title;
        }

        if (description) {
            let metaDesc = document.querySelector("meta[name='description']");
            if (!metaDesc) {
                metaDesc = document.createElement("meta");
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = description;

            // OG Description
            let ogDesc = document.querySelector("meta[property='og:description']");
            if (ogDesc) ogDesc.content = description;
            let twitterDesc = document.querySelector("meta[property='twitter:description']");
            if (twitterDesc) twitterDesc.content = description;
        }

        // Canonical
        let link = document.querySelector("link[rel='canonical']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "canonical";
            document.head.appendChild(link);
        }
        if (canonical) {
            link.href = canonical;
            // OG URL
            let ogUrl = document.querySelector("meta[property='og:url']");
            if (!ogUrl) {
                ogUrl = document.createElement("meta");
                ogUrl.setAttribute("property", "og:url");
                document.head.appendChild(ogUrl);
            }
            ogUrl.content = canonical;
        }

        // JSON-LD
        const scriptId = "json-ld-local";
        let script = document.getElementById(scriptId);
        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        script.text = JSON.stringify(schema || {});
    }, [title, description, canonical, schema]);

    return null;
};

export default SEOHead;
