import Nav from '../../components/Nav/Nav.jsx'
import s from '../ Orders/Orders.module.scss'

const Order = () => {
	return (
		<div>
			<Nav />
			<div className={s.wrapper}>
				<div className={s.container}>
					<h2>Ваша заявка</h2>
					<div className={s.text}>
						<img
							src='https://avatars.githubusercontent.com/u/69221349?v=4'
							alt='картинку кто-то съел'
						/>
						<div>
							<h3>Арсений</h3>
							<p>Порода: Ара </p>
							<p>Пол: Мужской</p>
							<p>Цвет: Желтый</p>
							<p className={s.price}> Цена: от 35000 ₽</p>
						</div>
						<button>Отправить заявку</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Order
