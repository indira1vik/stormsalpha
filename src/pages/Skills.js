// Skills.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import my_logo from '../assets/logo.png'
import close from '../assets/close.png'
import mini from '../assets/minus.png'
import maxi from '../assets/maximize.png'
import opencv from '../assets/opencv.png'

function Skills() {
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
                            <div id='tab-title'>Skills I have</div>
                        </div>
                        <div className="tab-options">
                            <img className='tab-icon' src={mini} alt='' />
                            <img className='tab-icon' src={maxi} alt='' />
                            <img className='tab-icon' src={close} alt='' />
                        </div>
                    </div>
                    <div className="console-content">
                        <div className="prompt">stormsalpha:\&gt; cd skills/</div>
                        <div className="prompt">stormsalpha:\skills&gt; ls</div>
                    </div>
                </div>
                <div className='body-grid'>
                    <div>
                        <div className="grid-title">Programming Languages</div>
                        <hr></hr>
                        <div className='cnt-grid-logo'>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/python.png" alt="" />
                                <div>Python</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/c-plus-plus.png" alt="" />
                                <div>C++</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/java-coffee-cup-logo.png" alt="" />
                                <div>Java</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/circled-c.png" alt="" />
                                <div>C</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/html-5.png" alt="" />
                                <div>HTML</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/mysql.png" alt="" />
                                <div>MySQL</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/kotlin.png" alt="" />
                                <div>Kotlin</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/ios-filled/96/e8e8e8/dart-language.png" alt="" />
                                <div>Dart</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/crab.png" alt="" />
                                <div>Rust</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/js.png" alt="" />
                                <div>JS</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Frameworks and Tools</div>
                        <hr></hr>
                        <div className='cnt-grid-logo'>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/react-native.png" alt="" />
                                <div>ReactJS</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/figma.png" alt="" />
                                <div>Figma</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/css3.png" alt="" />
                                <div>CSS</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/windows/96/e8e8e8/node-js.png" alt="" />
                                <div>NodeJS</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/leaf.png" alt="" />
                                <div>MongoDB</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/firebase.png" alt="" />
                                <div>Google Cloud</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/ios-filled/96/e8e8e8/streamlit.png" alt="" />
                                <div>Stream lit</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src={opencv} alt="" />
                                <div>OpenCV</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/git.png" alt="" />
                                <div>Git</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <img className='sm-logo-btn' src="https://img.icons8.com/material/96/e8e8e8/android-os--v2.png" alt="" />
                                <div>Jetpack Compose</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-button" onClick={goBackHome}>stormsalpha:\skills&gt; cd ../</div>
            </div>
        </div>
    );
}

export default Skills;