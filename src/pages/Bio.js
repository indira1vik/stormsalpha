// Bio.js
import React, { useCallback, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import my_logo from '../assets/logo.png'
import close from '../assets/close.png'
import mini from '../assets/minus.png'
import maxi from '../assets/maximize.png'

import baby from '../assets/timeline_icons/baby.png'
import coding from '../assets/timeline_icons/coding.png'
import college from '../assets/timeline_icons/college.png'
import computer from '../assets/timeline_icons/computer.png'
import drive from '../assets/timeline_icons/drive.png'
import fields from '../assets/timeline_icons/fields.png'
import formula from '../assets/timeline_icons/formula.png'
import games from '../assets/timeline_icons/games.png'
import german from '../assets/timeline_icons/german.png'
import keypad from '../assets/timeline_icons/keypad.png'
import laptop from '../assets/timeline_icons/laptop.png'
import lead from '../assets/timeline_icons/lead.png'
import licence from '../assets/timeline_icons/licence.png'
import mobile from '../assets/timeline_icons/mobile.png'
import school from '../assets/timeline_icons/school.png'
import secondary from '../assets/timeline_icons/secondary.png'
import univ from '../assets/timeline_icons/univ.png'
import volleyball from '../assets/timeline_icons/volleyball.png'
import web from '../assets/timeline_icons/web.png'
import work from '../assets/timeline_icons/work.png'
import sing from '../assets/timeline_icons/sing.png'

import p62 from '../assets/my_photos/62.jpg'
import p63 from '../assets/my_photos/63.jpg'
import p64 from '../assets/my_photos/64.jpg'
import p66 from '../assets/my_photos/66.jpg'
import p67 from '../assets/my_photos/67.jpg'
import p68 from '../assets/my_photos/68.jpg'
import p69 from '../assets/my_photos/69.jpg'
import p70 from '../assets/my_photos/70.jpg'
import p71 from '../assets/my_photos/71.jpg'
import p72 from '../assets/my_photos/72.jpg'
import p73 from '../assets/my_photos/73.jpg'
import p74 from '../assets/my_photos/74.jpg'
import p75 from '../assets/my_photos/75.jpg'
import p76 from '../assets/my_photos/76.jpg'
import p77 from '../assets/my_photos/77.jpg'
import p78 from '../assets/my_photos/78.jpg'
import p79 from '../assets/my_photos/79.jpg'
import p80 from '../assets/my_photos/80.jpg'
import p81 from '../assets/my_photos/81.jpg'
import p83 from '../assets/my_photos/83.jpg'
import p84 from '../assets/my_photos/84.jpg'
import p85 from '../assets/my_photos/85.jpg'
import p87 from '../assets/my_photos/87.jpg'

const photos = [
    p62, p63, p64, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80, p81, p83, p84, p85, p87
];


function Bio() {
    let navigate = useNavigate();
    const goBackHome = useCallback(() => {
        navigate('/home', { replace: true });
    }, [navigate]);

    const timelineRef = useRef(null);
    useEffect(() => {
        const timeline = timelineRef.current;
        if (timeline) {
            timeline.scrollLeft = 0;
            const handleWheel = (event) => {
                event.preventDefault();
                timeline.scrollLeft += event.deltaY * 2;
            };

            timeline.addEventListener('wheel', handleWheel);

            return () => {
                timeline.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const handleNextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        };

        const intervalId = setInterval(handleNextSlide, 4000); // Change slide every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        carousel.scrollTo({
            left: carousel.offsetWidth * currentIndex,
            behavior: 'smooth',
        });
    }, [currentIndex]);


    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const events = [
        { year: 2003, description: 'Born in Trichy, Tamil Nadu', icon: baby },
        { year: 2007, description: 'Attended school in Mysore, Karnataka', icon: school },
        { year: 2011, description: 'First Computer', icon: computer },
        { year: 0, description: 'Explored Games & the Internet', icon: games },
        { year: 0, description: 'Practiced Volleyball', icon: volleyball },
        { year: 2016, description: 'National-level Singing Competition', icon: sing },
        { year: 2018, description: 'Joined Secondary School in Hyderabad, Telangana', icon: secondary },
        { year: 0, description: 'First Keypad Phone', icon: keypad },
        { year: 0, description: 'First Laptop', icon: laptop },
        { year: 2020, description: 'Entered College life in Chennai, Tamil Nadu', icon: college },
        { year: 0, description: 'First Smartphone', icon: mobile },
        { year: 0, description: 'Earned Driving License', icon: licence },
        { year: 0, description: 'A Formula 1 Fan', icon: formula },
        { year: 0, description: 'Built experience in Web Development', icon: web },
        { year: 2021, description: 'Participated in Various Competitions', icon: coding },
        { year: 0, description: 'Explore fields in Computer Science', icon: fields },
        { year: 0, description: 'First Long Drive', icon: drive },
        { year: 0, description: 'Music Band Competition', icon: sing },
        { year: 2023, description: 'Intern at a Startup for a Month', icon: work },
        { year: 0, description: 'App Dev Lead in GDSC', icon: lead },
        { year: 0, description: 'Intern at a Non-Governmental Organization', icon: work },
        { year: 0, description: 'Got Admit from US Universities', icon: univ },
        { year: 2024, description: 'Graduated as Bachelors in Computer Science & Engineering', icon: college },
        { year: 0, description: 'Learning German', icon: german },
        { year: 0, description: 'Built this personal Portfolio', icon: web },

    ];

    const scaleDist = 20
    const startYear = 2000;
    const endYear = startYear + events.length * scaleDist;
    const totalYears = endYear - startYear - 4;


    return (
        <div className='home-main'>
            <div className='sub-sec'>
                <div className="sub-sec-tab-console new-tab-console">
                    <div className="tab-bar">
                        <div className="tab-name">
                            <img id='my-logo' src={my_logo} alt='' />
                            <div id='tab-title'>Facts About Me</div>
                        </div>
                        <div className="tab-options">
                            <img className='tab-icon' src={mini} alt='' />
                            <img className='tab-icon' src={maxi} alt='' />
                            <img className='tab-icon' src={close} alt='' />
                        </div>
                    </div>
                    <div className="console-content">
                        <div className="prompt">stormsalpha:\&gt; cd bio/</div>
                        <div className="prompt">stormsalpha:\bio&gt; ls</div>
                    </div>
                </div>
                <div className="timeline-container" ref={timelineRef}>
                    <div className="timeline">
                        {Array.from({ length: totalYears }).map((_, index) => {
                            const eventIndex = Math.floor((index) / scaleDist);
                            const event = events[eventIndex] && (index % scaleDist === 8) ? events[eventIndex] : null;
                            return (
                                <div key={index} className="timeline-marker">
                                    {event && (
                                        <div className="event">
                                            {event.year !== 0 && (
                                                <span className="year">{event.year}</span>
                                            )}
                                        </div>
                                    )}
                                    <div className={`line ${event ? 'long' : ''}`} />
                                    {event && (
                                        <div className="event">
                                            <span>
                                                <img className='tm-icon' src={event.icon} alt="event icon" />
                                            </span>
                                            <span className="description">{event.description}</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='body-grid'>
                    <div>
                        <div className="grid-title">Formula 1</div>
                        <hr></hr>
                        <div className='grid-body-sub-title'>It's Friday then it's Saturday, Sunday (what!)</div>
                        <div>
                            I recently became an F1 fan and enjoy watching races every weekend. My support is especially for the McLaren F1 Team because of their teamwork and improved pace. Furthermore, one of the main reasons for my interest in this sport is its historical glory.
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Languages</div>
                        <hr></hr>
                        <div className='cnt-grid-logo'>
                            <div className='sm-cnt-btn'>
                                <div className='lang-font'>A</div>
                                <div>English</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <div className='lang-font'>ச</div>
                                <div>Tamil</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <div className='lang-font'>త</div>
                                <div>Telugu</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <div className='lang-font'>ಕ</div>
                                <div>Kannada</div>
                            </div>
                            <div className='sm-cnt-btn'>
                                <div className='lang-font'>ह</div>
                                <div>Hindi</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Music</div>
                        <hr></hr>
                        <div>
                            Music has been a major part of my life, and I believe that it can change us in any situation. Listening to music, singing, and jamming with friends all together makes me feel completely in a different world. The majority of my playlist contains songs from <span style={{ fontStyle: "italic" }}>South India</span>. The second playlist in my music profile is full of English music. Genres like <span style={{ fontStyle: "italic" }}>pop, EDM, melody, etc.</span> are some of my favorites.
                        </div>
                    </div>
                    <div>
                        <div className="grid-title">Photography</div>
                        <hr></hr>
                        <div>
                            <div className='grid-body-sub-title'>Random pics by me</div>
                            <div className='carousel-wrapper'>
                                <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
                                <div className="carousel-container" ref={carouselRef}>
                                    {photos.map((photo, index) => (
                                        <div key={index} className="carousel-slide">
                                            <img src={photo} alt={`Slide ${index + 1}`} className="carousel-photo" />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-button next" onClick={handleNext}>&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-button" onClick={goBackHome}>stormsalpha:\bio&gt; cd ../</div>
            </div>
        </div>
    );
}

export default Bio;