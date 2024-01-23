'use client'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import React, { useContext } from 'react'
import StarshipsTable from '../../components/Table/StarshipsTable'
import { Loading } from '@/app/components/Form/Loading'
import DataContext from '../../../contexts/DataContext'

const Starships = () => {
  const { data } = useContext(DataContext)

  return (
    <DashboardLayout>
      <div className="mt-20 space-y-8 w-11/12">
        <p className="font-light text-sm text-lightgrey">Starships</p>
        {data.starships ? (
          <div className="border border-greylight rounded-sm ">
            <StarshipsTable data={data.starships.results} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default Starships
