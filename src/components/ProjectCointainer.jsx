import {
    BsFillCpuFill,
    BsController,
    BsGlobe2,
    BsColumns
} from 'react-icons/bs'
import { MdOutlineSmartphone } from "react-icons/md";

import '../assets/sass/components/projectscontainer.sass'


const ProjectContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Visite meus projetos
            </p>

            <div className="projects-grid">

                <div className="project-card">
                    <div className='svg-icon'><BsFillCpuFill /></div>
                    <div className="project-info">
                        <h3>Sistemas</h3>
                        <ul>
                            <li><a className='project-card-link' href="https://github.com/WelerM/Registration-System__ElectronJS" target="_blank">Sistema de cadastro em Electron</a></li>
                            <li><a className='project-card-link' href="https://github.com/WelerM/PHP-schedule-system-MVC" target="_blank">Sistema de agendamento em PHP (Padrão MVC)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="project-card">
                    <div className='svg-icon'><BsGlobe2/></div>
                    <div className="project-info">
                        <h3>Sites</h3>
                        <ul>
                            <li><a href="https://github.com/WelerM/My-portfolio" target="_blank" className='project-card-link'>Meu portfólio (React, Vite, Sass)</a></li>
                            <li><a href="https://github.com/WelerM/Site-em-React" target="_blank" className='project-card-link'>Site em React</a></li>
                            <li><a href="https://github.com/WelerM/focus-2.0-php" target="_blank" className='project-card-link'>Site em PHP + Bootstrap (Para empresa de meu pai)</a></li>
                        </ul>
                    </div>
                </div>
   
                <div className="project-card">
                    <div className='svg-icon'><MdOutlineSmartphone/></div>
                    <div className="project-info">
                        <h3>Aplicativos</h3>
                        <ul>
                            <li><a href="https://github.com/WelerM/Rect-Native-Node-JS" target="_blank" className='project-card-link'>App em React Native que comunica com servidor NodeJS</a></li>
                        </ul>
                    </div>
                </div>

                <div className="project-card">
                    <div className='svg-icon'><BsController/></div>
                    <div className="project-info">
                        <h3>Games em JavaScript</h3>
                        <ul>
                            <li><a href="https://github.com/WelerM/JS_Game___Kitten_in_Dogs_Land" target="_blank" className='project-card-link'>Kitten in Dog's Land</a></li>
                            <li><a href="https://github.com/WelerM/JS_Game___Rock-catch" target="_blank" className='project-card-link'>Rock Catch</a></li>
                        </ul>
                    </div>
                </div> 

   

            </div>
            {/*  <a href="https://github.com/WelerM" target="_blank" className="btn">Ver Projetos</a> */}
        </section>
    );
}

export default ProjectContainer;
