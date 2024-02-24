import { Animate } from "react-simple-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import Mail from '../images/icons8-gmail-login-40.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i5fbz4o', 'template_tv2jsyp', form.current, {
        publicKey: 'toDj4akleujPDpgfP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <div>
          <h2>Let's Talk</h2>
            <div className="form">
                <form action="" ref={form} onSubmit={sendEmail} >
                    <input
                    placeholder="Name"
                    type="text"
                    className='name'
                    name="user_name"
                    />
                    <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    />
                    <textarea
                    placeholder="Say Something"
                    type="text"
                    rows="10" cols="40"
                    name="message"
                    ></textarea>
                    <input
                    type="Submit"
                    placeholder="SUBMIT"
                    value="SUBMIT"
                    />
                </form>
            </div>
            <div className='linkss'>
                <Animate
                play
                duration={2}
                delay={0.5}
                start={{
                  transform: "translateY(550px)",
                }}
                end={{
                  transform: "translatex(0px)",
                }}
                >
                    <a className='mail' href='https://mail.google.com/mail/u/0/#inbox'><img className='mail' src={Mail} size="2x"/></a>
                    <a className='insta' href='https://web.whatsapp.com/'><FontAwesomeIcon className="insta" icon={faWhatsapp} size="2x" /></a>
                    <a className='insta' href='https://www.instagram.com/'><FontAwesomeIcon className="insta" icon={faInstagram} size="2x" /></a>
                    <a className='insta' href='https://twitter.com/home'><FontAwesomeIcon className="insta" icon={faTwitter} size="2x" /></a>
                    <a className='insta' href='https://www.linkedin.com'><FontAwesomeIcon className="insta" icon={faLinkedin} size="2x" /></a>
                    <a className='insta' href='https://github.com/tutich'><FontAwesomeIcon className="insta" icon={faGithub} size="2x" /></a>
                   
                </Animate>
            </div>
        </div>
    )
}
export default Contact;