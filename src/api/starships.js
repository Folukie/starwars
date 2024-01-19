import { Axios } from './common'

export const getStarships = async () => {
  const response = await Axios.get('starships')
  return response.data
}

export const getOneStarship = async (id) => {
  const response = await Axios.get(`starships/${id}`)
  return response.data
}
