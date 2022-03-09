import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";

import './Content.css'

function Content() {
    return (
        <div id="content">
            <About />
            <Projects />
            <Services />
        </div>
    )
}

export default Content