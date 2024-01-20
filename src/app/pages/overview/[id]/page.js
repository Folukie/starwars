/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import { usePathname, useRouter } from 'next/navigation'
import { getOneFilm } from '@/api/film'
import { Loading } from '@/app/components/Form/Loading'
import CardItem from '@/app/components/Card/CardItem'

const FilmItem = () => {
  const pathname = usePathname()
  const router = useRouter()
  const pathSegments = pathname.split('/')
  const id = pathSegments[pathSegments.length - 1] || '1'
  const [filmData, setFilmData] = useState()
  useEffect(() => {
    const fetchOneFilm = async () => {
      try {
        const film = await getOneFilm(id)
        setFilmData(film)
      } catch (error) {
        console.error('error')
      }
    }
    fetchOneFilm()
  }, [id])

  return (
    <DashboardLayout goBackHref>
      <div className=" mt-20 space-y-16">
        {filmData ? (
          <CardItem
            title={filmData.title}
            sub1Item={filmData.producer}
            sub2Item={filmData.director}
            sub3Item={filmData.release_date}
            sub1={'Director'}
            sub2={'Producer'}
            sub3={'Release Date'}
            image={'/images/films.png'}
          />
        ) : (
          <Loading />
        )}
      </div>
    </DashboardLayout>
  )
}

export default FilmItem
