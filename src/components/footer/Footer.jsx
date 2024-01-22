import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import './footer.css';
import { useState } from 'react';
import PoliticaPrivacidad from '../politicaPrivacidad/PoliticaPrivacidad';

const Footer = () => {
	const [modal, setModal] = useState(false);

	return (
		<>
			{modal ? (
				<PoliticaPrivacidad setModal={setModal} />
			) : (
				<>
					<section className='section-footer'>
						<div id='siguenos-en'>
							<p>Nuestras Redes Sociales:</p>
						</div>
						<div id='footer-redes-sociales'>
							<div>
								<FaFacebook className='footer-redes-sociales-icons' />
							</div>
							<div>
								<FaInstagram className='footer-redes-sociales-icons' />
							</div>
							<div>
								<FaYoutube className='footer-redes-sociales-icons' />
							</div>
						</div>
						<div id='footer-copyrigth'>
							<h6>
								Copyright © 2023 Leticia Cisneros Reservados
								todos los derechos
							</h6>
							<h6
								onClick={() => {
									setModal(true);
								}}
							>
								Políticas de privacidad
							</h6>
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default Footer;
