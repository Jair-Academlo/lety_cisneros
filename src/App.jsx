import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SobreMi from './pages/SobreMi';

const App = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sobre-mi' element={<SobreMi />} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
