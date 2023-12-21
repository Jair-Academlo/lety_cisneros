import CargosActuales from '../components/SobreMI/cargosActuales/CargosActuales';
import Section1 from '../components/SobreMI/section1/Section1';
import Section2 from '../components/SobreMI/section2/Section2';
import Section3 from '../components/SobreMI/section3/Section3';
import Section4 from '../components/SobreMI/section4/Section4';
import '../styles/SobreMi.css';

const SobreMi = () => {
	return (
		<>
			<Section1 />
			<Section2 />
			<CargosActuales />
			<Section3 />
			<Section4 />
		</>
	);
};

export default SobreMi;
