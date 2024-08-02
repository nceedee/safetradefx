import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import CoinCard from "../../Global/CoinCard/CoinCard";
import btc from "../../../Assets/Images/btc.png";
import img4 from "../../../Assets/Images/img4.png";
import FormModal from "../../Global/FormModal/FormModal";

const Payout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState("");

  const handleOpenModal = (coinType) => {
    setSelectedCoin(coinType);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <DashboardLayout routerName="Payout">
        <div className="bg-[#0f143a] ">
          <div className="flex items-start md:flex-row m-auto p-6 space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <CoinCard img={btc} onClick={() => handleOpenModal("BTC")} />
              <CoinCard img={img4} onClick={() => handleOpenModal("ETH")} />
            </div>
          </div>
        </div>
      </DashboardLayout>

      <FormModal
        open={modalOpen}
        handleClose={handleCloseModal}
        coinType={selectedCoin}
      />
    </div>
  );
};

export default Payout;
