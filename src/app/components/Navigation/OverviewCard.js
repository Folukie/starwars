import React from 'react'
import { OverviewItems } from '../../constants/navigation'

const OverviewCard = () => {
  return (
    <div className="md:flex justify-between space-y-8 md:space-y-0 md:space-x-2 w-11/12 mx-auto md:mx-0">
      {OverviewItems.map((item, idx) => (
        <div key={idx} className="shadow-md p-5 py-6 rounded-md space-y-6">
          <div className="flex justify-between">
            <p className="text-primary-light font-medium">{item.name}</p>
            <p className={`h-5 w-5 rounded-sm bg-${item.color}`}></p>
          </div>
          <div className="space-y-1">
            <p className="text-primary-light font-medium ">200</p>
            <p className="text-green text-xs">20 More than than yesterday</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OverviewCard
