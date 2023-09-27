import React from 'react';

import styles from './footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<span className={styles.year}>2023</span>
			<a
				className={`${styles.link} ${styles.email}`}
				href="mailto:agsfinks@gmail.com"
			>
				Клик для связи со мной по почте
			</a>
			<a
				className={styles.link}
				href="https://webdeveloperaleks.com/"
			>
				Алексей Гоменюк
			</a>
		</footer>
	);
}

export default Footer;
