import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiBaseUrl = `https://jsonplaceholder.typicode.com`

export const apiSlice = createApi({
	reducerPath: 'CommentsReducer',
	baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
	endpoints: (builder) => ({
		getComments: builder.query({
			query: () => '/comments'
		})
	})
})
export const { useGetCommentsQuery } = apiSlice
