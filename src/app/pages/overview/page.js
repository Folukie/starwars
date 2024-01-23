'use client'
import React, { useContext } from 'react'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import OverviewTable from '@/app/components/Table/OverviewTable'
import OverviewCard from '@/app/components/Navigation/OverviewCard'
import DataContext from '../../../contexts/DataContext'

const Overview = () => {
  const { data } = useContext(DataContext)

  return (
    <DashboardLayout>
      <div className=" mt-20 space-y-16">
        <OverviewCard />
        <div className="space-y-8 w-11/2">
          <p className="font-light text-sm text-lightgrey">Films</p>
          <div className="w-11/12">
            {data.films && (
              <div className="border border-greylight rounded-sm ">
                <OverviewTable data={data.films.results} />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Overview
