import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer} from '../common/header/store' // ES6语法，as相当于把引入的reducer更换名字为headerReducer

const reducer = combineReducers({
  header: headerReducer
})

export default reducer
