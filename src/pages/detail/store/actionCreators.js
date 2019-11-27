import axios from 'axios'

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      const action = {
        type: 'changeDetail',
        title: result.title,
        content: result.content
      }
      dispatch(action)
    }).catch((e) => {
      console.log('error')
    })
  }
}
