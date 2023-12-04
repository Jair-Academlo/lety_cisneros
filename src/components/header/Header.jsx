import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<section>
				<Link>Quien Soy</Link>
				<Link>Eventos y Conferencias</Link>
				<Link>Blog</Link>
			</section>
		</>
	);
};

export default Header;
