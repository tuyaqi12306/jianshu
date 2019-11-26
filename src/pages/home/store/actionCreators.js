import axios from 'axios'
import {fromJS} from 'immutable'
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_HomeData',
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
      }
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  debugger;
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      const action = {
        type: 'add_articleList',
        list: fromJS(result),
        nextPage: page + 1
      }
      dispatch(action)
    })
  }
}
