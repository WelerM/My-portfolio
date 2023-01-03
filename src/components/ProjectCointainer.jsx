import {
    BsFillCpuFill,
    BsController,
    BsGlobe2,
    BsColumns
} from 'react-icons/bs'

import '../styles/components/projectscontainer.sass'


const ProjectContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Visite minha página de projetos
            </p>

            <div className="projects-grid">

                <div className="project-card">
                    <div className='svg-system'><BsFillCpuFill /></div>
                    <div className="project-info">
                        <h3>Sistemas</h3>
                        <ul>
                            <li><a className='project-card-link' href="https://github.com/WelerM/Registration-System---Desktop" target="_blank">Sistema de cadastro</a></li>
                        </ul>
                    </div>
                </div>

                <div className="project-card">
                    <div className='svg-sites'><BsGlobe2/></div>
                    <div className="project-info">
                        <h3>Sites</h3>
                        <ul>
                            <li><a href="https://github.com/WelerM/Site-em-React" target="_blank" className='project-card-link'>Site em React</a></li>
                        </ul>
                    </div>
                </div>

                <div className="project-card">
                    <div className='svg-games'><BsController/></div>
                    <div className="project-info">
                        <h3>Games</h3>
                        <ul>
                            <li><a href="https://github.com/WelerM/Game-in-JavaScript" target="_blank" className='project-card-link'>Kitten in DogsLand</a></li>
                        </ul>
                    </div>
                </div>

                <div className="project-card">
                    <div className='svg-clones'><BsColumns/></div>
                    <div className="project-info">
                        <h3>Clones</h3>
                        <ul>
                          <li><a className='project-card-link' href='https://github.com/WelerM/Clone-Netflix' target='_blank'>Netflix</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            {/*  <a href="https://github.com/WelerM" target="_blank" className="btn">Ver Projetos</a> */}
        </section>
    );
}

export default ProjectContainer;