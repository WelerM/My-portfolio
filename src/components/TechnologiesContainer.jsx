import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiGit,
    DiSass,
    DiMysql,
    DiBootstrap,
    DiReact
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, desc: 'Consumo de API, conhecimento em fluxo de controle, tratamento de erros, assincronicidade, funções, eventos, manipulação de DOM, sistemas, programas' },
    { id: 'react', name: 'React', icon: <DiReact />, desc: 'Vite, API, state, props, useEffect, eventos, classes, react-router-dom'},
    { id: 'node', name: 'Node', icon: <DiNodejsSmall />, desc: 'Criação de servidores com Express.js, banco de dados' },
    { id: 'git', name: 'Git', icon: <DiGit />, desc: 'Conhecimento nos comandos mais usados.' },
    { id: 'sass', name: 'Sass', icon: <DiSass />, desc: 'Uso diariamente com intuito de agilizar projetos.' },
    { id: 'sql', name: 'SQL', icon: <DiMysql />, desc: 'Conhecimento básico em queries.' },
    { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap />, desc: 'Uso diariamente com intuito de agilizar projetos.' },
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />, desc: 'Tags semânticas, manipulação de DOM com JavaScript' },
    { id: 'css', name: 'CSS3', icon: <DiCss3 />, desc: 'Flexbox, Responsividade com media queries, variáveis, -web-kits...' },

]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                      <div className='svg-container'>
                        {tech.icon}
                      </div>
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechnologiesContainer;