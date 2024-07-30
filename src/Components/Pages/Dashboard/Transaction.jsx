import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import SideBar from '../../Layout/DashboardLayout/SideBar/SideBar';

const Transaction = () => {
  return (
    <div>
      <DashboardLayout routerName="Transaction">
        <div className="w-full md:w-1/4 lg:block hidden">
          <SideBar />
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Transaction
