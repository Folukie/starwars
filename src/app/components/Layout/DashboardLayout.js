import React from 'react'
import SideNav from '../Navigation/SideNav'
import Header from '../Navigation/Header'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="md:flex">
        <SideNav />
        <div className=" h-full py-8 px-8 text-primary-dark flex flex-col flex-1 overflow-y-auto ml-0 md:ml-24 w-11/12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
