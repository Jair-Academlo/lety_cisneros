import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import N1 from '../../imgs/libros/imagen1.jpg';
import N2 from '../../imgs/libros/imagen2.jpg';

import './libros.css';

const Libros = () => {
	return (
		<>
			<section className='section-libros'>
				<div id='section-libros-titulo'>
					<h1>
						Conoce como millones de personas han cambiado sus vidas
						a traves de mis libros.
					</h1>
				</div>
				<div id='section-libros-descripcion'>
					<div className='div-imagen-libros-1'>
						<img src={N1} alt='imagen' />
					</div>
					<div className='div-libros-descripcion-1'>
						<div>
							<h2>NO CAMBIES, TRANSFÓRMATE</h2>
						</div>
						<div>
							<p>
								Este libro representa el resultado de más de dos
								años de entrenamiento mental de alto
								rendimiento, el cual se materializa
								perfectamente en diferentes experiencias y
								consejos que la autora proporciona para que cada
								ser humano que lea este libro, se inicie en el
								arte de mover emociones, cambiar resultados y
								lograr objetivos espectaculares para hacer de su
								vida algo extraordinario. Se integra por once
								capítulos, a través de los cuales la autora te
								lleva de la mano para preguntarte qué es lo que
								sigue para ti, y sobre todo es una invitación
								permanente a que te entrenes y te incomodes para
								lograr altos estándares en tu vida; es un
								ejercicio interesante de retórica y story
								telling, que pretende hacerte saber todos los
								resultados y evidencias de los entrenamientos
								vividos por ella, pero, sobre todo, para hacerte
								saber la forma en que su vida ha cambiado.
							</p>
						</div>
						<div>
							<button>
								{' '}
								<Link
									target='blank'
									to={
										'https://www.amazon.com.mx/NO-CAMBIES-TRANSF%C3%93RMATE-emociones-transformar-ebook/dp/B082NXSH5M/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14GXNV6CNNLSP&keywords=NO+CAMBIES+TRANSFORMATE&qid=1702061373&sprefix=no+cambies+transformate%2Caps%2C245&sr=8-2'
									}
								>
									Ver mas <FaArrowRight />
								</Link>{' '}
							</button>
						</div>
					</div>
				</div>
				<div id='section-libros-descripcion'>
					<div className='div-libros-descripcion-1'>
						<div>
							<h2>MUJERES DREAMS BOSS ABOGADAS</h2>
						</div>
						<div>
							<p>
								Ser abogada en este tiempo, en el que las
								mujeres estamos alcanzando altos estándares de
								ocupación de espacios en muchos aspectos de la
								vida, tiene un doble compromiso con nuestro
								género; ser mujer y ser abogada permite que los
								derechos de cada una de nosotras sean
								respetados, que a través de esas actividades
								elegidas por ellas se dé un valor muy especial a
								nuestro trabajo, nuestro papel en la sociedad y,
								desde luego, se reconozca que cada una de
								nosotras tenemos ciertas peculiaridades que, a
								través de esa perspectiva de género, deben
								considerarse como oro molido dentro de la
								sociedad. En este libro encontrarás grandes
								testimonios de extraordinarias abogadas, y de
								cómo a pesar de la adversidad, salieron adelante
								y se convirtieron en grandes referentes en el
								ámbito jurídico.
							</p>
						</div>
						<div>
							<button>
								{' '}
								<Link
									target='blank'
									to={
										'https://www.amazon.com.mx/Mujeres-Dreams-Boss-Abogadas-Casaponsa-ebook/dp/B0BT7LXHBF/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=N6DQF9GLQ4UA&keywords=MUJERES+DREAMS+BOSS+ABOGADAS&qid=1702061440&sprefix=mujeres+dreams+boss+abogadas%2Caps%2C162&sr=8-1'
									}
								>
									Ver mas <FaArrowRight />
								</Link>{' '}
							</button>
						</div>
					</div>
					<div className='div-imagen-libros-1'>
						<img src={N2} alt='imagen' />
					</div>
				</div>
			</section>
		</>
	);
};

export default Libros;
