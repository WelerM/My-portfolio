import Avatar from './img/profile.png'
import '../assets/sass/components/sidebar.sass'
import SocialNetworks from './SocialNetWorks';
import InformationContainer from './InformationContainer';
import Degree from './img/degree.png'
import English from './img/english.png'
import PDF from '../assets/pdf/curriculo.pdf'

const Sidebar = () => {
    return (
        <aside id="sideBar">
            <img className='img-profile' src={Avatar} alt="Weler Martins" />
            <p className="title-1">Desenvolvedor</p>
            <SocialNetworks />
            <div className='degree-container'>

                <div className='collage'>
                    <img src={Degree} alt="" />
                    <div className='collage-texts'>

                        <><h3>Formação</h3><p>Análise e Desenvolvimento de Sistemas</p></>
                    </div>
                </div>

                <div className='fluent'>
                    <img src={English} alt="" />
                    <div className='fluent-texts'>
                        <p>Fluente em inglês</p>

                        <p> <a className='ef-education' href="https://www.efset.org/cert/2SGYf7" target="_blanck">EF SET Certificate</a></p>


                    </div>
                </div>
            </div>

            <InformationContainer />
            {/*       <a href="" className="btn" onClick={()=>downloadFile}>Download currículo</a> */}

            <a href={PDF} download="Currículo - Weler S Martins" className='btn_curriculo' target='_blank'>
              Download currículo
            </a>
        </aside>
    )
}
export default Sidebar;