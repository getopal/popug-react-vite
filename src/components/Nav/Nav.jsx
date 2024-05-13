import { Link } from 'react-router-dom'
import s from './Nav.module.scss'

const Nav = () => {
	return (
		<div className={s.nav}>
			<Link to='/'>Главная</Link>
			<Link to='/login'>Вход</Link>
			<Link to='/registr'>Регистрация</Link>
		</div>
	)
}

export default Nav
