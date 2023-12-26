import N1 from '../../../imgs/sobre-mi/academica3.jpeg';
import N2 from '../../../imgs/sobre-mi/academica1.jpeg';
import './section3.css';

const Section3 = () => {
	return (
		<>
			<section className='section-3-acerca-de-mi'>
				<div className='section-3-acerca-de-mi-div-1'>
					<h1>Trascendencia Academica</h1>
					<div>
						<h2>Licenciatura en Derecho</h2>
						<ul>
							<li>
								Facultad de Derecho, Universidad Autónoma del
								Estado de México
							</li>
							<li>Cédula Profesional: 2411465</li>
						</ul>
					</div>
					<div>
						<h2>Maestría en Derecho</h2>
						<ul>
							<li>
								Facultad de Derecho, Universidad Autónoma del
								Estado de México
							</li>
							<li>Cédula Profesional: 9999402</li>
						</ul>
					</div>
					<div>
						<h2>Doctorado en Derecho</h2>
						<ul>
							<li>Escuela de Posgrados en Derecho</li>
							<li>Cédula Profesional: 12745408</li>
						</ul>
					</div>
					<div>
						<h2>Post-doctorado en Derecho</h2>
						<ul>
							<li>Escuela de Posgrados en Derecho</li>
						</ul>
					</div>
					<div>
						<h2>Maestría en Psicología Holística</h2>
						<ul>
							<li>Grupo INENKA, España</li>
							<li>Apostillamiento de La Haya</li>
						</ul>
					</div>
					<div>
						<h2>Maestría en Coaching Personal</h2>
						<ul>
							<li>Grupo INENKA, España</li>
							<li>Apostillamiento de La Haya</li>
						</ul>
					</div>
				</div>

				<div className='section-3-acerca-de-mi-div-2'>
					<img src={N2} alt='imagen-academica' />
					<img src={N1} alt='imagen-academica' />
				</div>
			</section>
		</>
	);
};

export default Section3;
