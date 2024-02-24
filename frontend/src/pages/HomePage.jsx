import React from 'react';
import { Animate } from "react-simple-animate";
import Mail from '../images/icons8-gmail-login-40.png';
import Resum from '../images/Front End Developer Resume.pdf';

function HomePage () {
    return (
        <>
        <div class="hom">
            <div class="intro">
              <h2>Hey, I'm Peter.</h2>
              <h2>Front End Developer</h2>
              <div className='btns'>
                <Animate
                 play
                 duration={1.5}
                 delay={1}
                 start={{
                   transform: "translateY(550px)",
                 }}
                 end={{
                   transform: "translatex(0px)",
                 }}

                >
                  
                </Animate>
                <div className='page'>
                    <a href={Resum} download="Resum"><button className='resum'>Download my Resume</button></a>
                    <a className='mail' href='https://mail.google.com/mail/u/0/#inbox'><img className='mail' src={Mail} size="2x"/></a>
                </div>
              </div>
            </div>
          </div>

        </>
    )
}

export default HomePage;