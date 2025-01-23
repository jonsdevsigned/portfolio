import styles from './header.module.css'

function Header() {

    return (
        <>
            <section id={styles.home}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="#home"><i className="fa-solid fa-house"></i><span>home</span></a></li>
                            <li><a href="#about"><i className="fa-solid fa-user"></i><span>sobre mí</span></a></li>
                            <li><a href="#skill"><i className="fa-solid fa-microchip"></i><span>habilidades</span></a></li>
                            <li><a href="#study"><i className="fa-solid fa-book"></i><span>formación</span></a></li>
                            <li><a href="#project"><i className="fa-solid fa-br /iefcase"></i><span>proyectos</span></a></li>
                            <li><a href="#contact"><i className="fa-solid fa-address-card"></i><span>contacto</span></a></li>
                        </ul>
                    </nav>
                </header>
            </section>
        </>
    )

}

export default Header