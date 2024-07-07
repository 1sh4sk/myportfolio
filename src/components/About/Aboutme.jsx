import React from "react";
import './About.css';

import { Parallax } from 'react-parallax';
import NightStar from '../../Images/nightstar.jpg';

import Reactjs from '../../Images/Skills/reactjs.svg';
import Css from '../../Images/Skills/css.svg';
import Html5 from '../../Images/Skills/html5.svg';
import Java from '../../Images/Skills/java.svg';
import Javascript from '../../Images/Skills/javascript.svg';
import Mongodb from '../../Images/Skills/mongodb.svg';
import Nodejs from '../../Images/Skills/nodejs.svg';

import KeeperApp from '../../Images/Projects/keeper-app.png'


import { FiExternalLink } from "react-icons/fi";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

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
                <h1>Skills</h1>
                <div className="skills">
                    <Parallax className="skills-parallax" blur={1} bgImage={NightStar} bgImageAlt="the red nebula" strength={800}>


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

            <section>
                <h1>My Projects</h1>

                <div className="cards">
                    <div className="card">
                        <div className="card_imgbg">
                            <img className="card_img" src={KeeperApp} />

                        </div>
                        <div className="card_body">
                            <h3>Keeper App Project (UI)</h3>
                            <div>
                                <a href="https://codesandbox.io/s/keeper-app-g873h9" target="_blank" rel="noreferrer">
                                    <AiFillCodeSandboxCircle className="code-icon" />
                                </a>
                                <button>
                                    <a src="https://g873h9.csb.app/" target="_blank" rel="noreferrer">Visit <FiExternalLink className="link-icon" /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </section>
    );
}

export default Aboutme;