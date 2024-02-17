import React from 'react';
import { Animate } from "react-simple-animate";


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
                <button className='resum'>Download my Resume</button>
              </div>
            </div>
          </div>

        </>
    )
}

export default HomePage;