import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<section className='section-header'>
				<div id='div1-nombre'>
					<span>Lety </span>Cisneros
				</div>
				<div id='div2-links-section-header'>
					<div>
						<Link to={'/'}>Inicio</Link>
					</div>
					<div>
						<Link to={'/sobre-mi'}>Quien Soy</Link>
					</div>
					<div>
						<Link>Eventos y Conferencias</Link>
					</div>
					<div>
						<Link>Blog</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
