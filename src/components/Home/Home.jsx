import React from "react";
import './Home.css';

function Home() {
    return (
        <section>

            <div className="row landing-page">
                <div className="col-lg-6 col-md-6 left-div">

                </div>
                <div className="c0l-lg-6 col-md-6 right-div">
                    <div className="right-div-content">
                        <p>Hey guys!</p>
                        <h1 className="home_heading">I'm Ayesha S K</h1>
                        <p>an aspiring MERN developer</p>

                        <div class="icons">
                            <a href="https://twitter.com/Ayesha_SK21d?t=EwTy9BH5ffEhDMk_gViLkw&s=09"><i class="fa-brands fa-x-twitter icon"></i></a>
                            <a href="https://instagram.com/ayesha_sk14?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-instagram icon"></i></a>
                            <a href="https://www.linkedin.com/in/ayeshask"><i class="fa-brands fa-linkedin icon"></i></a>
                            <a href="https://github.com/Ayesha-sk-14"><i class="fa-brands fa-github icon"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;