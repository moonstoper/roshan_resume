// import './index.css';
// import Nav from './nav';

import { ReactComponent as MailIcon } from './images/down-arrow.svg';
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, } from 'react-icons/si'

import './contact.css';
function Contact() {
    return (
        <div id="contacts-main">
            <hr style={{ color: 'grey' }} />
            <div id="contacts" className='mailer'>
                <div className='address'>My Address :<br />  <address>305,B5,Aswani Aaeesha, Electronic City Phase 2, Karnataka ,India </address></div>

                <div className='email' >Mail me : <a href='mailto:roshanrajak@gmail.com?subject=Converse:&body=Hi Roshan,'>roshanrajak2022@gmail.com<MailIcon className='mailsend' /></a></div>

                <div className=' phone_number '>Contact Number: <span>+91 897249931</span></div>
                <a href='mailto:roshanrajak@gmail.com?subject=Work Request:YOUR SUBJECT&body:Hi Roshan,' className="mailerHire">
                    Hire Me!
                    <MailIcon className='contactsHire' />
                </a>
            </div>
         
            <div  className='squigly'>
                <div className='box '></div>
               
            </div>
            <footer >
                <SiFacebook className='footicons' />
                <SiInstagram  className='footicons' />
                <SiGithub className='footicons' />
                <SiLinkedin className='footicons' />

            </footer>
        </div>
    );
}
export default Contact;