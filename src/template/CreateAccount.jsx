import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
	return (
		<div className={styles.CreateAccount}>
			<div className={styles["CreateAccount-container"]}>
				<h1 className={styles.title}>My account</h1>
				<form action="/" className={styles.form}>
					<div>
						<label htmlfor="name" className={styles.label}>Name</label>
						<input type="text" id="name" placeholder="Teff" className={styles["input input-name"]} />
						<label htmlfor="email" className={styles.label}>Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className={styles["input input-email"]} />
						<label htmlfor="password" className={styles.label}>Password</label>
						<input type="password" id="password" placeholder="*********" className={styles["input input-password"]} />
					</div>
					<input type="submit" value="Create" className={`${styles["primary-button"]} ${styles["login-button"]}`} />
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;