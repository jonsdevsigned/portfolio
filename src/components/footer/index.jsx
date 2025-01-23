import styles from './footer.module.css'

function Footer() {

    return (
        <footer>
            <div className={styles.publicity}>
                <img src="./assets/img/jonsdesigned-web.png" alt="Logo de jonsdevsigned" className="logo_image" />
                <span className={styles.jons}>Jons</span><span className="dev">dev</span><span className="signed">signed</span>
            </div>
            <p className={styles.developer}>John Forero - 2024</p>
        </footer>
    )
}

export default Footer