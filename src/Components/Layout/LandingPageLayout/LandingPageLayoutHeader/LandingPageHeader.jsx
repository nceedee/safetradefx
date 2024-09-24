import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../../../../Assets/Images/heade.jpeg";
import logo from "../../../../Assets/Images/logo.png";
import GoogleTranslate from "../../../../Components/Global/GoogleTranslate/GoogleTranslate.jsx"; // Adjust the import path as necessary

const LandingPageHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className="relative w-full h-[90vh] p-0"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundVideo})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<div
				className={`fixed top-0 left-0 w-full flex z-50 items-center lg:justify-around justify-between p-4 transition-colors duration-300 ${
					isScrolled ? "bg-white opacity-[.9]" : "bg-transparent"
				}`}>
				<div>
					<Link to="/">
						<img src={logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<div className="mt-11">
						<GoogleTranslate />
					</div>

					<Link to="/signup">
						<button className="bg-green-700 text-white py-2 px-4 rounded-sm">
							Open account
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPageHeader;
