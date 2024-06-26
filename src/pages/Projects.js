// Projects.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import my_logo from '../assets/logo.png'
import close from '../assets/close.png'
import mini from '../assets/minus.png'
import maxi from '../assets/maximize.png'

function Projects() {
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
                            <div id='tab-title'>Projects</div>
                        </div>
                        <div className="tab-options">
                            <img className='tab-icon' src={mini} alt='' />
                            <img className='tab-icon' src={maxi} alt='' />
                            <img className='tab-icon' src={close} alt='' />
                        </div>
                    </div>
                    <div className="console-content">
                        <div className="prompt">stormsalpha:\&gt; cd projects/</div>
                        <div className="prompt">stormsalpha:\projects&gt; ls</div>
                    </div>
                </div>
                <div className='body-grid'>
                    <div>
                        <div className="grid-title">CampusHive Website</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>MongoDB, ReactJS, NodeJS, ExpressJS</span></div>
                        <div>
                            Developed an event forum website catering to the needs of the department, effectively engaging the target audience, including faculty, students, and club heads. The website features a minimalist and responsive user interface built with ReactJS. To enhance security, passwords are encrypted through hashing, and user data is stored in a MongoDB database, using the bcrypt node package for robust protection.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/campushiveclientsidecode' target='_blank' rel="noreferrer" className='link-btn-href'>Source Code</a>
                            </div>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://campus-hive-events.netlify.app/' target='_blank' rel="noreferrer" className='link-btn-href'>Website</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Sarcasm Identification Of Dravidian Languages (Malayalam and Tamil)</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>Natural language processing</span></div>
                        <div>
                            The paper has been published at the esteemed FIRE2023 conference, hosted by Goa University, Panjim. It centers on the detection of sarcastic and non-sarcastic comments on social media. This research leverages a range of transfer learning techniques and machine learning algorithms, like BERT, DistilBERT, SVM, TF-TDF, and XLM-RoBERTa.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://ceur-ws.org/Vol-3681/T5-11.pdf' target='_blank' rel="noreferrer" className='link-btn-href'>Paper</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Barkpedia Android App</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>Kotlin, Jetpack Compose, Firebase</span></div>
                        <div>
                            Designed and developed an Android app using Kotlin and a declarative user interface crafted with Jetpack Compose for an intuitive user experience. Additionally, the app integrates Realtime-Database in Firebase for encompassing database and storage functionalities. It serves as a valuable resource for dog enthusiasts, providing detailed information on various dog breeds while enabling users to curate their favorites for a personalized experience.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/barkpedia' target='_blank' rel="noreferrer" className='link-btn-href'>Source Code</a>
                            </div>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/barkpedia/releases/tag/v0.0-beta' target='_blank' rel="noreferrer" className='link-btn-href'>App APK</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Cinemize Website</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>ReactJS</span></div>
                        <div>
                            Using ReactJS and creating a website that resembled Disney+ Hotsar User interface made the application development process considerably simpler and more reliable. This website can be used as a movie suggestion tool to look for and receive suggestions for different kinds of movies.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/cinemize/tree/master' target='_blank' rel="noreferrer" className='link-btn-href'>Source Code</a>
                            </div>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://indira1vik.github.io/cinemize/' target='_blank' rel="noreferrer" className='link-btn-href'>Website</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Red Rust AI</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>Rust, Slint GUI</span></div>
                        <div>
                            Developed a desktop application with rust and slint, a new GUI tool framework. Using the rust-bert library or crate (in rust), this application explores machine learning techniques such as sentiment analysis and paragraph summarization in different tabs in the app. As this is a beginner project, it covers some of the basic concepts in the Rust programming language and due to its speed and memory safety, Rust is ideal for machine learning concepts.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/red-rust-ai' target='_blank' rel="noreferrer" className='link-btn-href'>Source Code</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">The PairMe - Memory Game</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>Javascript</span></div>
                        <div>
                            A basic memory game with a minimalistic design. This website, built with JavaScript, was created to draw users in and enhance the gameplay of various game levels.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/thepairmegame' target='_blank' rel="noreferrer" className='link-btn-href'>Source Code</a>
                            </div>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://indira1vik.github.io/thepairmegame/' target='_blank' rel="noreferrer" className='link-btn-href'>Website</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">MaveMusic Android App</div>
                        <hr></hr>
                        <div className="grid-body-sub-title"><span>Java, XML</span></div>
                        <div>
                            I always wanted to build an offline music player with a simpler user interface and more usability features. I used my initial experience in Java to build the application. Through various versions of the update, the app was built and can be smoothly used to play songs and sound files that are available locally in the storage of respective smartphones.
                        </div>
                        <div className='sm-btn-cont'>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/mavemusic' target='_blank' rel="noreferrer" className='link-btn-href'>Source Code</a>
                            </div>
                            <div className='sm-cnt-btn sm-link-btn'>
                                <a href='https://github.com/indira1vik/mavemusic/releases/tag/v0.0-beta' target='_blank' rel="noreferrer" className='link-btn-href'>App APK</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-button" onClick={goBackHome}>stormsalpha:\projects&gt; cd ../</div>
            </div>
        </div>
    );
}

export default Projects;