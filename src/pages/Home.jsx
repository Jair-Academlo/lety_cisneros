import { Container } from 'react-bootstrap';
import Logos from '../components/logos/Logos';
import Presentacion from '../components/presentacion/Presentacion';
import SobreMi from '../components/sobreMi/SobreMi';
import Entrevistas from '../components/entrevistas/Entrevistas';
import Libros from '../components/libros/Libros';
import Cursos from '../components/cursos/Cursos';
import ReservarSession from '../components/reservarSession/ReservarSession';

const Home = () => {
	return (
		<>
			<Container>
				<Presentacion />
				<Logos />
				<SobreMi />
				<Entrevistas />
				<Libros />
				<Cursos />
				<ReservarSession />
			</Container>
		</>
	);
};

export default Home;
