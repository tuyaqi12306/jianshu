import axios from 'axios'

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data
      if (result) {
        const action = {
          type: 'changeLogin',
          value: true
        }
        dispatch(action)
      }else {
        alert('登录失败')
      }
    })
  }
}

export const logout = () => ({
  type: 'changeLogout',
  value: false
})
