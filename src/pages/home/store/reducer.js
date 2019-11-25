import {fromJS} from 'immutable'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  writerList: []
})

export default (state = defaultState, action) => {
  console.log(1111,action)
  switch (action.type) {
    case 'change_HomeData':
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    default:
      return state
  }
}
