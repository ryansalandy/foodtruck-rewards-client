import axios from 'axios'
import apiUrl from '../apiConfig'

export const createReward = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/rewards',
    headers: { 'Authorization': `Bearer ${user.token}` },
    data: {
      reward: {
        truck: data.truck,
        rating: data.rating
      }
    }
  })
}

export const readReward = (user, data) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/rewards',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

export const updateReward = (id, user, data) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/reward/${id}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      reward: {
        rating: data.rating,
        owner: ''
      }
    }
  })
}

export const deleteReward = (id, user) => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/reward/${id}`,
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}
