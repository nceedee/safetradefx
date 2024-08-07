import { useEffect, useState } from "react";
import logo from "../../../../Assets/Images/logo.png";
import backgroundVideo from "../../../../Assets/Images/header2.jpg";
import img1 from "../../../../Assets/Images/Img11.jpg";
import img2 from "../../../../Assets/Images/Img22.jpg";
import img3 from "../../../../Assets/Images/Img33.jpg";
import { Link } from "react-router-dom";
import StockCard from "../../../Global/StockCard/StockCard";

const LandingPageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[100vh] p-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundVideo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`fixed top-0 left-0 w-full flex z-50 items-center justify-between p-4 transition-colors duration-300 ${
          isScrolled ? "bg-white opacity-[.9]" : "bg-transparent"
        }`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
          </Link>
        </div>

        <Link to="/signup">
          <button className="bg-green-700 text-white py-2 px-4 rounded-sm">
            Open account
          </button>
        </Link>
      </div>
      <div className="pt-20 flex absolute top-0 left-0 flex-col justify-center items-center h-full w-full text-white z-10 px-4">
        <div className="w-full sm:w-[75%] md:w-[50%] text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trade Stocks, Forex, Options and Crypto
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Join millions who have already discovered smarter investing in
            multiple types of assets. Choose an investment product to
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8">
          <StockCard
            head="Stocks & ETFs"
            text="20% commission means there’ll be markup on stocks & ETFs – no matter how much you invest"
            btn="Invest In Stocks"
            image={img1}
          />
          <StockCard
            head="Crypto"
            text="Buy, sell and store Bitcoin and other leading cryptos with ease"
            btn="Buy Crypto"
            image={img3}
          />
          <StockCard
            head="CFD Trading"
            text="Go long or short on FX from just 1 pip. Trade commodities and indices with flexible leverage."
            btn="Trade Now"
            image={img2}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageHeader;
