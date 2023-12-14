import { Container } from 'react-bootstrap';
import Section1 from '../components/SobreMI/section1/Section1';
import Section2 from '../components/SobreMI/section2/Section2';
import '../styles/SobreMi.css';

const SobreMi = () => {
	return (
		<>
			<Container>
				<Section1 />
				<Section2 />
			</Container>
		</>
	);
};

export default SobreMi;
