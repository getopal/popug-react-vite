import s from './Orders.module.scss'
import Nav from '../../components/Nav/Nav.jsx'
const index = () => {
	return (
		<div>
			<Nav />
			<div className={s.wrapper}>
				<div className={s.container}>Профиль</div>
			</div>
		</div>
	)
}

export default index
