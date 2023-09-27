function useGetData() {
	const API_KEY = '3a4e39db19e79191bc436b7b7cfd190e';

	const getRates = async () => {
		const newData = await fetch(
			'http://data.fixer.io/api/latest?access_key=' + API_KEY
		);

		try {
			if (newData.ok) {
				const results = await newData.json();
				return _transformRates(results.rates);
			} else {
				console.error('Failed to fetch data');
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const getSymbols = async () => {
		const newData = await fetch(
			'http://data.fixer.io/api/symbols?access_key=' + API_KEY
		);

		try {
			if (newData.ok) {
				const results = await newData.json();
				return _transformSymbols(results.symbols);
			} else {
				console.error('Failed to fetch data');
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const getCountry = async () => {
		const newData = await fetch(
			'https://cors-anywhere.herokuapp.com/http://country.io/currency.json'
		);

		try {
			if (newData.ok) {
				const results = await newData.json();
				return _transformCountry(results);
			} else {
				console.error('Failed to fetch data');
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const _transformRates = (results) => {
		return { ...results };
	};

	const _transformSymbols = (results) => {
		const data = [];
		for (let item in results) {
			data.push({
				name: item,
				fullName: results[item],
			});
		}
		return data;
	};

	const _transformCountry = (results) => {
		const data = {};
		for (let item in results) {
			data[results[item]] = item;
		}
		return data;
	};

	return {
		getRates,
		getSymbols,
		getCountry,
	};
}

export default useGetData;
