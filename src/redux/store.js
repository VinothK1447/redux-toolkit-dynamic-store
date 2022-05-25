import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createReducer from './rootReducer'

const REDUCER_ADDED = '@@dynamic-store/REDUCER_ADDED'
const REDUCER_REMOVED = '@@dynamic-store/REDUCER_REMOVED'

const reducers = createReducer()

export const store = configureStore({
	devTools: process.env.NODE_ENV !== 'production',
	reducer: { reducers }
})

const initializeStore = (options) => {
	store.asyncReducers = {}
	store.injectReducer = (key, reducer, parent) => {
		if (!parent && !store.asyncReducers.hasOwnProperty(key)) {
			store.asyncReducers[key] = reducer
		}
		if (store.asyncReducers.hasOwnProperty(parent)) {
			store.asyncReducers[parent] = combineReducers({
				[parent]: store.asyncReducers[parent],
				[key]: reducer
			})
		}
		store.replaceReducer(createReducer(store.asyncReducers))
		store.dispatch({ type: REDUCER_ADDED, payload: key })
	}
	store.removeReducer = (key, parent) => {
		if (!parent && store.asyncReducers.hasOwnProperty(key)) {
			delete store.asyncReducers[key]
		}
		if (store.asyncReducers.hasOwnProperty(parent)) {
			delete store.asyncReducers[parent][key]
		}
		store.dispatch({ type: `${REDUCER_REMOVED}/${key}`, payload: key })
		store.replaceReducer(createReducer(store.asyncReducers))
	}
	return store
}
export default initializeStore
