import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1bew7eh', 'template_p7xj3oa', form.current, 'TRqw-GCieTUINDzkn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contactform">
            <div className="cleft">
                <div className="awesome">
                    <span>Get In Touch</span>
                    <span>Contact Me</span>
                    <div className="blur sblur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            <div className="cright">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                </form>
            </div>
        </div>
    )
}

export default Contact;