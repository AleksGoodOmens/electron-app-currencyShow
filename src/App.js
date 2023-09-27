import './App.css';
import { useEffect, useState } from 'react';
import useGetData from './utils/api';
import DropDown from './components/DropDown/DropDown';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Currency from './components/Currency/Currency';

function App() {
	const { getRates } = useGetData();

	const [title, setTitle] = useState(null);
	const [rate, setRate] = useState(null);
	const [currency, setCurrency] = useState(null);

	const onRequest = () => {
		getRates().then((res) => setRate(res));
	};

	useEffect(() => {
		onRequest();
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<main>
				<h1 className="title">Приветствую Вас!</h1>
				<DropDown
					setCurrency={setCurrency}
					setTitle={setTitle}
				/>

				{rate && currency && (
					<Currency
						title={title}
						name={currency}
						rate={rate[currency]}
					/>
				)}
			</main>

			<Footer />
		</div>
	);
}

export default App;
