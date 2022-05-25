import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './UserActions'

export const initialState = {
	users: [],
	loading: false,
	error: undefined
}

const usersSlice = createSlice({
	name: 'Users',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.users = action.payload
			state.loading = true
		}
	},
	extraReducers: {
		[getUsers.pending]: (state, action) => {
			state.users = []
			state.loading = true
		},
		[getUsers.fulfilled]: (state, action) => {
			state.users = action.payload
			state.loading = false
		},
		[getUsers.rejected]: (state, action) => {
			state.users = []
			state.loading = false
			state.error = action.payload
		}
	}
})

export const { getUser } = usersSlice.actions
export default usersSlice.reducer
