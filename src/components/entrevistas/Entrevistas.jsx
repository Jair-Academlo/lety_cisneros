import N1 from '../../imgs/images/Imagen1.png';
import N2 from '../../imgs/images/Imagen2.png';
import N3 from '../../imgs/images/Imagen3.png';
import N4 from '../../imgs/images/Imagen4.png';
import N5 from '../../imgs/images/Imagen5.png';
import N6 from '../../imgs/images/Imagen6.png';
import N7 from '../../imgs/images/Imagen7.png';

import './entrevistas.css';

const Entrevistas = () => {
	return (
		<>
			<section className='section-entrevistas'>
				<div id='section-entrevistas-titulo'>
					<h1>
						He entrevistado a grandes líderes mundiales, ve algunas
						de las entrevistas
					</h1>
				</div>
				<div id='section-entrevistas-videos'>
					<div>
						<iframe
							src='https://www.youtube.com/embed/tcEEDP74hIg?si=UIHWszysw6zF-vKo'
							title='<h2>Mujeres Dreams Boss TV #04</h2>'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
						<h2>Mujeres Dreams Boss TV #04</h2>
					</div>
					<div>
						<iframe
							src='https://www.youtube.com/embed/r31bNz5-PY8?si=XZiSMOY_rRNcXOWa'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
						<h2>Si no lo registras, No es tuyo! </h2>
					</div>
				</div>
				<div id='section-entrevistas-imagenes'>
					<img src={N1} alt='imagen1' />
					<img src={N2} alt='imagen2' />
					<img src={N3} alt='imagen3' />
					<img src={N4} alt='imagen4' />
					<img src={N5} alt='imagen5' />
					<img src={N6} alt='imagen6' />
					<img src={N7} alt='imagen7' />
				</div>
			</section>
		</>
	);
};

export default Entrevistas;
