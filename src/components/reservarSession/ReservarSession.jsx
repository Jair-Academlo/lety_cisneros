import { Link } from 'react-router-dom';
import N1 from '../../imgs/perfil/1.png';
import { FaArrowRight } from 'react-icons/fa';

import './reservarSession.css';

const ReservarSession = () => {
	return (
		<>
			<section className='section-reservar-session'>
				<div id='container-reservar-session'>
					<div id='div-session-titulo'>
						<h1>¿Quieres profundizar sobre todos estos temas?</h1>
					</div>
					<div id='div-session-descripcion'>
						En una sesión podremos empezar juntos a descubrir las
						razones por las que te encuentras en un estado de
						tristeza o de insatisfacción, ya que esto puede deberse
						a una variedad de factores, como el trabajo, las
						relaciones, la salud o el dinero. Será importante
						encontrar el o los factores que te aquejan para sentirte
						deprimido.
						<br />
						<br />
						Te mostraré cómo con 21 acciones podremos transformar
						estas circunstancias y ayudarte a hacer una planeación
						de vida y a encontrar la felicidad en ella.
					</div>
					<div id='div-session-button'>
						<button>
							<Link
								to={'https://wa.me/527222440536'}
								target='blank'
							>
								Reservar Ahora! <FaArrowRight />
							</Link>
						</button>
					</div>
				</div>

				<div id='div-session-bloque-2'>
					<img src={N1} alt='profile' />
				</div>
			</section>
		</>
	);
};

export default ReservarSession;
