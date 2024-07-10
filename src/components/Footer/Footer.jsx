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
                    <a href="https://x.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter icon"></i></a>
                    <a href="https://instagram.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram icon"></i></a>
                    <a href="https://www.linkedin.com/in/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin icon"></i></a>
                    <a href="https://github.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-github icon"></i></a>
                </div>
            </footer>
        </section>
    );
}

export default Footer;