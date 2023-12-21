import './eventosForm.css';

const EventosForm = () => {
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
						<label htmlFor='fecha'>
							Fecha tentativa día del evento:
						</label>
						<input type='date' name='fecha' id='fecha' />
					</div>
					<div>
						<label htmlFor='nombre'>Nombre del encargado:</label>
						<input
							type='text'
							name='name'
							id='nombre'
							placeholder='Nombre'
						/>
					</div>
					<div>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							name='email'
							placeholder='Email Address'
							required
						/>
					</div>
					<div>
						<label htmlFor='asunto'>Asunto:</label>
						<input
							type='text'
							id='asunto'
							name='asunto'
							placeholder='Asunto'
						/>
					</div>
					<div>
						<label htmlFor='telefono'>Telefono:</label>
						<input
							type='text'
							name='telefono'
							id='telefono'
							placeholder='telefono'
						/>
					</div>
					<div>
						<label htmlFor='foro'>Tipo de foro:</label>
						<input
							type='text'
							name='foro'
							id='foro'
							placeholder='foro'
						/>
					</div>
					<div>
						<label htmlFor='personas'>Número de personas:</label>
						<input
							type='text'
							name='personas'
							id='personas'
							placeholder=' personas'
						/>
					</div>
					<div>
						<label htmlFor='ciudad'>Ciudad:</label>
						<input
							type='text'
							name='ciudad'
							id='ciudad'
							placeholder='ciudad'
						/>
					</div>
					<div>
						<label htmlFor='estado'>Estado:</label>
						<input
							type='text'
							name='estado'
							id='estado'
							placeholder='estado'
						/>
					</div>
					<div>
						<label htmlFor='lugar'>
							Cuentan con algún lugar o sin lugar para la
							conferencia:
						</label>
						<input
							type='text'
							name='lugar'
							id='lugar'
							placeholder='lugar'
						/>
					</div>
					<div>
						<label htmlFor='modalidad'>Presencial o Virtual:</label>
						<input
							type='text'
							name='modalidad'
							id='modalidad'
							placeholder='modalidad'
						/>
					</div>
					<div>
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
		</>
	);
};

export default EventosForm;
