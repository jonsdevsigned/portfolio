import { RiArchive2Fill, RiGraduationCapFill, RiHomeFill, RiMessage2Fill, RiUserFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import styles from './header.module.css'


function Header() {

    return (
        <>
            <section id={styles.home}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="#home"><RiHomeFill /><span>home</span></a></li>
                            <li><a href="#about"><RiUserFill /><span>sobre mí</span></a></li>
                            <li><a href="#skill"><FaTools /><span>habilidades</span></a></li>
                            <li><a href="#study"><RiGraduationCapFill /><span>formación</span></a></li>
                            <li><a href="#project"><RiArchive2Fill /><span>proyectos</span></a></li>
                            <li><a href="#contact"><RiMessage2Fill /><span>contacto</span></a></li>
                        </ul>
                    </nav>
                </header>
            </section >
        </>
    )

}

export default Header