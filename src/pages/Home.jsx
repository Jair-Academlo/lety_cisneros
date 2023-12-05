import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Logos from '../components/logos/Logos';
import Presentacion from '../components/presentacion/Presentacion';
import SobreMi from '../components/sobreMi/SobreMi';
import Entrevistas from '../components/entrevistas/Entrevistas';

const Home = () => {
	return (
		<>
			<Container>
				<Header />
				<Presentacion />
				<Logos />
				<SobreMi />
				<Entrevistas />
			</Container>
		</>
	);
};

export default Home;
