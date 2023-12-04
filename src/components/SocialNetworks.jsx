import { FaLinkedin, FaGithub} from 'react-icons/fa'
import '../assets/sass/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "github", icon: <FaGithub /> },
]

const SocialNetworks = () => {
    function verificar (e) {
        if(e == 'linkedin'){
            window.open('https://www.linkedin.com/in/weler-martins/')
        }else if(e == 'github'){
            window.open('https://github.com/WelerM')
        }
    }

    return (
        <section  id="social-networks">
            {socialNetworks.map((network) => (
            <a onClick={(e)=>verificar(e.target.id)} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
            ))}
        </section>
    );
}
export default SocialNetworks;