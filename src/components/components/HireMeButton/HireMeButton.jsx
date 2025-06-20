import React from "react";
import "./HireMeButton.css";

export default function HireMeButton() {
    return (
        <div className="hireme-container">
            <div className="circle-text">
                <svg viewBox="0 0 200 200" className="circle-svg">
                    <defs>
                        <path
                            id="circlePath"
                            d="M100,100 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
                        />
                    </defs>
                    <text className="circle-text-path">
                        <textPath href="#circlePath" startOffset="0">
                            HIRE ME • HIRE ME • HIRE ME • HIRE ME •
                        </textPath>
                    </text>
                </svg>
            </div>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayeshask.24a@gmail.com&su=Let's%20Work%20Together&body=Hi%20Ayesha%2C%0A%0AI%20came%20across%20your%20profile%20and..."
                target="_blank"
                rel="noopener noreferrer"
                className="hireme-button"
            >
                Hire Me
            </a>
        </div>
    );
}
