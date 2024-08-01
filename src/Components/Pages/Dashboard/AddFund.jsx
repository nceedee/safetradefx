import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import btc from "../../../Assets/Images/btc.png";
import usdt from "../../../Assets/Images/img2.png";
import doge from "../../../Assets/Images/img3.png";
import eth from "../../../Assets/Images/img4.png";
import ltc from "../../../Assets/Images/img5.png";
import trx from "../../../Assets/Images/img6.png";
import LoadingModal from "../../Global/LoadingModal/LoadingModal";
import CoinCard from "../../Global/CoinCard/CoinCard";
import { PaymentModal } from "../../Global/PaymentModal/PaymentModal";


const coins = [
  {
    name: "Bitcoin",
    img: btc,
    address: "bc1qd3fkjy40mgkrzp5znvq7athxd4dz0uf6gar8dw",
  },
  { name: "USDT", img: usdt, address: "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK" },
  {
    name: "Dogecoin",
    img: doge,
    address: "DLErnVRNxUgdB99Xc9uaVvBKovt85WiSUD",
  },
  {
    name: "Ethereum",
    img: eth,
    address: "0xAD14546bD843b6b288FF9543F6D055f96cdb06Bc",
  },
  {
    name: "Litecoin",
    img: ltc,
    address: "ltc1qvn9r4dja6pmpzl889zumz2p9rctkzuzxruf8tc",
  },
  { name: "TRX", img: trx, address: "TAonHMVYCPELEcBKfmxGEfRC1wTEtUqHvK" },
];

const AddFund = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = (coin) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCoin(null);
    setIsModalOpen(false);
  };

  const handleConfirmPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Your transaction will be examined from the admins side and will reflect in less than 24hrs.");
    }, 5000);
  };

  return (
    <div>
      <DashboardLayout routerName="Add Funds">
        <div className="bg-[#0f143a] min-h-screen">
          <div className="flex items-start md:flex-row m-auto p-6 space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-6 justify-center">
              {coins.map((coin) => (
                <CoinCard
                  key={coin.name}
                  img={coin.img}
                  onClick={() => openModal(coin)}
                />
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>

      {isModalOpen && (
        <PaymentModal
          coin={selectedCoin}
          onClose={closeModal}
          onConfirm={handleConfirmPayment}
        />
      )}

      {isLoading && <LoadingModal />}

      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-[#202b5d] p-8 rounded-lg text-white text-center">
            <p className="text-xl">{message}</p>
            <button
              className="bg-blue-500 p-3 rounded-lg text-white mt-4"
              onClick={() => setMessage("")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



export default AddFund;
