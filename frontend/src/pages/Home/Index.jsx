import About from './Pages/About';
import HomePage from './Pages/HomePage';
import Skills from './Pages/Skills';
import Contact from './Pages/Conntact';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';


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