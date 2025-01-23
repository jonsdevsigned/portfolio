import styles from './banner.module.css'

function Banner() {

    return (
        <>
            <div className={styles['home__presentation-short']}>
                <img src="./assets/img/photo.png" alt="fotografia de Jonfo" className='photo' />
                <p>Hola, <br />me dicen</p>
                <h1>Jonfo</h1>
                <h2>Soy programador front-end <br /><span className="typing-effect">en proceso.</span></h2>
            </div>

            <div className={styles['home__social-media']}>
                <a href="https://www.linkedin.com/in/john-forero/" target="_blank" rel="external noopener noreferrer">
                    <img src="./assets/icon/logo_linkedin.svg" alt="logo de linkedIn" />
                    <span>linkedin</span>
                </a>
                <a href="https://github.com/jonsdevsigned" target="_blank" rel="external noopener noreferrer">
                    <img src="./assets/icon/logo_github.svg" alt="logo de github" />
                    <span>github</span>
                </a>
            </div>
        </>
    )
}

export default Banner