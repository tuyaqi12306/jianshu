import {fromJS} from 'immutable'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_HomeData':
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    case 'add_articleList':
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })
    default:
      return state
  }
}
