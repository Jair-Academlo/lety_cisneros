import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Logos from '../components/logos/Logos';
import Presentacion from '../components/presentacion/Presentacion';
import SobreMi from '../components/sobreMi/SobreMi';

const Home = () => {
	return (
		<>
			<Container>
				<Header />
				<Presentacion />
				<Logos />
				<SobreMi />
			</Container>
		</>
	);
};

export default Home;
