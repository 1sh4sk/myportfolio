import React, { useRef, useState } from "react";
import './Contact.css';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Contact() {

    const [note, setNote] = useState("");

    const handleClick = () => {
        setNote("note: after filling the details please wait for few seconds after clicking the button to submit");
    }

    const form = useRef();
    // toast.configure();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ydf3ikb",
                "template_zwra465",
                form.current,
                "yTjE66_6il9AubLU_"
            )

            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    toast.success("message submitted successfully");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
        <section>


            <div className="landing-page">
                <div className="right-div slideInRight">
                    <div className="right-div-content">
                        <h1>Contact</h1>
                        <p>
                            Wanna get in touch? feel free to leave a message. If i did not reply within two days, I would probably wandering in my dreams!
                        </p>

                        <div class="contact-icons">
                            <div className="icons-name">
                                <a href="https://twitter.com/1sh4sk" className="x" target="_blank" rel="noreferrer"><i class="fa-brands fa-x-twitter icon"></i><p>X</p></a>
                                <a href="https://instagram.com/1sh4sk" className="instagram" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram icon "></i><p>Instagram</p></a>
                            </div>

                            <div >
                                <a href="https://www.linkedin.com/in/1sh4sk" className="linkedin" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin icon "></i><p>Linkedin</p></a>
                                <a href="https://github.com/1sh4sk" target="_blank" rel="noreferrer"><i class="fa-brands fa-github icon"></i><p>Github</p></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 left-div img-flip slideInLeft"></div>

            </div>


            <section className="section">
                <div className="contact-form">
                    <h1>Send me an email</h1>
                    <form ref={form} onSubmit={sendEmail} className="form-div">

                        <div className="form-input-row">
                            <div className="form-input">
                                <label htmlFor="name">Name: <span>*</span></label>
                                <input id="name" type="text" placeholder="Enter your name" name="name" required />
                            </div>

                            <div className="form-input">
                                <label htmlFor="email">Email address:<span>*</span></label>
                                <input id="email" type="email" placeholder="Enter your email" name="email" required />
                            </div>
                        </div>

                        <div className="form-input" style={{ width: "100%" }}>
                            <label htmlFor="message">Message:<span>*</span></label>
                            <textarea id="message" rows="4" columns="50" placeholder="Type your message" name="message" required />
                        </div>

                        <p className="note">{note}</p>

                        <button type="submit" className="form-btn" onClick={handleClick}>Submit</button>
                        <ToastContainer style={{ width: "400px" }} />
                    </form>
                </div>
            </section>



        </section>
    );
}

export default Contact;