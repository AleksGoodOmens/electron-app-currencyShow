import React, { useEffect, useState } from 'react';
import useGetData from '../../utils/api';

import styles from './dropDown.module.css';

function DropDown({ setCurrency, setTitle }) {
	const { getSymbols } = useGetData();

	const [symbols, setSymbols] = useState(null);

	useEffect(() => {
		onRequest();
	}, []);

	const onRequest = () => {
		getSymbols().then((res) => setSymbols(res));
	};

	const addClass = (e) => {
		e.target.closest('BUTTON').classList.toggle(styles.active);
	};

	const handleClickCurrency = (name, fullName) => {
		setCurrency(name);
		setTitle(fullName);
	};
	return (
		<button
			onClick={(e) => {
				addClass(e);
			}}
		>
			<div className={styles.btn}>Выберите валюту</div>
			<ul>
				{symbols
					? symbols.map((symbol) => (
							<li
								onClick={() =>
									handleClickCurrency(symbol.name, symbol.fullName)
								}
								key={symbol.name}
							>
								{symbol.fullName}
							</li>
					  ))
					: 'please wait...'}
				<li></li>
			</ul>
		</button>
	);
}

export default DropDown;
