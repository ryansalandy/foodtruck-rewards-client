import axios from 'axios'
import apiUrl from '../apiConfig'

export const createReward = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/reward/',
    header: { 'Authorization': `Bearer ${user.token}` },
    data: ''
  })
}
