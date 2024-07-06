import React from "react";
import './Footer.css';
import { FaRegHeart } from "react-icons/fa";


function Footer() {

    const currentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    return (
        <section>
            <footer>


                <p>{currentYear()}  © All Rights Reserved</p>
                <p>Build with <FaRegHeart className="heart-icon" /> by Ayesha S K</p>

                <div class="footer-icons">
                    <a href="https://twitter.com/Ayesha_SK21d?t=EwTy9BH5ffEhDMk_gViLkw&s=09"><i class="fa-brands fa-twitter icon"></i></a>
                    <a href="https://instagram.com/ayesha_sk14?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-instagram icon"></i></a>
                    <a href="https://www.linkedin.com/in/ayeshask"><i class="fa-brands fa-linkedin icon"></i></a>
                    <a href="https://github.com/Ayesha-sk-14"><i class="fa-brands fa-github icon"></i></a>
                </div>
            </footer>
        </section>
    );
}

export default Footer;