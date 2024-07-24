import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Reviews = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto flex  flex-col space-y-10 py-20 lg:py-40 border-t">
      <div className="flex font-bold items-center  ">
        <HorizontalRuleIcon sx={{ fontSize: 40 }} className="text-blue-700" />
        <h2 className="text-4xl">Reviews</h2>
      </div>
      <div className="flex justify-center flex-col lg:flex-row space-y-10 lg:space-y-0">
        <div className="w-[100%] lg:w-[30%] flex items-start">
          <FormatQuoteIcon className="text-gray-300" sx={{ fontSize: 50 }} />
          <div>
            <p>
              I never believed in bitcoin trade, but I just gave it a try after
              seeing the Safetrade Fx ad on Instagram and ever since it has been
              a wonderful experience with them.
            </p>
            <h2>Van Hunter</h2>
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] flex items-start">
          <FormatQuoteIcon className="text-gray-300" sx={{ fontSize: 50 }} />
          <div>
            <p>
              I have invested with this platform and gotten my money in my
              account. This is legit and safe. Great doing business with safe
              trade Fx.
            </p>
            <p>Peter Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
