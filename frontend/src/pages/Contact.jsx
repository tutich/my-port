import { Animate } from "react-simple-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import Mail from '../images/icons8-gmail-login-40.png';

function Contact() {
    return (
        <>
        <h2>Let's Talk</h2>
            <div>
                <form action="">
                    <input
                    placeholder="Name"
                    type="text"
                    className='name'
                    />
                    <input
                    placeholder="Email"
                    type="email"
                    />
                    <textarea
                    placeholder="Say Something"
                    type="text"
                    rows="10" cols="40"
                    ></textarea>
                    <input
                    type="Submit"
                    placeholder="SUBMIT"
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
        </>
    )
}
export default Contact;