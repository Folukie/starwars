'use client'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import React, { useEffect, useState } from 'react'
import StarshipsTable from '../../components/Table/StarshipsTable'
import { Loading } from '@/app/components/Form/Loading'
import { getStarships } from '@/api/starships'

const Starships = () => {
  const [starships, setStarships] = useState()

  useEffect(() => {
    const fetchAllstarships = async () => {
      try {
        const starships = await getStarships()
        setStarships(starships)
      } catch (error) {
        console.error('error')
      }
    }
    fetchAllstarships()
  }, [])
  return (
    <DashboardLayout>
      <div className="mt-20 space-y-8 w-11/12">
        <p className="font-light text-sm text-lightgrey">Starships</p>
        {starships ? (
          <div className="border border-greylight rounded-sm ">
            <StarshipsTable data={starships.results} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default Starships
