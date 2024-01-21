import React, { useEffect, useState } from 'react'
import { OverviewItems } from '../../constants/navigation'
import { getFilms } from '@/api/film'
import { getStarships } from '@/api/starships'
import { getSpecies } from '@/api/species'
import { getPeople } from '@/api/people'

const OverviewCard = () => {
  const [count, setCount] = useState({
    films: '',
    starships: '',
    people: '',
    species: '',
  })
  useEffect(() => {
    const fetchAllDataCount = async () => {
      try {
        const [films, people, starships, species] = await Promise.all([
          getFilms(),
          getPeople(),
          getStarships(),
          getSpecies(),
        ])
        setCount({
          films: films.count,
          people: people.count,
          starships: starships.count,
          species: species.count,
        })
      } catch (error) {
        console.error('error')
      }
    }
    fetchAllDataCount()
  }, [])
  return (
    <div className="md:flex justify-between space-y-8 md:space-y-0 md:space-x-2 mx-auto md:mx-0 w-full  md:w-10/12">
      {OverviewItems.map((item, idx) => (
        <div key={idx} className="shadow-md p-6 rounded-md space-y-6">
          <div className="flex justify-between">
            <p className="text-primary-light font-medium">{item.name}</p>
            <p className={`h-5 w-5 rounded-sm bg-${item.color}`}></p>
          </div>
          <div className="space-y-1">
            <p className="text-primary-light font-medium ">
              {count[item.name.toLowerCase()] || '...'}
            </p>
            <p className="text-green text-xs">20 More than than yesterday</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OverviewCard
