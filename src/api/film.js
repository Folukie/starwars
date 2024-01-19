import { Axios } from './common'

export const getFilms = async () => {
  const response = await Axios.get('films')
  return response.data
}

export const getOneFilm = async (id) => {
  const response = await Axios.get(`films/${id}`)
  return response.data
}
