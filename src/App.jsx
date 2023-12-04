import './App.css';
import Header from './components/header/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Header />} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
