import { Axios } from './common'

export const getSpecies = async () => {
  const response = await Axios.get('species')
  return response.data
}

export const getOneSpecie = async (id) => {
  const response = await Axios.get(`species/${id}`)
  return response.data
}
