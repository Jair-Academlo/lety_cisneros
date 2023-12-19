import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sobre-mi' element={<SobreMi />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
};

export default App;
