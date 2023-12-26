import './section4.css';
import N1 from '../../../imgs/sobre-mi/trascedencia1.jpeg';
import N2 from '../../../imgs/sobre-mi/transcendencia4.jpeg';
import N3 from '../../../imgs/sobre-mi/trascendencia3.jpeg';

const Section4 = () => {
	return (
		<>
			<section className='section-4-acerca-de-mi'>
				<div className='section-4-acerca-de-mi-div-1'>
					<img src={N1} alt='imagen-profesional' />
					<img src={N2} alt='imagen-profesional' />
					<img src={N3} alt='imagen-profesional' />
				</div>
				<div className='section-4-acerca-de-mi-div-2'>
					<h1>Experiencia Profesional Destacada</h1>
					<div>
						<h2>Coordinadora de Posgrado</h2>
						<p>Universidad Autónoma del Estado de México, 2019</p>
					</div>
					<div>
						<h2>
							Secretaria Particular del Coordinador General de
							Administración
						</h2>
						<p>
							Oficina de la Presidencia de la República, 2013-2018
						</p>
						<ul>
							<li>
								Presidente Suplente del Comité de Ética y de
								Prevención de Conflictos de Interés, 2015-2018.
							</li>
						</ul>
					</div>
					<div>
						<h2>Secretaria Particular</h2>
						<p>
							Secretaría de Turismo del Estado de México,
							2012-2013
						</p>
					</div>
					<div>
						<h2>Presidenta del Consejo Directivo</h2>
						<p>
							Colegio de Abogados del Estado de México, A.C.,
							2013-2015
						</p>
					</div>
					<div>
						<h2>
							Subdirectora de Regulación a Empresas de Seguridad
							Privada
						</h2>
						<p>
							Secretaría de Seguridad Ciudadana del Estado de
							México, 2011
						</p>
					</div>
					<div>
						<h2>
							Subdirectora de Administración y Recursos Materiales
						</h2>
						<p>Secretaría General de Gobierno, 2007-2010</p>
						<ul>
							<li>
								Secretaria Técnica del Comité de Adquisiciones y
								Servicios, 2007-2010.
							</li>
						</ul>
					</div>
					<div>
						<h2>Secretaria Técnica</h2>
						<p>
							Cámara de Diputados, Comisión de Asuntos
							Electorales, 2006
						</p>
					</div>
					<div>
						<h2>
							Titular del Área de Atención a Medios de Impugnación
							en Materia Electoral
						</h2>
						<p>
							Instituto Electoral del Estado de México, 2003-2005
						</p>
					</div>
					<div>
						<h2>Subdirectora de Justicia Electoral</h2>
						<p>
							Instituto Electoral del Estado de México, 1998-2003
						</p>
					</div>
					<div>
						<h2>Jefe de Departamento de Justicia Electoral</h2>
						<p>
							Instituto Electoral del Estado de México, 1996-1998
						</p>
						<ul>
							<li>
								Secretaria Técnica del Comité de Adquisiciones,
								Arrendamientos, Enajenaciones y Servicios,
								1996-2003.
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Section4;
