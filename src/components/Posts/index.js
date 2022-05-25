import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './redux/PostsAction'
import Card from '../partials/Card'
import { DynamicModuleLoader } from '../../redux/DynamicModuleLoader'
import PostsSlice from './redux/PostsSlice'

const Posts = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state?.PostsReducer?.posts)
	const loading = useSelector((state) => state?.PostsReducer?.loading)
	const error = useSelector((state) => state?.PostsReducer?.error)

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return (
		<>
			{loading && <p>Loading...</p>}
			{!loading && posts && posts.length > 0 && posts.map((post) => <Card type={'post'} data={post} key={post.id} />)}
			{!posts && !loading && error && <p>{error.message}</p>}
		</>
	)
}

export default DynamicModuleLoader({
	name: 'PostsReducer',
	reducer: PostsSlice
})(Posts)
