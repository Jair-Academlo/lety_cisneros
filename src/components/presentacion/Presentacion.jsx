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
							Si estás enfrentando desafíos, atravesando etapas
							difíciles o simplemente buscas un impulso para
							alcanzar tus metas, este servicio puede
							proporcionarte las herramientas y el acompañamiento
							necesario. Sería un gusto escuchar de ti y ayudarte.
						</p>
					</div>
					<div id='div1-buttom-contactame'>
						<button>
							Si letty, ¡Ayudame a triplicar mis ventas!{' '}
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
