import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Login.module.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};

		console.log(data);
	};
	return (
		<div className={styles.Login}>
			<div className={styles["Login-container"]}>
				<Image src={logo} alt="logo" className={styles["login-logo"]} />
				<form action="/" className={styles.form} ref={form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles["input input-email"]} />
					<label htmlFor="password" className={styles.label}>Password</label>
					<input type="password" name="password" placeholder="*********" className={styles["input input-password"]} />
					<button className={styles["primary-button login-button"]} onClick={handleSubmit} >Login
					</button>
					<Link href="/">Forgot my password</Link>
				</form>
				<button className={`${styles["secondary-button"]} ${styles["signup-button"]}`}>Sign up</button>
			</div>
		</div>
	);
};

export default Login;