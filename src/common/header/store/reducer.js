import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: []
})
export default (state = defaultState, action) => {
  if(action.type === 'searchFocus') {
    //immutable对象的set方法，会结合之前的immutable对象的值和设置的值返回一个新的对象
    return state.set('focused', true)
  //  return {
  //     focused: true
  //   }
  }
  if(action.type === 'searchBlur') {
    return state.set('focused', false)
    // return {
    //   focused: false
    // }
  }
  if(action.type === 'changeListData') {
    return state.set('list', fromJS(action.data)) // 把普通数组data变为一个immutable类型
  }
  return state
}
