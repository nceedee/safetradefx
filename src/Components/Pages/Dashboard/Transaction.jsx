import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import SideBar from '../../Layout/DashboardLayout/SideBar/SideBar';

const Transaction = () => {
  return (
    <div>
      <DashboardLayout routerName="Transaction">
        <div className="bg-[#0f143a] text-white p-6">
          <SideBar />
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Transaction
