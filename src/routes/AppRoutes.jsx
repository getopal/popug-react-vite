import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/index.jsx'
import Login from '../pages/Login/index.jsx'
import Register from '../pages/Register/Index.jsx'
import Registration from '../pages/Registration/index.jsx'
import Order from '../pages/Order/Order.jsx'
import Orders from '../pages/ Orders/index.jsx'

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Register />} path='/register' />
			<Route element={<Registration />} path='/registr' />
			<Route element={<Order />} path='/order' />
			<Route element={<Orders />} path='/orders' />
		</Routes>
	)
}

export default AppRoutes
