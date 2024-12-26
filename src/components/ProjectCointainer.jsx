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
            <h2>Projects</h2>

            <div className="projects-grid">

                <div className="project-card">
                    <div className='svg-icon'><BsFillCpuFill /></div>
                    <div className="project-info">
                        <h3 style={{marginBottom: '1rem'}}>Systems</h3>
                        <ul>
                            <li  style={{marginBottom: '0.3rem'}}><a className='project-card-link' href="https://github.com/WelerM/loja-online-mvc-php" target="_blank"># Online Store - PHP, SQL, Authentication, MVC pattern</a></li>
                            <li style={{marginBottom: '0.3rem'}}><a className='project-card-link'  href="https://github.com/WelerM/Registration_System__SQL_Electron" target="_blank"># Registration system - Electron</a></li>
                            <li  style={{marginBottom: '0.3rem'}}><a className='project-card-link' href="https://github.com/WelerM/PHP-schedule-system-MVC" target="_blank"># Schedule System - PHP, MVC pattern</a></li>
                            <li><a className='project-card-link' href="https://github.com/WelerM/crud-php-cores" target="_blank"># CRUD in PHP</a></li>
                        </ul>
                    </div>
                </div>

        

                <div className="project-card">
                    <div className='svg-icon'><BsController/></div>
                    <div className="project-info">
                        <h3 style={{marginBottom: '1rem'}}>Games in JavaScript</h3>
                        <ul>
                            <li style={{marginBottom: '0.3rem'}}><a href="https://github.com/WelerM/JS_Game___Kitten_in_Dogs_Land" target="_blank" className='project-card-link'># Kitten in Dog's Land</a></li>
                            <li style={{marginBottom: '0.3rem'}}><a href="https://github.com/WelerM/JS_Game___Rock-catch" target="_blank" className='project-card-link'># Rock Catch</a></li>
                        </ul>
                    </div>
                </div> 

   

            </div>

        </section>
    );
}

export default ProjectContainer;
