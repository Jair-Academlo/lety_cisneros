import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Eventos from './pages/Eventos';
import './App.css';
import { useState } from 'react';
import PoliticaPrivacidad from './components/politicaPrivacidad/PoliticaPrivacidad';

const App = () => {
	const [modal, setModal] = useState(false);
	return (
		<>
			<HashRouter>
				{modal ? (
					<PoliticaPrivacidad setModal={setModal} />
				) : (
					<>
						<Header />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/sobre-mi' element={<SobreMi />} />
							<Route path='/eventos' element={<Eventos />} />
						</Routes>
						<Footer setModal={setModal} />
					</>
				)}
			</HashRouter>
		</>
	);
};

export default App;
