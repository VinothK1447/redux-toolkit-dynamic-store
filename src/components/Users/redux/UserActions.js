import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiBaseUrl = `https://jsonplaceholder.typicode.com`

export const getUsers = createAsyncThunk('getUsers', async () => {
	const res = await axios.get(`${apiBaseUrl}/users`)
	return res.data
})
