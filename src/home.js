import './home.css';
import ProfileImage from "./images/roshan_image.webp"
import { ReactComponent as Download } from './images/down-arrow.svg';

import Resume from './resume/Roshan_Kumar_Rajak_CV.pdf'
function Home() {

    return (
        <div id="tophome">


            <div className="secdiv home" >
                <div id="home_content">
                    <div>
                        Hello There!<br />
                        My name is Roshan Kumar Rajak <br />and I am a <span className="home_expertise"><span className="home_arrow"> {'< '}
                        </span>
                            <div className="animate_block">devops engineer</div> <span className="home_arrow">{' >'}</span>

                        </span> from India.
                        <br />Loves to accept challenges.
                        <br /></div>
                    <div className='home_interaction'>
                        <a href={Resume} download={'Roshan_Kumar_Rajak_Resume.pdf'} className="down_resume">
                            Download Resume
                            <Download className='amg' />
                        </a>
                        <br />
                        <a href='mailto:roshanrajak@gmail.com?subject=Work Request: YOUR SUBJECT&body=Hi Roshan,'  className="down_resume" >
                            Hire Me!
                            <Download className='hiremg' />
                        </a>
                    </div>

                </div>
                <div className='roshan_image'>
                    <img alt='roshan profile pixure :)' src={ProfileImage} ></img>
                </div>

            </div>

        </div>
    );
}
export default Home;