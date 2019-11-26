import {fromJS} from 'immutable'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
})
const changeHomeData = (state, action) => {
  return state.merge({
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  })
}
const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_HomeData':
      return changeHomeData(state, action)
    case 'add_articleList':
      return addArticleList(state, action)
    case 'change_ScrollTopShow':
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
