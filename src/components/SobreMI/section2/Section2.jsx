import libro1 from '../../../imgs/sobre-mi/best-seller.jpeg';
import './section2.css';

const Section2 = () => {
	return (
		<>
			<section className='section-2-acerca-de-mi'>
				<div className='section-2-acerca-de-mi-div-1'>
					<img src={libro1} />
				</div>
				<div className='section-2-acerca-de-mi-div-2'>
					<h1>Actividades Literarias</h1>
					<ul>
						<li>
							Autora del best seller &quot;No cambies,
							transfórmate&quot;, disponible en Amazon desde 2019.
						</li>
						<li>
							Coautora del libro &quot;Mujeres Dreams Boss
							Abogadas&quot; y colaboradora en diversas
							publicaciones durante 2021 y 2022.
						</li>
						<li>
							Coordinadora del libro &quot;El Instituto de la
							Defensoría Pública del Estado de México en el
							Sexenio del Fortalecimiento al Acceso a la
							Justicia&quot;, publicado en julio de 2023.
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Section2;
