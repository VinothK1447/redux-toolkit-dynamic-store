import React from 'react'
import { ReactReduxContext } from 'react-redux'

const getPropertySafely = (obj, path) => {
	var i, len, current
	if (typeof obj === 'object' && typeof path === 'string' && Object.keys(obj).length && path.length) {
		path = path.split('.')
		len = path.length
		current = obj

		for (i = 0; i < len; i++) {
			if (current.hasOwnProperty(path[i])) {
				current = current[path[i]]
			} else {
				return undefined
			}
		}

		return current
	} else {
		return undefined
	}
}

const DynamicModuleLoader = (obj) => (WrappedComponent) => {
	if (!Object.keys(obj).length || !getPropertySafely(obj, 'name') || !getPropertySafely(obj, 'reducer')) {
		console.warn('Error on invocation of dynamic module loading!')
		return false
	}
	return (props) => {
		return (
			<ReactReduxContext.Consumer>
				{({ store }) => {
					store.injectReducer(obj.name, obj.reducer, obj.parent)
					if (obj.removeArray && Array.isArray(obj.removeArray)) {
						obj.removeArray.forEach((reducer) => {
							store.removeReducer(reducer, obj.parent)
						})
					}
					return <WrappedComponent {...props} />
				}}
			</ReactReduxContext.Consumer>
		)
	}
}

export { DynamicModuleLoader }
