import axios from 'axios'

export const UPDATE_USER = 'users:updateUser'
export const SHOW_ERROR = 'users:showError'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export const apiRequest = () => (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res.data))
    .catch(err => {
      console.log(err)
      dispatch(showError())
    }
  )
  return {
    type: null,
    payload: null
  }
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'ERROR!!!'
    }
  }
}