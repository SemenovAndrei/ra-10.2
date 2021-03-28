import { createStore, combineReducers } from 'redux'
import serviceListReducer from '../reducers/serviceList'
import serviceAddReducer from '../reducers/serviceAdd'
import serviceFilterReducer from '../reducers/serviceFilter'

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceFilter: serviceFilterReducer,
})

const store = createStore(reducer)

export default store
