import React from 'react'
import { getOneFilm } from '@/api/film'

const FilmItem = () => {
  return (
    <div>
      FilmItem
      <p>hfhhd</p>
    </div>
  )
}
export const getServerSideProps = async ({ params, req }) => {
  const { id } = params
  console.log({ id })
  let oneFilm = null,
    error = null
  await getOneFilm(
    id,
    (data) => {
      oneFilm = data
    },
    (err) => (error = err.error),
    req,
  )

  return {
    props: {
      oneFilm,
      error,
      host: req.headers.host,
    },
  }
}

export default FilmItem
