import React from 'react';

import styles from './header.module.css';

import logo from './1658843.png';

function Header() {
	return (
		<header className={styles.header}>
			специально для
			<img
				src={logo}
				alt="pbfGroup"
			/>
		</header>
	);
}

export default Header;
