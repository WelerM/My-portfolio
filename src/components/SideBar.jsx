import Avatar from './img/profile.png'
import '../assets/sass/components/sidebar.sass'
import SocialNetworks from './SocialNetWorks';
import InformationContainer from './InformationContainer';
import { PiGraduationCap } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import PDF from '../assets/pdf/resume.pdf'
import PDF_PT from '../assets/pdf/curriculo_weler_martins.pdf'

const Sidebar = () => {
    return (
        <aside id="sideBar">
            <img className='img-profile' src={Avatar} alt="Weler Martins" />
            <p className="title-1">Developer</p>
            <SocialNetworks />

            <div className='degree-container'>

                <div className='collage'>

                    <div>
                        <PiGraduationCap />

                        <p>Degree</p>

                    </div>

                    <p>Systems Analysis and Development</p>


                </div>

                <div className='certificates'>

                    <div >
                        <LiaCertificateSolid />

                        <p>Certificates</p>
                    </div>

                    <a style={{ marginBottom: '0.5rem' }} className='ef-education' href="https://www.efset.org/cert/2SGYf7" target="_blanck"># EF SET Certificate</a>

                    <a style={{ marginBottom: '0.5rem' }}  className='ef-education' href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-WelerMartins-1058008.pdf" target="_blanck"># SCRUM Fundamentals Certified</a>

                    <a style={{ marginBottom: '0.5rem' }}  className='ef-education' href="https://www.credly.com/badges/b590fb7e-a4b5-46d7-ba05-994acdea29f0/linked_in_profile" target="_blanck"># SCRUM SFPC</a>

                </div>
            </div>

            <InformationContainer />
            {/*       <a href="" className="btn" onClick={()=>downloadFile}>Download currículo</a> */}

            <a style={{marginBlock: '1rem'}} href={PDF} download="Resume - Weler S Martins" className='btn_resume' target='_blank'>
                Download resume
            </a>
            <a href={PDF_PT} download="Currículo - Weler S Martins" className='btn_resume' target='_blank'>
                Download currículo
            </a>
        </aside>
    )
}
export default Sidebar;