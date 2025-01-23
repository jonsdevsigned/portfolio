import styles from './aboutMe.module.css'

function AboutMe() {

    return (
        <section id={styles.about}>
            <h2>Me Presento</h2>

            <h4>Soy <span>John Forero</span>, diseñador gráfico y en el futuro programador frontend.</h4>
            <p>Mi enfoque está en combinar lo mejor del diseño visual con el poder del desarrollo web, creando experiencias atractivas y funcionales.</p>
            <p>Mi pasión por la tecnología y el aprendizaje constante me impulsa a ofrecer soluciones creativas que no solo se vean bien, sino que funcionen de manera excepcional.</p>
            <p>Bienvenido a mi portafolio, donde cada proyecto refleja la evolución de mi marca personal y mis nuevas metas. ¡Hagamos algo increíble juntos!</p>
        </section>
    )
}

export default AboutMe