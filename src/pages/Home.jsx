import Header from '../components/header/Header';
import Logos from '../components/logos/Logos';
import Presentacion from '../components/presentacion/Presentacion';
import SobreMi from '../components/sobreMi/SobreMi';

const Home = () => {
	return (
		<>
			<Header />
			<Presentacion />
			<Logos />
			<SobreMi />
		</>
	);
};

export default Home;
