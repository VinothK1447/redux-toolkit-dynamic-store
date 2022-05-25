import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from './PostsAction'

export const initialState = {
	posts: [],
	loading: false,
	error: undefined
}

const PostsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		getPosts: (state, action) => {
			state.posts = action.payload
			state.loading = true
		}
	},
	extraReducers: {
		[getPosts.pending]: (state, action) => {
			state.posts = []
			state.loading = true
		},
		[getPosts.fulfilled]: (state, action) => {
			state.posts = action.payload
			state.loading = false
		},
		[getPosts.rejected]: (state, action) => {
			state.posts = []
			state.loading = false
			state.error = action.payload
		}
	}
})

export const { getPost } = PostsSlice.actions
export default PostsSlice.reducer
