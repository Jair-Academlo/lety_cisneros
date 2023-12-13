import { useNavigate } from 'react-router-dom';
import N1 from '../../imgs/perfil/2.png';
import './sobreMi.css';

const SobreMi = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className='section-sobre-mi'>
				<div id='section-sobre-mi-div-1'>
					<div>
						<img src={N1} alt='imagen' />
					</div>
				</div>
				<div id='section-sobre-mi-div-2'>
					<div>
						<div>
							<p>
								<span>Hey! Soy Lety Cisneros</span>
								<br />
								<br />
								Estoy para ayudarte, soy Licenciada, Maestra y
								Doctora en Derecho; también soy Master en
								Psicología Holística y en Coaching Personal. Mi
								misión es ayudar a miles de seres humanos que
								desean una verdadera transformación en su vida;
								soy Licenciada, Maestra y Doctora en Derecho,
								además de que cuento con estudios como Master en
								Psicología Holística y Master en Coaching
								Personal.
							</p>
						</div>
						<div>
							<button
								onClick={() => {
									navigate('/sobre-mi');
								}}
							>
								Conoce mi historia
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SobreMi;
