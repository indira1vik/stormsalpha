// Experience.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubSection.css';

import my_logo from '../assets/logo.png'
import close from '../assets/close.png'
import mini from '../assets/minus.png'
import maxi from '../assets/maximize.png'

function Experience() {
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
                            <div id='tab-title'>My Experiences</div>
                        </div>
                        <div className="tab-options">
                            <img className='tab-icon' src={mini} alt='' />
                            <img className='tab-icon' src={maxi} alt='' />
                            <img className='tab-icon' src={close} alt='' />
                        </div>
                    </div>
                    <div className="console-content">
                        <div className="prompt">stormsalpha:\&gt; cd experience/</div>
                        <div className="prompt">stormsalpha:\experience&gt; ls</div>
                    </div>
                </div>
                <div className='body-grid'>
                    <div>
                        <div className="grid-title">App Developer Intern</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Regenboog India Foundation</span><span>Jan '24 - Feb '24</span></div>
                            <div>
                                Evening School App: Actively contributed to the develop a cross-platform attendance app using Flutter for a non-profit organization. The app is designed to streamline student attendance monitoring and academic data management for teachers, particularly benefiting schools in rural areas.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Web Developer Intern</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Corvid Systems Private Limited</span><span>Jul '23</span></div>
                            <div>
                                Tank Visualizer Component: Built an UI component for HTML based Web Applications to visualize level of liquid in different types of storage tanks in 2D and 3D. The component was built as a Web Assembly (WASM) using Rust programming language.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">App development Team Lead</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Google Developers Student Club</span><span>Oct '23 - Apr '24</span></div>
                            Served as an App Dev Team Lead in my senior year of undergrad, conducting camps and facilitating sessions.
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Member of Software Development Team</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>SSN Coding Club</span><span>Oct '23 - Apr '24</span></div>
                            Involved in meetings and organized variety of events in our college.
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Event Head for a UI design Contest</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>SSN Invente 8.0</span><span>Oct '23</span></div>
                            Led and organized a UI design contest as part of a National level tech-fest SSN Invente 8.0.
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Facilitator for Compose Camp</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>Google Developers Student Club</span><span>Oct '22</span></div>
                            Facilitated sessions and activities for Compose Camp on Jetpack Compose, a UI tool introduced by Google Android Team.
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Volunteer for NSS</div>
                        <hr></hr>
                        <div>
                            <div className="grid-body-sub-title"><span>National Service Scheme</span><span>Oct '20 - Apr '23</span></div>
                            Proud NSS volunteer participated in various social service activities guided by the NSS unit of SSN.
                        </div>
                    </div>
                </div>
                <div className="back-button" onClick={goBackHome}>stormsalpha:\experience&gt; cd ../</div>
            </div>
        </div>

    );
}

export default Experience;