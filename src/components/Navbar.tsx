import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            < a href="#intro">Intro</a>
            <a href="#projects">Projects</a>
            <a href="#project-detail">Project Detail</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default Navbar;