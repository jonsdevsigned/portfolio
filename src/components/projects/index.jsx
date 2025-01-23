import styles from './projects.module.css'

function Projects() {

  return (
    <section id={styles.project}>
      <h2>proyectos</h2>

      <div className={styles.projects__content}>
        <div className={styles.project__box}>
          <h3>Encriptador de texto</h3>
          <img src="./assets/img/encypter.png" alt="imagen previa del encriptador de texto" />
          <div className={styles['project__box-info']}>
            <div>
              <i className="fa-br /ands fa-html5 fa-xl"></i>
              <i className="fa-br /ands fa-css3-alt fa-xl"></i>
              <i className="fa-br /ands fa-js fa-xl"></i>
            </div>
            <div>
              <a href="https://jonsdevsigned.github.io/encrypter-text/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-window-restore fa-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project__box}>
          <h3>Frases aleatorias</h3>
          <img src="./assets/img/quotes.png" alt="imagen previa del encriptador de texto" />
          <div className={styles['project__box-info']}>
            <div>
              <i className="fa-br /ands fa-html5 fa-xl"></i>
              <i className="fa-br /ands fa-css3-alt fa-xl"></i>
              <i className="fa-br /ands fa-js fa-xl"></i>
              <i className="fa-br /ands fa-react fa-xl"></i>
            </div>
            <div>
              <a href="https://jonsdevsigned.github.io/hundred-quotes/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-window-restore fa-xl"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects