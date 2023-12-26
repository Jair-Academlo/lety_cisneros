import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import N1 from '../../imgs/sobre-mi/derecho_Felicidad.jpeg';
import './cursos.css';

const Cursos = () => {
	return (
		<>
			<section className='section-cursos'>
				<div id='section-cursos-titulo'>
					<h1>
						Autora de la conferencia: Reclama tu derecho a la
						felicidad
					</h1>
				</div>
				<div id='section-cursos-imagenes'>
					<img src={N1} alt='imagen' />
				</div>
				<div id='section-cursos-button'>
					<Link
						to='https://hotmart.com/es/marketplace/productos/reclama-tu-derecho-a-la-felicidad/N89371405H'
						target='blank'
					>
						Ir a la conferencia <FaArrowRight />
					</Link>
				</div>
			</section>
		</>
	);
};

export default Cursos;
