import React, { useEffect, useState } from 'react'
import Card from '../partials/Card'
import axios from 'axios'

const Comments = () => {
	const apiBaseUrl = `https://jsonplaceholder.typicode.com`
	const errMsg = 'Something went wrong! Try again later.'
	const [comments, setComments] = useState()
	const [err, setErr] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getComments()
	}, [loading])

	const getComments = async () => {
		try {
			const res = await axios.get(`${apiBaseUrl}/comments`)
			setComments(res.data)
			setLoading(false)
			setErr(false)
		} catch (e) {
			setComments([])
			setLoading(false)
			setErr(true)
		}
	}

	return (
		<>
			{loading && <p>Loading...</p>}
			{err && <p>{errMsg}</p>}
			{comments && comments.length > 0 && comments.map((comment) => <Card type={'comment'} data={comment} key={comment.id} />)}
		</>
	)
}
export default Comments
