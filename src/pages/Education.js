// Edu.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import my_logo from '../assets/logo.png'
import close from '../assets/close.png'
import mini from '../assets/minus.png'
import maxi from '../assets/maximize.png'

import loc from '../assets/timeline_icons/location.png'

function Education() {
    let navigate = useNavigate();
    const goBackHome = useCallback(() => {
        navigate('/home', { replace: true });
    }, [navigate]);

    return (
        <div className='home-main'>
            <div className='sub-sec'>
                <div className="sub-sec-tab-console new-tab-console">
                    <div className="tab-bar">
                        <div className="tab-name">
                            <img id='my-logo' src={my_logo} alt='' />
                            <div id='tab-title'>Education</div>
                        </div>
                        <div className="tab-options">
                            <img className='tab-icon' src={mini} alt='' />
                            <img className='tab-icon' src={maxi} alt='' />
                            <img className='tab-icon' src={close} alt='' />
                        </div>
                    </div>
                    <div className="console-content">
                        <div className="prompt">stormsalpha:\&gt; cd education/</div>
                        <div className="prompt">stormsalpha:\education&gt; ls</div>
                    </div>
                </div>
                <div className='body-grid'>
                    <div>
                        <div className="grid-title">
                            <span>Arizona State University</span>
                            <span className='loc-btn'>
                                <a href='https://maps.app.goo.gl/3dqchpdMvh5vdouL6' target='_blank' rel='noreferrer'>
                                    <img alt='' className='gen-icon' src={loc} />
                                </a>
                            </span>
                        </div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Tempe, Arizona, USA</span><span>Aug '24 - May '26</span></div>
                        </div>
                        <div className='sm-cnt-btn'>
                            Yet to join University
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">
                            <span>SSN College of Engineering</span>
                            <span className='loc-btn'>
                                <a href='https://maps.app.goo.gl/CrF96DFJEitPVkNg8' target='_blank' rel='noreferrer'>
                                    <img alt='' className='gen-icon' src={loc} />
                                </a>
                            </span>
                        </div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Chennai, Tamil Nadu, India</span><span>Sep '20 - May '24</span></div>
                        </div>
                        <div className='sm-cnt-btn'>
                            CGPA: 8.68 / 10
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">
                            <span>Narayana Junior College</span>
                            <span className='loc-btn'>
                                <a href='https://maps.app.goo.gl/zZjyFmVnZww8h7hy7' target='_blank' rel='noreferrer'>
                                    <img alt='' className='gen-icon' src={loc} />
                                </a>
                            </span></div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Hyderabad, Telangana, India</span><span>Jun '18 - Mar '20</span></div>
                        </div>
                        <div className='sm-cnt-btn'>
                            Intermediate 12th Score: 951 / 1000
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">
                            <span>Atomic Energy Central School</span>
                            <span className='loc-btn'>
                                <a href='https://maps.app.goo.gl/KwAfTkvoXyCR69GPA' target='_blank' rel='noreferrer'>
                                    <img alt='' className='gen-icon' src={loc} />
                                </a>
                            </span></div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Mysore, Karnataka, India</span><span>Apr '08 - Mar '18</span></div>
                        </div>
                        <div className='sm-cnt-btn'>
                            Class 10th Score: 89.40 / 100
                        </div>
                    </div>
                </div>
                <div className="back-button" onClick={goBackHome}>stormsalpha:\education&gt; cd ../</div>
            </div>
        </div>
    );
}

export default Education;