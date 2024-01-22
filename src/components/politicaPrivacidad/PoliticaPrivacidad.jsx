import './politicaPrivacidad.css';

// eslint-disable-next-line react/prop-types
const PoliticaPrivacidad = ({ setModal }) => {
	return (
		<>
			<section>
				<div>
					<h1>Politica de Privacidad</h1>
				</div>
				<article>
					<p>
						De conformidad con la Ley de Protección de Datos
						Personales en Posesión de Particulares, Lety Cisneros,
						con domicilio en Toluca, Estado de México, es
						responsable de recabar sus datos personales, del uso que
						se le dé a los mismos y de su protección. El tratamiento
						de sus datos personales se realizará conforme a lo
						previsto en el presente aviso de privacidad.
					</p>
					<p>
						Los datos personales que recabamos de usted serán
						utilizados para las siguientes finalidades: proveer los
						servicios y productos que ha solicitado, notificarle
						sobre cambios en los mismos, realizar estudios internos
						sobre hábitos de consumo, etcétera.
					</p>
					<p>
						Para llevar a cabo las finalidades descritas en el
						presente aviso de privacidad, utilizaremos los
						siguientes datos personales: nombre, dirección, teléfono
						y profesión.
					</p>
					<p>
						Usted tiene derecho a conocer qué datos personales
						tenemos de usted, para qué los utilizamos y las
						condiciones del uso que les damos. Asimismo, es su
						derecho solicitar la corrección de su información
						personal en caso de que esté desactualizada, sea
						inexacta o incompleta (Rectificación); que la eliminemos
						de nuestros registros o bases de datos cuando considere
						que la misma no está siendo utilizada adecuadamente
						(Cancelación); así como oponerse al uso de sus datos
						personales para fines específicos (Oposición). Estos
						derechos se conocen como derechos ARCO.
					</p>
					<p>
						El mecanismo que se ha implementado para el ejercicio de
						dichos derechos es a través de la presentación de la
						solicitud respectiva al siguiente correo electrónico:
					</p>
					<p>
						Cualquier modificación a este aviso de privacidad podrá
						consultarla en esta app.
					</p>
				</article>
				<div>
					<button
						onClick={() => {
							setModal(false);
						}}
					>
						{' '}
						Cerrar{' '}
					</button>
				</div>
			</section>
		</>
	);
};

export default PoliticaPrivacidad;
