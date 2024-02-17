import About from '../About';
import HomePage from '../HomePage';
import Skills from '../Skills';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';


function Home() {
    return (
        <>
        <HomePage />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
        </>
    )
}

export default Home