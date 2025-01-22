function Contact() {

    return (
        <section id="contact">
            <h2>contacto</h2>
            <p>
                Cuando no estoy aprendiendo programación web, disfruto de ver
                <span> películas, series o animes, </span>
                explorar nuevos juegos en
                <a href="https://steamcommunity.com/id/iamjonfo/" target="_blank" rel="external noopener noreferrer">
                    Steam,
                </a>
                o descubrir nuevas bandas que agregar a mi
                <a href="https://open.spotify.com/playlist/3qdGUw9vw6Vn06024lb5S6?si=b230eda6e96f4db9" target="_blank" rel="external noopener noreferrer">
                    playlist.
                </a>
                Si deseas contactarme, no dudes en escribir. ¡Siempre abierto a nuevas oportunidades!
            </p>
            <form id="contact__form" action="https://formspree.io/f/xrbgpwro" method="post">
                <div>
                    <label for="name">Nombre *</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="email">Correo *</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="subject">Asunto</label>
                    <input type="text" id="subject" name="subject" />
                </div>
                <div>
                    <label for="message">Mensaje *</label>
                    <textarea id="message" name="message" wrap="hard" placeholder="Escribe tu mensaje aquí..." required></textarea>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                    <button type="reset">Borrar</button>
                </div>
            </form>
        </section>
    )
}

export default Contact