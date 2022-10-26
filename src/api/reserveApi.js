import axios from '../config/axios'

export const getReserveRoom = () => axios.get('/rooms/:propertyId/cardProperty')
