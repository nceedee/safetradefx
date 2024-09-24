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

					// Override default styles
					// selectElem.style.width = "auto";
					// selectElem.style.display = "inline-block";
					// selectElem.style.verticalAlign = "middle";
					// selectElem.style.backgroundImage =
					// 	"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')";
					// selectElem.style.backgroundRepeat = "no-repeat";
					// selectElem.style.backgroundPosition = "right .7em top 50%";
					// selectElem.style.backgroundSize = ".65em auto";
					// selectElem.style.paddingRight = "1.4em";
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