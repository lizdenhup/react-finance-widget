import fetch from 'isomorphic-fetch'

// const BASE_URL = 'https://pacific-plains-89545.herokuapp.com/api/v1'
//not using Heroku for now - deploying locally to avoid headaches 
const BASE_URL = "http://localhost:3002/api/v1"

const token = JSON.parse(localStorage.getItem('token'))
 
const headers =  {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer: ${token}`
}
// this parseResponse function should handle errors

const parseResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        return Promise.reject(json.errors)
      }
      return json
    })
}

export default {
  get(url) {
    return fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: headers
    })
    .then(parseResponse)
  },

  post(url, data ={}) {
    const body = JSON.stringify(data)
    console.log('here is the data and the body')
    console.log(data)
    console.log(body)
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(parseResponse)
  },
  
  patch(url, data ={}) {
    const body = JSON.stringify(data)
    return fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      headers: headers,
      body: body
    })
    .then(parseResponse)
  },

  delete(url) {
    return fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: headers
    })
    .then(parseResponse)
  }

}