import React from "react";
import PointReuseable from "./PointReuseable";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AirplayIcon from "@mui/icons-material/Airplay";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const Points = () => {
  return (
    <div className="flex justify-evenly pb-28 laptop:w-[50%]  m-auto">
      <PointReuseable
        icon={<AccountBalanceIcon style={{ fontSize: 50 }} />}
        heading="Legal Company"
        text="Our Company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe."
      />
      <PointReuseable
        icon={<AirplayIcon style={{ fontSize: 50 }} />}
        heading="High reliability"
        text="We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks."
      />
      <PointReuseable
        icon={<VpnKeyIcon style={{ fontSize: 50 }} />}
        heading="Anonymity"
        text="Anonymity and using cryptocurrency as a payment instrument. In the era of electronic money - this is one of the most convenient ways of cooperation."
      />
    </div>
  );
};

export default Points;
