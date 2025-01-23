import styles from './studies.module.css'

function Studies() {

    return (
        <section id={styles.study}>
            <h2>formación</h2>
            <div className={styles.section__study}>
                <div className={styles.study__box}>
                    <img src="./assets/img/aluraoracle.png" alt="logo alura" />
                    <div>
                        <h3>Oracle Next Education</h3>
                        <p>Es un programa educativo en alianza con Alura, diseñado para capacitar a personas en tecnología. Dura 6 meses y se divide en 4 rutas que ofrecen más de 560 horas de contenido práctico y teórico.</p>
                        <p>2024</p>
                    </div>
                </div>

                <div className={styles.study__box}>
                    <img src="./assets/img/academlo.png" alt="logo academlo" />
                    <div>
                        <h3>Academlo</h3>
                        <p>Es un programa de 5 a 6 meses con clases diarias, en vivo y por las noches. La idea es estudiar en línea, ofreciendo una experiencia muy interactiva.</p>
                        <p>2022-2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studies