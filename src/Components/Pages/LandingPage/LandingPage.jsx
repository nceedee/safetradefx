import React from "react";
import LandingPageLayout from "../../Layout/LandingPageLayout/LandingPageLayout";
import paper from '../../../Assets/Images/paper.jpg'

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: `url(${paper})`, backgroundRepeat: 'no-repeat' ,backgroundSize: 'cover', overflow: 'hidden' }}>
      <div>
        <LandingPageLayout />
      </div>
    </div>
  );
};

export default LandingPage;
