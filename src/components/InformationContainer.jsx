import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import '../assets/sass/components/informationcontainer.sass'

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3 style={{marginBottom: '0.5rem'}}>Phone</h3>
                    <p> +55 51 99450 4382</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3  style={{marginBottom: '0.5rem'}}>E-mail</h3>
                    <p>welerson194@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3  style={{marginBottom: '0.5rem'}}   >City</h3>
                    <p>Viamão, Rio Grande do Sul - Brazil</p>
                </div>
            </div>
        </section>
    );
}

export default InformationContainer;