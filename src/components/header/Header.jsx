import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<section className='section-header'>
				<div>
					<Link>Quien Soy</Link>
				</div>
				<div>
					<Link>Eventos y Conferencias</Link>
				</div>
				<div>
					<Link>Blog</Link>
				</div>
			</section>
		</>
	);
};

export default Header;
