import axios from 'axios'
import apiUrl from '../apiConfig'

export const createReward = (user, data) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/rewards`,
    header: { 'Authorization': `Bearer ${user.token}` },
    data: {
      reward: {
        ratings: data.rating,
        truck: data.truck
      }
    }
  })
}

export const readReward = (id, user) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/reward`,
    headers: {
      'Authorization': `Bearer ${user.token}` }
  })
}

export const updateRewards = (id, user, reward) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/reward/${id}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      reward: {
        points: reward.points,
        owner: ''
      }
    }
  })
}

export const deletePost = (id, user) => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/reward/${id}`,
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}
