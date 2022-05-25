import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = React.lazy(() => import('./components/Home'))
const Users = React.lazy(() => import('./components/Users'))
const Posts = React.lazy(() => import('./components/Posts'))
const Comments = React.lazy(() => import('./components/Comments'))

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<div className='header'>
						<nav>
							<ul>
								<li>
									<Link to='/'>Home</Link>
								</li>
								<li>
									<Link to='/posts'>Posts</Link>
								</li>
								<li>
									<Link to='/users'>Users</Link>
								</li>
								<li>
									<Link to='/comments'>Comments</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className='content'>
						<Routes>
							<Route
								path='/'
								element={
									<React.Suspense fallback={<>Loading...</>}>
										<Home />
									</React.Suspense>
								}
							/>
							<Route
								path='/users'
								element={
									<React.Suspense fallback={<>Loading...</>}>
										<Users />
									</React.Suspense>
								}
							/>
							<Route
								path='/posts'
								element={
									<React.Suspense fallback={<>Loading...</>}>
										<Posts />
									</React.Suspense>
								}
							/>
							<Route
								path='/comments'
								element={
									<React.Suspense fallback={<>Loading...</>}>
										<Comments />
									</React.Suspense>
								}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		</>
	)
}

export default App
