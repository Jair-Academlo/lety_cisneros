import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import './header.css';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<section className='section-header'>
				<div id='div1-nombre'>
					<span>Lety </span>Cisneros
				</div>
				<div className='menu-icon' onClick={toggleMenu}>
					{' '}
					<TiThMenu />
				</div>
				<div
					id='div2-links-section-header'
					className={showMenu ? 'show-menu' : ''}
				>
					<div>
						<Link
							to={'/'}
							onClick={() => {
								window.scrollTo(0, 0);
							}}
						>
							Inicio
						</Link>
					</div>
					<div>
						<Link
							to={'/sobre-mi'}
							onClick={() => {
								window.scrollTo(0, 0);
							}}
						>
							Quien Soy
						</Link>
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
