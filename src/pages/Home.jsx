import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Logos from '../components/logos/Logos';
import Presentacion from '../components/presentacion/Presentacion';
import SobreMi from '../components/sobreMi/SobreMi';
import Entrevistas from '../components/entrevistas/Entrevistas';
import Libros from '../components/libros/Libros';
import Cursos from '../components/cursos/Cursos';
import ReservarSession from '../components/reservarSession/ReservarSession';
import Footer from '../components/footer/Footer';

const Home = () => {
	return (
		<>
			<Container>
				<Header />
				<Presentacion />
				<Logos />
				<SobreMi />
				<Entrevistas />
				<Libros />
				<Cursos />
				<ReservarSession />
				<Footer />
			</Container>
		</>
	);
};

export default Home;
