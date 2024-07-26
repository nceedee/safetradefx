// Components/Global/GoogleTranslate.jsx
/* global google */
import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    const initTranslate = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    if (window.google && window.google.translate) {
      initTranslate();
    } else {
      window.googleTranslateElementInit = initTranslate;
      addTranslateScript();
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
