import React, { useEffect, useRef } from "react";

const TranslatorComponent = () => {
  const googleTranslateRef = useRef(null);
  let intervalid; // Define intervalid here to ensure it's in the correct scope

  const checkGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      clearInterval(intervalid);
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        googleTranslateRef.current
      );
    }
  };

  useEffect(() => {
    intervalid = setInterval(checkGoogleTranslate, 100);
    return () => clearInterval(intervalid); // Clear interval on component unmount
  }, []);

  return <div ref={googleTranslateRef} id="google_translate_element" title="translate"></div>;
};

export default TranslatorComponent;
