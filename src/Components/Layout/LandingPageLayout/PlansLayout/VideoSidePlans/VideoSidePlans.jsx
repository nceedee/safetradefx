import React from "react";
import plansvideo from '../../../../../Assets/Videos/plansvideo.mp4'

const VideoSidePlans = () => {
  return (
    <div className="w-[90%] flex m-auto p-0 mt-10 lg:mt-0 lg:p-12">
      <video
        className=" object-cover w-[100%] rounded-lg"
        controls
        src={plansvideo}
      />
    </div>
  );
};

export default VideoSidePlans;
