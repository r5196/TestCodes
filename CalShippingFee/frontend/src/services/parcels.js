import axios from 'axios'
const baseUrl = '/api/fees'

const create = async (newParcels) => {
  const response = await axios.post(baseUrl, newParcels)
  return response.data
}

export default { create }