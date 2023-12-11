import N1 from '../../imgs/logos/N1.png';
import N2 from '../../imgs/logos/N2.png';
import N3 from '../../imgs/logos/N3.png';
import N4 from '../../imgs/logos/N4.png';
import N5 from '../../imgs/logos/N5.png';
import N6 from '../../imgs/logos/N6.png';
import N7 from '../../imgs/logos/N7.png';
import N8 from '../../imgs/logos/N8.png';
import N9 from '../../imgs/logos/N9.png';
import N10 from '../../imgs/logos/N10.png';

import './logos.css';

const Logos = () => {
	const logos = [N1, N2, N3, N4, N5, N6, N7, N8, N9, N10];

	return (
		<>
			<section className='section-logos'>
				{logos.map((logo, index) => (
					<div key={index}>
						<img src={logo} alt={`imagen-${index}`} />
					</div>
				))}
			</section>
		</>
	);
};

export default Logos;
