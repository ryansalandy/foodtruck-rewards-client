import axios from 'axios'
import apiUrl from '../apiConfig'

export const createReward = (user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/reward`,
    header: { 'Authorization': `Bearer ${user.token}` },
    data: {
      reward: {
        points: '',
        owner: user.id
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
