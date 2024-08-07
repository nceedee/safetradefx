import React from "react";

const RateDashboard = () => {
  return (
    <div>
      <div className="m-auto py-16 scrollbar-hidden border-t ">
        <iframe
          className="w-[80%] m-auto scrollbar-hidden h-[100vh] text-white"
          src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&pref_coin_id=1505&cnt=10&graph=yes"
          frameBorder="0"
          style={{ overflow: "hidden" }}
        ></iframe>
      </div>
    </div>
  );
};

export default RateDashboard;
