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
							Ayudo a emprendedores y empresarios a escalar sus
							negocios a través de tecnología e historias.
						</h1>
						<p>
							Si quieres saber qué mentoría o programa es el
							indicado para ti, te regalos una sesión de
							diagnostico. Nuestros programas arrancar a partir de
							los $300 dólares americanos. Sería un gusto escuchar
							de ti:
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
