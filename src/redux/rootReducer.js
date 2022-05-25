import { combineReducers } from 'redux'
import BaseReducer from './base/BaseSlice'

const createReducer = (asyncReducers) =>
	combineReducers({
		BaseReducer,
		...asyncReducers
	})

export default createReducer
