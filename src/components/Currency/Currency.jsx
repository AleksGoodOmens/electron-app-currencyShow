import React, { useEffect, useState } from 'react';
import useGetData from '../../utils/api';

import styles from './currency.module.css';

function Currency({ name, rate, title }) {
	const { getCountry } = useGetData();

	const [country, setCountry] = useState({});

	useEffect(() => {
		getCountry().then((res) => {
			setCountry(res);
		});
	}, []);

	return (
		<div className={styles.currency}>
			<h2>{title}</h2>
			{Object.keys(country).length > 0 && country[name] && (
				<img
					src={`https://flagcdn.com/16x12/${country[name].toLowerCase()}.png`}
					srcSet={`
					https://flagcdn.com/16x12/${country[name].toLowerCase()}.png 1x,
					https://flagcdn.com/16x12/${country[name].toLowerCase()}.png 2x,
					https://flagcdn.com/48x36/${country[name].toLowerCase()}.png 3x`}
					width="16"
					height="12"
					alt={name}
				></img>
			)}
			<span className={styles.name}>{name}</span>
			<span className={styles.rate}>{rate}</span>
		</div>
	);
}

export default Currency;
