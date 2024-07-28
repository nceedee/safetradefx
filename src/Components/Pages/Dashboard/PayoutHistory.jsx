import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import SideBar from '../../Layout/DashboardLayout/SideBar/SideBar';

const PayoutHistory = () => {
  return (
    <div>
      <DashboardLayout routerName="Payout History">
        <div className="bg-[#0f143a] text-white p-6">
          <SideBar />
        </div>
      </DashboardLayout>
    </div>
  );
}

export default PayoutHistory
