import s from './Login.module.scss'

const index = () => {
	return (
		<div>
			<div className={s.wrapper}>
				<div className={s.container}>
					<h1 className={s.text}>Вход</h1>
					<div className={s.inputs}>
						<input type={'email'} placeholder={'Электронная почта'} />
						<input type={'password'} placeholder={'Пароль'} />
					</div>
					<button className={s.btn}>Войти</button>
				</div>
			</div>
		</div>
	)
}

export default index