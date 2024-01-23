'use client'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import React, { useContext } from 'react'
import PeopleTable from '../../components/Table/PeopleTable'
import { Loading } from '@/app/components/Form/Loading'
import DataContext from '../../../contexts/DataContext'

const Pages = () => {
  const { data } = useContext(DataContext)

  return (
    <DashboardLayout>
      <div className="mt-20 space-y-8 w-11/12">
        <p className="font-light text-sm text-lightgrey">People</p>
        {data.people ? (
          <div className="border border-greylight rounded-sm ">
            <PeopleTable data={data.people.results} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default Pages
