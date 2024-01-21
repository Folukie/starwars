'use client'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import React, { useEffect, useState } from 'react'
import SpeciesTable from '../../components/Table/SpeciesTable'
import { Loading } from '@/app/components/Form/Loading'
import { getSpecies } from '@/api/species'

const Species = () => {
  const [species, setSpecies] = useState()

  useEffect(() => {
    const fetchAllspecies = async () => {
      try {
        const species = await getSpecies()
        setSpecies(species)
      } catch (error) {
        console.error('error')
      }
    }
    fetchAllspecies()
  }, [])
  return (
    <DashboardLayout>
      <div className="mt-20 space-y-8 w-11/12">
        <p className="font-light text-sm text-lightgrey">Species</p>
        {species ? (
          <div className="border border-greylight rounded-sm ">
            <SpeciesTable data={species.results} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default Species
