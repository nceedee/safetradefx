// src/components/GoogleTranslate.js
import React, { useEffect, useState } from "react";

const GoogleTranslate = () => {
	const [translatorLoaded, setTranslatorLoaded] = useState(false);

	useEffect(() => {
		const loadGoogleTranslate = () => {
			const googleTranslateScript = document.createElement("script");
			googleTranslateScript.src =
				"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
			googleTranslateScript.async = true;
			document.body.appendChild(googleTranslateScript);

			window.googleTranslateElementInit = () => {
				new window.google.translate.TranslateElement(
					{
						pageLanguage: "en",
						includedLanguages:
							"en,es,fr,de,it,ja,zh-CN,ar,pt,ru,ko,hi,fa,tr,id,vi",
						autoDisplay: false,
					},
					"google_translate_element"
				);
				setTranslatorLoaded(true);
			};
		};

		if (!document.querySelector('script[src*="translate.google.com"]')) {
			loadGoogleTranslate();
		}
	}, []);

	useEffect(() => {
		if (translatorLoaded) {
			const applyStoredLanguage = () => {
				const storedLanguage = localStorage.getItem("selectedLanguage");
				if (storedLanguage) {
					const selectElem = document.querySelector(".goog-te-combo");
					if (selectElem) {
						selectElem.value = storedLanguage;
						selectElem.dispatchEvent(new Event("change"));
					}
				}
			};

			const styleTranslator = () => {
				const selectElem = document.querySelector(".goog-te-combo");
				if (selectElem) {
					selectElem.addEventListener("change", () => {
						localStorage.setItem("selectedLanguage", selectElem.value);
					});

					// Apply custom styles
					selectElem.className =
						"goog-te-combo bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 outline-none cursor-pointer transition-all duration-300 ease-in-out appearance-none";

				
				}

				// Hide the Google Translate attribution
				const googleBranding = document.querySelector(".goog-logo-link");
				if (googleBranding) {
					googleBranding.style.display = "none";
				}
				const googleBrandingImg = document.querySelector(
					".goog-te-gadget-icon"
				);
				if (googleBrandingImg) {
					googleBrandingImg.style.display = "none";
				}
			};

			applyStoredLanguage();
			styleTranslator();

			// Apply styles after a short delay to ensure they override Google's styles
			setTimeout(styleTranslator, 1000);
		}
	}, [translatorLoaded]);

	return <div id="google_translate_element"></div>;
};


export default GoogleTranslate