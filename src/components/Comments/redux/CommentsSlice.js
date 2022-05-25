import { createSlice } from '@reduxjs/toolkit'
import { getComments } from './CommentsAction'

export const initialState = {
	// comments: [],
	loading: false,
	error: undefined
}

const CommentsSlice = createSlice({
	name: 'Comments',
	initialState,
	reducers: {
		getComments: (state, action) => {
			state.comments = action.payload
			state.loading = true
		}
	},
	extraReducers: {
		[getComments.pending]: (state, action) => {
			state.comments = []
			state.loading = true
		},
		[getComments.fulfilled]: (state, action) => {
			state.comments = action.payload
			state.loading = false
		},
		[getComments.rejected]: (state, action) => {
			state.comments = []
			state.loading = false
			state.error = action.payload
		}
	}
})

export const { getComment } = CommentsSlice.actions
export default CommentsSlice.reducer
