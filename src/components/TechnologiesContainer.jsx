import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiPhp,
    DiGit,
    DiSass,
    DiMysql,
    DiBootstrap,
    DiReact,

} from 'react-icons/di'
import { SiElectron } from 'react-icons/si'
import { FaLaravel } from "react-icons/fa";

import '../assets/sass/components/technologiescontainer.sass'

const technologies = [
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, desc: 'Consumo de API, fluxo de controle, tratamento de erros, assincronicidade, funções, classes, manipulação de DOM...' },
    { id: 'react', name: 'React', icon: <DiReact />, desc: 'Vite, API, state, props, useEffect, eventos, classes, react-router-dom' },
    { id: 'react-native', name: 'React Native', icon: <DiReact />, desc: 'Vite, API, state, props, useEffect, eventos, classes, react-router-dom' },
    { id: 'node', name: 'Node', icon: <DiNodejsSmall />, desc: 'Criação de servidores com Express.js, rotas, integração com banco de dados SQL...' },
    { id: 'git', name: 'Git', icon: <DiGit />, desc: 'Conhecimento nos comandos mais usados.' },
    { id: 'php', name: 'PHP', icon: <DiPhp />, desc: 'Comunicação, queries no SQL, PhpMydmin, programação OOP e procedural, prepared statements...' },
    { id: 'laravel', name: 'Laravel', icon: <FaLaravel />, desc: '' },
    { id: 'sql', name: 'SQL', icon: <DiMysql />, desc: 'Conhecimento nas queries básicas, PhpMyAdmin, joins, integração com node e php...' },
    { id: 'electron', name: 'Electron', icon: <SiElectron />, desc: 'Sistemas multiplataforma, integração com banco de dados sql, nosql' },
    { id: 'sass', name: 'Sass', icon: <DiSass />, desc: '' },
    { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap />, desc: '' },
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />, desc: 'Tags semânticas, manipulação de DOM com JavaScript' },
    { id: 'css', name: 'CSS3', icon: <DiCss3 />, desc: 'Flexbox, Responsividade com media queries, variáveis, -web-kits...' },

]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Technologies</h2>
            <div className="technologies-grid">

                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        
                        <div className='svg-container'>
                            {tech.icon}
                        </div>

                        <h3>{tech.name}</h3>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default TechnologiesContainer;