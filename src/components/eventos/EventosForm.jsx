import N1 from '../../imgs/sobre-mi/carousel1.jpeg';
import N2 from '../../imgs/sobre-mi/carousel2.jpeg';
import N3 from '../../imgs/sobre-mi/carousel3.jpeg';
import N4 from '../../imgs/sobre-mi/carousel4.jpeg';
import N5 from '../../imgs/sobre-mi/carousel5.jpeg';
import N6 from '../../imgs/sobre-mi/carousel6.jpeg';
import N7 from '../../imgs/sobre-mi/carousel7.jpeg';
import N8 from '../../imgs/sobre-mi/carousel8.jpeg';
import N9 from '../../imgs/sobre-mi/carousel9.jpeg';
import N10 from '../../imgs/sobre-mi/carousel10.jpeg';

import './eventosForm.css';

const EventosForm = () => {
	const imgs = [N1, N2, N3, N4, N5, N6, N7, N8, N9, N10];

	return (
		<>
			<section className='section-eventos-form'>
				<h1 className='section-titulo-eventos-form'>
					Deseas que participemos en tu evento, por favor llena el
					siguiente formulario:
				</h1>
				<form
					action='https://formsubmit.co/ddefd7bf16628e1b7409782bd58e9350'
					method='POST'
					className='section-form-eventos-form'
				>
					<div>
						<input type='date' name='fecha' id='fecha' />
						<label htmlFor='fecha'>
							Fecha tentativa día del evento
						</label>
					</div>
					<div>
						<input
							type='text'
							name='name'
							id='nombre'
							placeholder='Nombre'
						/>
						<label htmlFor='nombre'>Nombre del encargado</label>
					</div>
					<div>
						<input
							type='email'
							name='email'
							placeholder='Email Address'
							required
						/>
						<label htmlFor='email'>Email</label>
					</div>

					<div>
						<input
							type='text'
							name='telefono'
							id='telefono'
							placeholder='telefono'
						/>
						<label htmlFor='telefono'>Telefono</label>
					</div>
					<div>
						<input
							type='text'
							name='foro'
							id='foro'
							placeholder='foro'
						/>
						<label htmlFor='foro'>Tipo de foro</label>
					</div>
					<div>
						<input
							type='text'
							name='personas'
							id='personas'
							placeholder=' personas'
						/>
						<label htmlFor='personas'>Número de personas</label>
					</div>
					<div>
						<input
							type='text'
							name='ciudad'
							id='ciudad'
							placeholder='ciudad'
						/>
						<label htmlFor='ciudad'>Ciudad</label>
					</div>
					<div>
						<input
							type='text'
							name='estado'
							id='estado'
							placeholder='estado'
						/>
						<label htmlFor='estado'>Estado</label>
					</div>
					<div>
						<input
							type='text'
							name='modalidad'
							id='modalidad'
							placeholder='modalidad'
						/>
						<label htmlFor='modalidad'>Presencial o Virtual</label>
					</div>
					<div className='div-input-checked'>
						<label>
							¿Cuenta con algún lugar para la conferencia?
						</label>
						<input type='checkbox' name='lugar' id='lugar' />
					</div>
					<div className='div-textarea-asunto'>
						<textarea
							type='text'
							id='asunto'
							name='asunto'
							placeholder='Asunto'
						/>
						<label htmlFor='asunto'>Asunto:</label>
					</div>

					<div className='div-buttom-enviar'>
						<button type='submit'> Enviar </button>
					</div>
					<input
						type='hidden'
						name='_next'
						value='http://localhost:5173/#/eventos'
					></input>
					<input
						type='hidden'
						name='_subject'
						value='Nuevo evento'
					></input>
					<input type='hidden' name='_captcha' value='false'></input>
				</form>
			</section>
			<div className='container-section-logos'>
				<section className='section-logos'>
					{imgs.map((img, index) => (
						<div key={index}>
							<img src={img} alt={`imagen-${index}`} />
						</div>
					))}
				</section>
			</div>
		</>
	);
};

export default EventosForm;
