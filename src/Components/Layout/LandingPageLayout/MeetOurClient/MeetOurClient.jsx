import React, { useState } from "react";
import office from "../../../../Assets/Images/office2.jpg";
import Reviews from "../Reviews/Reviews";
import safe1 from "../../../../Assets/Images/safe1.png";
import safe2 from "../../../../Assets/Images/safe2.png";
import safe3 from "../../../../Assets/Images/safe3.png";
import safe4 from "../../../../Assets/Images/safe4.png";
import safe5 from "../../../../Assets/Images/safe5.png";
import safe6 from "../../../../Assets/Images/safe6.png";
import safe7 from "../../../../Assets/Images/safe7.png";
import safe8 from "../../../../Assets/Images/safe9.png";
import { Link } from "react-router-dom";

const reviewsData = [
  {
    img: safe1,
    name: "Adrian Smith",
    position: "POS Mining division manager",
  },
  {
    img: safe2,
    name: "Robert Baker",
    position: "CEO",
  },
  {
    img: safe3,
    name: "Kevin Morris",
    position: "HR, PR and Marketing Director",
  },
  {
    img: safe4,
    name: "Alan Doyle",
    position: "IPO Specialist",
  },
  {
    img: safe5,
    name: "Carl Ross",
    position: "Start-ups projects' selection specialist",
  },
  {
    img: safe6,
    name: "Nicholas King",
    position: "Managing director of development",
  },
  {
    img: safe7,
    name: "Daniel Taylor",
    position: "Public Relations Manager",
  },
  {
    img: safe8,
    name: "Mark Brown",
    position: "Offline business investment specialist",
  },
];

const MeetOurClient = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  return (
    <div
      className="mt-16 text-white p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(148, 95, 182, 0.5), rgba(99, 61, 167, 0.5)), url(${office})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:w-[80%] w-[90%] m-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Our Team</h1>
          <p>Company management and main fund's managers.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"><Link to="/about-us">Read More About Us</Link></button>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="relative h-[400px] w-full flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <Reviews
                img={reviewsData[currentReviewIndex].img}
                position={reviewsData[currentReviewIndex].position}
                name={reviewsData[currentReviewIndex].name}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center space-x-2">
            {reviewsData.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentReviewIndex(index)}
                className={`cursor-pointer w-3 h-3 rounded-full border ${
                  index === currentReviewIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurClient;
