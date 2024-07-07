import React from "react";
import './About.css';

import { Parallax } from 'react-parallax';
import Rose from '../../Images/rose.jpg';

import Reactjs from '../../Images/Skills/reactjs.svg';
import Css from '../../Images/Skills/css.svg';
import Html5 from '../../Images/Skills/html5.svg';
import Java from '../../Images/Skills/java.svg';
import Javascript from '../../Images/Skills/javascript.svg';
import Mongodb from '../../Images/Skills/mongodb.svg';
import Nodejs from '../../Images/Skills/nodejs.svg';


function Aboutme() {
    return (
        <section>

            <section>
                <div className="row landing-page">
                    <div className="c0l-lg-6 col-md-6 right-div">
                        <div className="right-div-content">
                            <h1>About</h1>
                            <p>
                                Wanna know more about what i do? Then you are at the right place!
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 left-div img-flip"></div>
                </div>
            </section>

            <section className="section boxshadow">
                <div>
                    <h1>About Me</h1>
                    <p>Hey Guys! My name is Ayesha Sk, A graduate in Computer Science and Enginnering stream. You may wonder why computer science and engineering? it’s because my mom told to do so... just kidding! From my childhood i saw a lot of movies where IT guys chill in the company, having a cool computer setup with 2 monitors and earn a lot so, i wanted to know about the IT field which is looking rich, so here I am. While doing enginnering I found my interest in Full-stack development and constanty improving my skills to become Full-stack developer soon.....   I guess!</p>
                </div>
            </section>



            <section>
                <div className="skills">
                    <Parallax className="skills-parallax" blur={4} bgImage={Rose} bgImageAlt="the red nebula" strength={800}>


                        <div className="skills-div">
                            <img className="skill-icon react" src={Reactjs} alt="" />
                            <img className="skill-icon html" src={Html5} alt="" />
                            <img className="skill-icon css" src={Css} alt="" />
                            <img className="skill-icon javascript" src={Javascript} alt="" />
                            <img className="skill-icon nodejs" src={Nodejs} alt="" />
                            <img className="skill-icon java" src={Java} alt="" />
                            <img className="skill-icon mongodb" src={Mongodb} alt="" />
                        </div>
                    </Parallax>

                </div>
            </section>







            {/* <section className="section">

                <h1>Skills</h1>
                <div>
                    <div className="cards">
                        <div className="card">
                            <div className="card_imgbg">
                                <img className="card_img" src="images/front-end.png" alt="front-end" />
                            </div>
                            <div className="card_body">
                                <p>Front-end</p>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap Reactjs</li>
                                    <li>Reactjs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_imgbg">
                                <img className="card_img" src="images/back-end.png" alt="back-end" />
                            </div>
                            <div className="card_body">
                                <p>Back-end</p>
                                <ul>
                                    <li>SQL</li>
                                    <li>MangaDB</li>
                                    <li>Python</li>

                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_imgbg">
                                <img className="card_img" src="images/designing.png" alt="designing" />
                            </div>
                            <div className="card_body">
                                <p>Designing</p>
                                <ul>
                                    <li>Figma</li>
                                    <li>UI Design</li>
                                    <li>UX Design</li>
                                    <li>Logo Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}



        </section>
    );
}

export default Aboutme;