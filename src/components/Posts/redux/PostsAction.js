import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiBaseUrl = `https://jsonplaceholder.typicode.com`

export const getPosts = createAsyncThunk('getPosts', async () => {
	const res = await axios.get(`${apiBaseUrl}/posts`)
	return res.data
})
