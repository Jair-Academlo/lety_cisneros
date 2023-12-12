import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
						<img
							src='data:image/png;base64,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'
							alt='imagen'
						/>
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
									ver mas <FaArrowRight />
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
									ver mas <FaArrowRight />
								</Link>{' '}
							</button>
						</div>
					</div>
					<div className='div-imagen-libros-1'>
						<img
							src='data:image/png;base64,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'
							alt='imagen'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Libros;
