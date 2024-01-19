'use client'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import React, { useEffect, useState } from 'react'
import { getPeople } from '@/api/people'
import PeopleTable from '../../components/Table/PeopleTable'
import { Loading } from '@/app/components/Form/Loading'

const Pages = () => {
  const [people, setPeople] = useState()

  useEffect(() => {
    const fetchAllPeople = async () => {
      try {
        const people = await getPeople()
        setPeople(people)
      } catch (error) {
        console.error('error')
      }
    }
    fetchAllPeople()
  }, [])
  return (
    <DashboardLayout>
      <div className="mt-20 space-y-8">
        <p className="font-light text-sm text-lightgrey">People</p>
        {people ? (
          <div className="border border-greylight rounded-sm ">
            <PeopleTable data={people.results} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default Pages
