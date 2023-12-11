import './presentacion.css';

const Presentacion = () => {
	return (
		<>
			<section className='section-presentacion'>
				<div id='div1'>
					<div id='div1-breve-descripcion'>
						¡Hola! En esta página queremos apoyarte a encontrar el
						sentido de tu vida y el para qué de tus habilidades, a
						través de algunas herramientas para hacer frente a
						etapas y circunstancias difíciles y que les encuentres a
						estas la utilidad para tu crecimiento personal,
						profesional y emocional. La felicidad es nuestro
						objetivo no como un destino, sino como tu camino.
					</div>
					<div id='div1-buttom-contactame'>
						<button>Contactame</button>
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
