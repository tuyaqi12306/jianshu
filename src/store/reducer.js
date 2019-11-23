import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer} from '../common/header/store' // ES6语法，as相当于把引入的reducer更换名字为headerReducer
import { reducer as homeReducer} from '../pages/home/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer
