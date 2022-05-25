import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiBaseUrl = `https://jsonplaceholder.typicode.com`

export const getComments = createAsyncThunk('getComments', async () => {
	const res = await axios.get(`${apiBaseUrl}/comments`)
	return res.data
})
