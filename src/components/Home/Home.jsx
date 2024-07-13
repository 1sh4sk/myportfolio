import React from "react";
import Typewriter from "typewriter-effect";
import './Home.css';

function Home() {


    return (
        <section>

            <div className="row landing-page">
                <div className="col-lg-6 col-md-6 left-div ">

                </div>
                <div className={`c0l-lg-6 col-md-6 right-div `}>
                    <div className="right-div-content">
                        <p>Hey guys!</p>
                        <h1 className="home_heading">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("I'm Ayesha S K")
                                        .pauseFor(1000)
                                        // .deleteAll()
                                        // .typeString("This is a typewriter effect!")
                                        .start();
                                }}
                            />
                        </h1>
                        <p>an aspiring MERN developer</p>

                        <div class="icons">
                            <a href="https://x.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-x-twitter icon"></i></a>
                            <a href="https://instagram.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram icon"></i></a>
                            <a href="https://www.linkedin.com/in/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin icon"></i></a>
                            <a href="https://github.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-github icon"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;