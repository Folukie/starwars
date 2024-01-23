'use client'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import React, { useContext } from 'react'
import SpeciesTable from '../../components/Table/SpeciesTable'
import { Loading } from '@/app/components/Form/Loading'
import DataContext from '../../../contexts/DataContext'

const Species = () => {
  const { data } = useContext(DataContext)

  return (
    <DashboardLayout>
      <div className="mt-20 space-y-8 w-11/12">
        <p className="font-light text-sm text-lightgrey">Species</p>
        {data.species ? (
          <div className="border border-greylight rounded-sm ">
            <SpeciesTable data={data.species.results} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default Species
