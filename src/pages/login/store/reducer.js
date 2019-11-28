import { fromJS } from 'immutable'
const defaultStates = fromJS({
  login: false
})

export default (state = defaultStates, action) => {
  switch (action.type) {
    case 'changeLogin':
      return state.set('login', action.value)
    case 'changeLogout':
      return state.set('login', action.value)
    default:
      return state
  }
}
