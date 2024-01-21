'use client'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import { getFilms } from '@/api/film'
import { Loading } from '@/app/components/Form/Loading'
import OverviewTable from '@/app/components/Table/OverviewTable'
import OverviewCard from '@/app/components/Navigation/OverviewCard'

const Overview = () => {
  const [films, setFilms] = useState()

  useEffect(() => {
    const fetchAllFilms = async () => {
      try {
        const films = await getFilms()
        setFilms(films)
      } catch (error) {
        console.error('error')
      }
    }
    fetchAllFilms()
  }, [])
  return (
    <DashboardLayout>
      <div className=" mt-20 space-y-16">
        <OverviewCard />
        <div className="space-y-8 w-11/2">
          <p className="font-light text-sm text-lightgrey">Films</p>
          <div className="w-11/12">
            {films ? (
              <div className="border border-greylight rounded-sm ">
                <OverviewTable data={films.results} />
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Overview
