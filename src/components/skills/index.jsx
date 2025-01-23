import styles from './skills.module.css'

function Skills() {

    return (
        <section id={styles.skill}>
            <h2>habilidades</h2>

            <div className={styles['section__skill-progress']}>
                <div className={styles.skill__box}>
                    <img src="./assets/icon/logo_html.svg" alt="logo html" />
                    <div className={styles['skill__box-info']}>
                        <p>HTML / frontend</p>
                        <div>
                            <span className={styles["skill__box-progress"]}></span>
                            <p>50%</p>
                        </div>
                    </div>
                </div>

                <div className={styles.skill__box}>
                    <img src="./assets/icon/logo_css.svg" alt="logo css" />
                    <div className={styles['skill__box-info']}>
                        <p>CSS / frontend</p>
                        <div>
                            <span className={styles["skill__box-progress"]}></span>
                            <p>50%</p>
                        </div>
                    </div>
                </div>

                <div className={styles.skill__box}>
                    <img src="./assets/icon/logo_javascript.svg" alt="logo javascript" />
                    <div className={styles['skill__box-info']}>
                        <p>JavaScript / lenguaje</p>
                        <div>
                            <span className={styles["skill__box-progress"]}></span>
                            <p>50%</p>
                        </div>
                    </div>
                </div>

                <div className={styles.skill__box}>
                    <img src="./assets/icon/logo_react.svg" alt="logo react" />
                    <div className={styles['skill__box-info']}>
                        <p>React / frontend</p>
                        <div>
                            <span className={styles['skill__box-progress-react']}></span>
                            <p>15%</p>
                        </div>
                    </div>
                </div>

                <div className={styles.skill__box}>
                    <img src="./assets/icon/logo_vite.svg" alt="logo vite" />
                    <div className={styles['skill__box-info']}>
                        <p>Vite / desarrollo</p>
                        <div>
                            <span className={styles['skill__box-progress-vite']}></span>
                            <p>10%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['section__skill-noProgress']}>
                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_vscode.svg" alt="logo visual studio code" />
                    <div>
                        <p>VsCode<br />herramienta</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_git.svg" alt="logo git" />
                    <div>
                        <p>Git<br />desarrollo</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_github.svg" alt="logo github" />
                    <div>
                        <p>GitHub<br />desarrollo</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_illustrator.svg" alt="logo illustrator" />
                    <div>
                        <p>Illustrator<br />diseño</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_photoshop.svg" alt="logo photoshop" />
                    <div>
                        <p>Photoshop<br />diseño</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_premiere.svg" alt="logo premiere" />
                    <div>
                        <p>Premiere<br />audiovisual</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_figma.svg" alt="logo figma" />
                    <div>
                        <p>Figma<br />diseño</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_slack.svg" alt="logo slack" />
                    <div>
                        <p>Slack<br />productividad</p>
                    </div>
                </div>

                <div className={styles['skill__box-noProgress']}>
                    <img src="./assets/icon/logo_notion.svg" alt="logo notion" />
                    <div>
                        <p>Notion<br />productividad</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills