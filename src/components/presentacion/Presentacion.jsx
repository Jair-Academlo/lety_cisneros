import N1 from '../../imgs/perfil/1.png';
import './presentacion.css';

const Presentacion = () => {
	return (
		<>
			<section className='margin-sectio-presentacion'></section>
			<section className='section-presentacion'>
				<div id='div1'>
					<div id='div1-breve-descripcion'>
						<h1>
							Ayudo a emprendedores, negocios y empresarios a
							impulsarlos a alcanzar sus metas en etapas difíciles
							a través de herramientas y acompañamiento necesario.
						</h1>
						<p>
							Si estás enfrentando desafíos personales o
							empresariales o no estás logrando alcanzar tus
							metas, te regalamos una sesión de mentoría para que
							puedas conocer cómo las herramientas necesarias y el
							acompañamiento pueden ayudarte a lograr tus
							objetivos.
						</p>
					</div>
					<div id='div1-buttom-contactame'>
						<button>
							Si Lety, ¡Ayúdame a lograr mis objetivos!
						</button>
					</div>
				</div>
				<div id='div3'>
					<img src={N1} alt='profile' />
				</div>
			</section>
		</>
	);
};

export default Presentacion;
