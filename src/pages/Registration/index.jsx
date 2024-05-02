import s from '../Login/Login.module.scss'

const index = () => {
	return (
		<div>
			<div className={s.wrapper}>
				<div className={s.container}>
					<h1 className={s.text}>Регистрация</h1>
					<div className={s.inputs}>
						<input placeholder={'ФИО'} />
						<input type={'email'} placeholder={'Электронная почта'} />
						<input placeholder={'Номер телефона'} />
						<input placeholder={'Логин'} />
						<input type={'password'} placeholder={'Пароль'} />
					</div>
					<button className={s.btn}>Зарегистрироваться</button>
				</div>
			</div>
		</div>
	)
}

export default index
