import './presentacion.css';

const Presentacion = () => {
	return (
		<>
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
							Si letty,¡Ayudame a triplicar mis ventas!{' '}
						</button>
					</div>
				</div>
				<div id='div3'>
					<img
						src='https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
						alt='profile'
					/>
				</div>
			</section>
		</>
	);
};

export default Presentacion;
