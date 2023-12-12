import { useNavigate } from 'react-router-dom';

const SobreMi = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Aqui va todo sobre mi </h1>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				return
			</button>
		</div>
	);
};

export default SobreMi;
