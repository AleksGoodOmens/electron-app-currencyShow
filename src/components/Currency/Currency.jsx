import React, { useEffect, useState } from 'react';
import useGetData from '../../utils/api';

import styles from './currency.module.css';

function Currency({ name, rate, title }) {
	const { getCountry } = useGetData();

	const [country, setCountry] = useState([]);

	useEffect(() => {
		getCountry().then((res) => {
			const countries = [];
			for (let key in res) {
				if (res[key] === name) countries.push({ [key]: res[key] });
			}
			setCountry(countries);
		});
	}, [name]);

	const CountiesFlags = ({ country }) => {
		return (
			<div className={styles.flags}>
				{country.map((item) => {
					const keys = Object.keys(item);
					return (
						<img
							key={keys}
							src={`https://flagcdn.com/16x12/${keys[0].toLowerCase()}.png`}
							srcSet={`
								https://flagcdn.com/16x12/${keys[0].toLowerCase()}.png 1x,
								https://flagcdn.com/16x12/${keys[0].toLowerCase()}.png 2x,
								https://flagcdn.com/48x36/${keys[0].toLowerCase()}.png 3x`}
							width="16"
							height="12"
							alt={name}
						></img>
					);
				})}
			</div>
			//
		);
	};

	return (
		<div className={styles.currency}>
			<h2 className={styles.heading}>{title}</h2>
			<div className={styles.box}>
				<div>
					<h3 className={styles.title}>страны хождения</h3>
					<CountiesFlags country={country} />
				</div>
				<div>
					<h3 className={styles.title}>короткое наименование</h3>
					<span className={styles.name}>{name}</span>
				</div>
				<div>
					<h3 className={styles.title}>стоимость к EURO</h3>
					<span className={styles.rate}>{rate}</span>
				</div>
			</div>
		</div>
	);
}

export default Currency;
