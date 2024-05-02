import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/index.jsx'
import Login from '../pages/Login/index.jsx'
import Register from '../pages/Register/Index.jsx'
import Registration from '../pages/Registration/index.jsx'

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Register />} path='/register' />
			<Route element={<Registration />} path='/registr' />
		</Routes>
	)
}

export default AppRoutes
