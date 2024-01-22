import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import './footer.css';

// eslint-disable-next-line react/prop-types
const Footer = ({ setModal }) => {
	return (
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
						Copyright © 2023 Leticia Cisneros Reservados todos los
						derechos
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
	);
};

export default Footer;
