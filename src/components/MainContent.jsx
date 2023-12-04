import AboutContainer from './AboutContainer'
import ProjectContainer from './ProjectCointainer';
import TechnologiesContainer from './TechnologiesContainer';
import '../assets/sass/components/maincontent.sass'


const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectContainer />
        </main>

    );
}

export default MainContent;