import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactform">
        <div className="cleft">
            <div className="awesome">
                <span>Get In Touch</span>
                <span>Contact Me</span>
                <div className="blur sblur1"
                style={{background: "#ABF1FF94"}}
                ></div>
            </div>
        </div>
        <div className="cright">
            <form>
                <input type="text" name="username" className="user" placeholder="Name"/>
                <input type="email" name="useremail" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="send" className="button"/>
                {/* <span>{done && "Thanks For Contacting Me"}</span> */}
                <div className="blur cblur1" style={{background: "var(--purple)"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact;