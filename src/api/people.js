import { Axios } from './common'

export const getPeople = async () => {
  const response = await Axios.get('people')
  return response.data
}

export const getOnePerson = async (id) => {
  const response = await Axios.get(`people/${id}`)
  return response.data
}
