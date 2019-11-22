import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 2
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case 'searchFocus':
      return state.set('focused', true)
      //immutable对象的set方法，会结合之前的immutable对象的值和设置的值返回一个新的对象
    case 'searchBlur':
      return state.set('focused', false)
    case 'changeListData':
      return state.merge({
        list: fromJS(action.data),
        totalPage: action.totalPage
      })
    case 'mouseEnter':
      return state.set('mouseIn', true)
    case 'mouseLeave':
      return state.set('mouseIn', false)
    case 'changePage':
      if (state.page < state.totalPage) {
        return state.set('page', state.page + 1)
      }else {
        return state.set('page', 0)
      }
    default:
      return state
  }
  // if(action.type === 'searchFocus') {
  //   return {
  //     focused: true
  //   }
  // }
  // if(action.type === 'searchBlur') {
  //   return {
  //     focused: false
  //   }
  // }
  // if(action.type === 'changeListData') {
  //   return state.set('list', fromJS(action.data)) // 注意！把普通数组data变为一个immutable类型
  // }
  // return state
}
