import './libros.css';

const Libros = () => {
	return (
		<>
			<section className='section-libros'>
				<div id='section-libros-titulo'>
					<h1>Informacion de libros</h1>
				</div>
				<div id='section-libros-descripcion'>
					<div>
						<div>
							<img
								src='data:image/png;base64,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'
								alt='imagen'
								width={150}
								height={150}
							/>
						</div>
					</div>
					<div>
						<div>
							<h2>titulo del libro</h2>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aperiam esse doloremque sunt
								aliquid similique, repudiandae non maxime ut
								quas dolores in recusandae nulla quaerat eum.
								Iste possimus voluptates explicabo eligendi
								incidunt optio aut labore placeat illum? Tempora
								facere dolorum corporis porro ex, alias
								doloribus earum vitae iusto fugit ipsum
								voluptate.
							</p>
						</div>
						<div>
							<button> ver mas </button>
						</div>
					</div>
				</div>
				<div id='section-libros-descripcion-bloque-2'>
					<div>
						<div>
							<img
								src='data:image/png;base64,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'
								alt='imagen'
								width={150}
								height={150}
							/>
						</div>
					</div>
					<div>
						<div>
							<h2>titulo del libro</h2>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aperiam esse doloremque sunt
								aliquid similique, repudiandae non maxime ut
								quas dolores in recusandae nulla quaerat eum.
								Iste possimus voluptates explicabo eligendi
								incidunt optio aut labore placeat illum? Tempora
								facere dolorum corporis porro ex, alias
								doloribus earum vitae iusto fugit ipsum
								voluptate.
							</p>
						</div>
						<div>
							<button> ver mas </button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Libros;
