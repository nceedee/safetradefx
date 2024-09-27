import React from 'react';
import { Header } from '../../../Layout/DashboardLayout/Header/Header'
import {SideBar} from '../../../Layout/DashboardLayout/SideBar/SideBar';


export const Withdraw = () => {
  return (
    <div className='bg-secondary2 min-h-screen'>
      <Header />
      <SideBar>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center text-white font-bold text-2xl lg:text-3xl p-2'>Withdraw funds</h1>
          <div className=' text-gray-200 font-mono'>
            <p>You have no funds to withdraw.
</p>
          </div>
        </div>
      </SideBar>
    </div>
  )
}
