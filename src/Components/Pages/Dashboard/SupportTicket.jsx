import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import SideBar from '../../Layout/DashboardLayout/SideBar/SideBar';

const SupportTicket = () => {
  return (
    <div>
      <DashboardLayout routerName="Support Ticket">
        <div className="w-full md:w-1/4 lg:block hidden">
          <SideBar />
        </div>
      </DashboardLayout>
    </div>
  );
}

export default SupportTicket
