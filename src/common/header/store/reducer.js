import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
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
  return state
}
