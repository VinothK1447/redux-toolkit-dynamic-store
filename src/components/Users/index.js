import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './redux/UserActions'
import Card from '../partials/Card'
import { DynamicModuleLoader } from '../../redux/DynamicModuleLoader'
import UsersSlice from './redux/UsersSlice'

const Users = () => {
	const dispatch = useDispatch()
	const users = useSelector((state) => state?.UsersReducer?.users)
	const loading = useSelector((state) => state?.UsersReducer?.loading)
	const error = useSelector((state) => state?.UsersReducer?.error)

	useEffect(() => {
		dispatch(getUsers())
	}, [])

	return (
		<>
			{loading && <p>Loading...</p>}
			{!loading && users && users.length > 0 && users.map((user) => <Card type={'user'} data={user} key={user.id} />)}
			{!users && !loading && error && <p>{error.message}</p>}
		</>
	)
}

export default DynamicModuleLoader({
	name: 'UsersReducer',
	reducer: UsersSlice
})(Users)
