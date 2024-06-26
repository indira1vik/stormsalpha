// Home.js
import React from 'react';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import my_photo from '../assets/photo.jpg'
import my_logo from '../assets/logo.png'
import close from '../assets/close.png'
import mini from '../assets/minus.png'
import maxi from '../assets/maximize.png'

function Home() {
    const recipientEmail = "indiravik113@gmail.com";
    const handleMailClick = () => {
        navigator.clipboard.writeText(recipientEmail)
            .then(() => {
                toast.success('Mail ID copied to your Clipboard', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((err) => {
                console.error('Failed to copy email address: ', err);
                toast('Failed to copy email address');
            });
    };

    let navigate = useNavigate();

    const goToBio = useCallback(() => {
        navigate('/home/bio');
    }, [navigate]);
    const goToSkills = useCallback(() => {
        navigate('/home/skills');
    }, [navigate]);
    const goToProjects = useCallback(() => {
        navigate('/home/projects');
    }, [navigate]);
    const goToExperience = useCallback(() => {
        navigate('/home/experience');
    }, [navigate]);
    const goToEducation = useCallback(() => {
        navigate('/home/education');
    }, [navigate]);

    return (
        <div className="home-main">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <ToastContainer />
            <div className="home">
                <div className="new-tab-console pop-up">
                    <div className="tab-bar">
                        <div className="tab-name">
                            <img id='my-logo' src={my_logo} alt='' />
                            <div id='tab-title'>Indirakanth's Console</div>
                        </div>
                        <div className="tab-options">
                            <img className='tab-icon' src={mini} alt='' />
                            <img className='tab-icon' src={maxi} alt='' />
                            <img className='tab-icon' src={close} alt='' />
                        </div>
                    </div>
                    <div className="console-content">
                        <div className="prompt">stormsalpha:\&gt; cat intro.txt</div>
                        <div className="content">
                            Hello there 👋, I'm Indirakanth V, an undergrad computer science student who loves to create aesthetic websites, stunning user-experiences, and developing android apps with eye-catching user-interfaces. With the experiences in full-stack development and mobile development I enjoy working on building various applications.
                        </div>
                        <div className="divider">-----------------------------------------------------------------------------------</div>
                        <div className="prompt">stormsalpha:\&gt; find / -name "resume.pdf"</div>
                        <div className="content">
                            <a className="link-format" href="https://drive.google.com/file/d/1kGuKsfvljg43Gb66Vl1JfVgX0o9hvqgk/view?usp=sharing" target="_blank" rel="noopener noreferrer">/stormsalpha/link-to-view/resume.pdf</a>
                        </div>
                        <div className="divider">-----------------------------------------------------------------------------------</div>
                        <div className="prompt">stormsalpha:\&gt; unzip links.zip</div>
                        <div className='content'>
                            <img className='link-icon' src="https://img.icons8.com/ios-filled/100/e8e8e8/gmail-new.png" alt='' onClick={handleMailClick} />
                            <a href="https://www.linkedin.com/in/indirakanth113/" target="_blank" rel="noopener noreferrer"><img className='link-icon' src="https://img.icons8.com/ios-filled/100/e8e8e8/linkedin.png" alt='' /></a>
                            <a href="https://github.com/indira1vik" target="_blank" rel="noopener noreferrer"><img className='link-icon' src="https://img.icons8.com/ios-filled/100/e8e8e8/github.png" alt='' /></a>
                            <a href="https://www.behance.net/indirakanthv" target="_blank" rel="noopener noreferrer"><img className='link-icon' src="https://img.icons8.com/ios-filled/100/e8e8e8/behance.png" alt='' /></a>
                            <a href="https://leetcode.com/u/indirakanth113/" target="_blank" rel="noopener noreferrer"><img className='link-icon' src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/e8e8e8/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" alt='' /></a>
                            <a href="https://www.instagram.com/stormsalpha/" target="_blank" rel="noopener noreferrer"><img className='link-icon' src="https://img.icons8.com/ios-filled/100/e8e8e8/instagram-new--v1.png" alt='' /></a>
                        </div>
                        <div className="divider">-----------------------------------------------------------------------------------</div>
                        <div className="prompt">stormsalpha:\&gt; ls</div>
                        <div className='content nav-bar-menu'>
                            <div className="nav-bar-items" onClick={goToExperience}>experience/</div>
                            <div className="nav-bar-items" onClick={goToSkills}>skills/</div>
                            <div className="nav-bar-items" onClick={goToProjects}>projects-and-work/</div>
                            <div className="nav-bar-items" onClick={goToEducation}>education/</div>
                            <div className="nav-bar-items" onClick={goToBio}>bio/</div>
                        </div>
                        <div className="divider">-----------------------------------------------------------------------------------</div>                    </div>
                </div>
                <div className="image-container pop-up">
                    <img id='my-photo' src={my_photo} alt='' />
                </div>
            </div>
            <div className="footer">
                <div>Last edited: 26th June, 2024</div>
                <div className='footer-links'>
                    <div>Design inspirations from</div>
                    <a className='des-link' href='https://s3gfault.dev/' target='_blank' rel="noopener noreferrer">s3gfault.dev</a>
                    <a className='des-link' href='https://flext.dev/' target='_blank' rel="noopener noreferrer">flext.dev</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
