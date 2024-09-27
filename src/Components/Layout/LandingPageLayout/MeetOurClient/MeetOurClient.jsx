import React, { useEffect, useState } from "react";
import office from "../../../../Assets/Images/office2.jpg";
import { PiLineVerticalBold } from "react-icons/pi";
import Reviews from "../Reviews/Reviews";
import person1 from "../../../../Assets/Images/person1.jpeg";
import person2 from "../../../../Assets/Images/person2.jpeg";
import person3 from "../../../../Assets/Images/person3.jpeg";

const reviewsData = [
  {
    img: person1,
    comment:
      "Easy, Fast And reliable. I got my profits immediately after trading. Safe Trade FX is Awesome!",
    name: "David R. McNulty",
  },
  {
    img: person2,
    comment:
      "Great platform for starting traders. Great selection and transparent fee system!",
    name: "Bryce C. Bailey",
  },
  {
    img: person3,
    comment:
      "Safe Trade FX is a fantastic trading platform, both from an ease of use and technical perspective.",
    name: "Smith M. Williams",
  },
];

const MeetOurClient = () => {
  const [count, setCount] = useState(111);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Counting effect
  useEffect(() => {
    if (count < 984) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Adjust the speed of the count here

      return () => clearInterval(interval);
    }
  }, [count]);

  // Automatic review slide with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentReviewIndex(
          (prevIndex) => (prevIndex + 1) % reviewsData.length
        );
        setAnimate(false);
      }, 500); // Adjust to sync with the CSS animation duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mt-16 text-white p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(148, 95, 182, 0.5), rgba(99, 61, 167, 0.5)), url(${office})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:w-[80%] w-[70%] m-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Meet Our Clients</h1>
          <p>
            We are only as <span className="text-1xl">GOOD</span> as our clients
            say <span className="text-1xl">WE ARE.</span>
          </p>
        </div>
        <div className="flex items-center mt-14 justify-center">
          <PiLineVerticalBold className="text-yellow-500" />
          <p className="font-bold">3,543,{count} Open Trades</p>
        </div>

        <div className="mt-20 overflow-hidden relative h-[400px] flex items-center justify-center">
          <div
            className={`transition-transform duration-500 ease-in-out ${
              animate
                ? "transform -translate-x-full opacity-0"
                : "transform translate-x-0 opacity-100"
            }`}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <Reviews
              img={reviewsData[currentReviewIndex].img}
              comment={reviewsData[currentReviewIndex].comment}
              name={reviewsData[currentReviewIndex].name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurClient;
