import { SiAmazonaws, SiAnsible, SiDocker, SiGit, SiJenkins, SiKubernetes } from 'react-icons/si';

import './work.css';
function Work() {
    return (
        <div id="work">
            <hr style={{ color: 'grey' }} />

            <div className="secdiv2back secdiv ">
                <div className='skill-text'>
                    Skills & Projects
                </div>
                <br />
                <div className='flexwork'>

                    <div className='grid'>

                        <div className=' skillItem'>
                            <div className='item'>
                                <SiGit className='itemicon' />
                            </div>
                            <div className='caption'>
                                <div className='caption-text'>
                                    Git
                                </div>
                            </div>

                        </div>
                        <div className=' skillItem'>
                            <div className='item'>   <SiJenkins className='itemicon' /></div>

                            <div className='caption'>
                                <div className='caption-text'>
                                    Jenkins
                                </div>
                            </div>
                        </div>
                        <div className=' skillItem'>
                            <div className='item'><SiAnsible className='itemicon' /></div>

                            <div className='caption'>
                                <div className='caption-text'>
                                    Ansible
                                </div>
                            </div>
                        </div>
                        <div className='skillItem'>
                            <div className='item'>
                                <SiDocker className='itemicon' />
                            </div>

                            <div className='caption'>
                                <div className='caption-text'>Docker</div>
                            </div>
                        </div><div className=' skillItem'>
                            <div className='item'>
                                <SiKubernetes className='itemicon' />
                            </div>

                            <div className='caption'>
                                <div className='caption-text'>Kubernetes</div>
                            </div>
                        </div>
                        <div className=' skillItem'>
                            <div className='item'>

                                <SiAmazonaws className='itemicon' />
                            </div>
                            <div className='caption'>
                                <div className='caption-text'>AWS</div>
                            </div>
                        </div>
                    </div>
                    {   /*



                        // Projects Section


                        */
                    }
                    <div className='projects-grid'>
                        <div className='projectList'>
                            <div className='project-card'>
                                <div className='project-name'><b>PROJECT</b> -<br /><br /> PHP Website CI CD Automtion using Ansible, Jenkins & Docker
                                    {/* <SiPhp className='projectback'></SiPhp> */}
                                </div>
                                {/* <div className='projectBGimage'>
                                </div> 
                                */
                                }
                                <div className='project-details'>
                                    <div className='project-skill-tree'>
                                        <ul><li><b>Technologies Used</b></li>
                                            <li><b>Docker</b> - containerized the website</li>
                                            <li><b>Anisble</b> - Automoted all the dependencies</li>
                                            <li><b>Jenkins</b> - Deployed the PHP website</li>
                                        </ul>
                                    </div>
                                    {/* <div className='project-moreDetails'>
                                        Know More &nbsp;
                                        <MailIcon className='moreICon' />
                                    </div> */}
                                </div>
                            </div>

                        </div>
                        {/* <div className='more-projects'>More Projects -> </div> */}

                    </div>
                </div>

            </div>

        </div>
    );
}
export default Work;