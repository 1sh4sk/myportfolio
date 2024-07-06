import React from "react";

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
                    <p>Hey Guys! My name is Ayesha Sk, A graduate in Computer Science and Enginnering stream at C. Abdul Hakeem College of Enginnering and Technology, Vellore, Tamilnadu. You may wonder why computer science and engineering? it’s because my mom told to do so... just kidding! From my childhood i saw a lot of movies where IT guys chill in the company, having a cool computer setup with 2 monitors and earn a lot so, i wanted to know about the IT field which is looking rich, so here I am. While doing enginnering I found my interest in Full-stack development and constanty improving my skills to become Full-stack developer soon.....   I guess!</p>
                </div>
            </section>

            <section className="section">

                <h1>Skills</h1>
                <div>
                    {/* skill cards */}
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
                {/* skill cards end */}

            </section>

            <section className="section boxshadow">
                {/* graph bar */}
                <div className="outer_box">
                    <div className="box">

                        <div className="graphbox">


                            <div className="skill">
                                <div className="name" style={{ bottom: "92%" }}>HTML5&CSS3</div>
                                <div className="graph" style={{ height: "90%" }}>
                                    <div className="percent">90%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "72%" }}>Reactjs</div>
                                <div className="graph" style={{ height: "70%" }}>
                                    <div className="percent">70%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "62%" }}>Python</div>
                                <div className="graph" style={{ height: "60%" }}>
                                    <div className="percent">60%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "72%" }}>Node.js</div>
                                <div className="graph" style={{ height: "70%" }}>
                                    <div className="percent">70%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "62%" }}>MongoDB</div>
                                <div className="graph" style={{ height: "60%" }}>
                                    <div className="percent">60%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "101%" }}>Staring at the screen</div>
                                <div className="graph" style={{ height: "99%" }}>
                                    <div className="percent">99%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* graph bar ends */}
            </section>

        </section>
    );
}

export default Aboutme;