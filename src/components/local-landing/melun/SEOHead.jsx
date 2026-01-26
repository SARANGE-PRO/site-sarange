import React, { useEffect } from "react";

const SEOHead = ({ title, description, canonical, schema }) => {
    useEffect(() => {
        if (title) document.title = title;

        let metaDesc = document.querySelector("meta[name='description']");
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description || "";

        let link = document.querySelector("link[rel='canonical']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "canonical";
            document.head.appendChild(link);
        }
        if (canonical) link.href = canonical;

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
