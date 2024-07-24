import React from 'react';
import homevideo from '../../../../Assets/Videos/homevideo.mp4'

const VideoSide = () => {
  return (
    <div className="w-[90%] flex m-auto p-0 mt-10 lg:mt-0 lg:p-12">
      <video className=" object-cover w-[100%] rounded-lg" controls src={homevideo} />
    </div>
  );
}

export default VideoSide
