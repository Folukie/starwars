import React from 'react'
import SideNav from '../Navigation/SideNav'
import Header from '../Navigation/Header'

const DashboardLayout = ({ children, goBackHref }) => {
  return (
    <div>
      <Header goBackHref={goBackHref} />
      <div className="md:flex">
        <SideNav />
        <div className=" h-full py-8 text-primary-dark flex flex-col flex-1 overflow-y-auto  md:ml-16 w-11/12 mx-auto ">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
