function App() {

  return (
    <>
      <section id="home">
        <header>
          <nav>
            <ul>
              <li><a href="#home"><i class="fa-solid fa-house"></i><span>home</span></a></li>
              <li><a href="#about"><i class="fa-solid fa-user"></i><span>sobre mí</span></a></li>
              <li><a href="#skill"><i class="fa-solid fa-microchip"></i><span>habilidades</span></a></li>
              <li><a href="#study"><i class="fa-solid fa-book"></i><span>formación</span></a></li>
              <li><a href="#project"><i class="fa-solid fa-br /iefcase"></i><span>proyectos</span></a></li>
              <li><a href="#contact"><i class="fa-solid fa-address-card"></i><span>contacto</span></a></li>
            </ul>
          </nav>
        </header>
        <div class="home__presentation-short">
          <img src="./assets/img/photo.png" alt="fotografia de Jonfo" class='photo' />
          <p>Hola, <br />me dicen</p>
          <h1>Jonfo</h1>
          <h2>Soy programador front-end <br /><span class="typing-effect">en proceso.</span></h2>
        </div>

        <div class="home__social-media">
          <a href="https://www.linkedin.com/in/john-forero/" target="_blank" rel="external noopener noreferrer">
            <img src="./assets/icon/logo_linkedin.svg" alt="logo de linkedIn" />
            <span>linkedin</span>
          </a>
          <a href="https://github.com/jonsdevsigned" target="_blank" rel="external noopener noreferrer">
            <img src="./assets/icon/logo_github.svg" alt="logo de github" />
            <span>github</span>
          </a>
        </div>

      </section>


      {/* sección sobre mi */}
      <section id="about">
        <h2>Me Presento</h2>

        <h4>Soy <span>John Forero</span>, diseñador gráfico y en el futuro programador frontend.</h4>
        <p>Mi enfoque está en combinar lo mejor del diseño visual con el poder del desarrollo web, creando experiencias atractivas y funcionales.</p>
        <p>Mi pasión por la tecnología y el aprendizaje constante me impulsa a ofrecer soluciones creativas que no solo se vean bien, sino que funcionen de manera excepcional.</p>
        <p>Bienvenido a mi portafolio, donde cada proyecto refleja la evolución de mi marca personal y mis nuevas metas. ¡Hagamos algo increíble juntos!</p>
      </section>


      {/* sección de habilidades */}
      <section id="skill">
        <h2>habilidades</h2>

        <div class="section__skill-progress">
          <div class="skill__box">
            <img src="./assets/icon/logo_html.svg" alt="logo html" />
            <div class="skill__box-info">
              <p>HTML / frontend</p>
              <div>
                <span class="skill__box-progress"></span>
                <p>50%</p>
              </div>
            </div>
          </div>

          <div class="skill__box">
            <img src="./assets/icon/logo_css.svg" alt="logo css" />
            <div class="skill__box-info">
              <p>CSS / frontend</p>
              <div>
                <span class="skill__box-progress"></span>
                <p>50%</p>
              </div>
            </div>
          </div>

          <div class="skill__box">
            <img src="./assets/icon/logo_javascript.svg" alt="logo javascript" />
            <div class="skill__box-info">
              <p>JavaScript / lenguaje</p>
              <div>
                <span class="skill__box-progress"></span>
                <p>50%</p>
              </div>
            </div>
          </div>

          <div class="skill__box">
            <img src="./assets/icon/logo_react.svg" alt="logo react" />
            <div class="skill__box-info">
              <p>React / frontend</p>
              <div>
                <span class="skill__box-progress-react"></span>
                <p>15%</p>
              </div>
            </div>
          </div>

          <div class="skill__box">
            <img src="./assets/icon/logo_vite.svg" alt="logo vite" />
            <div class="skill__box-info">
              <p>Vite / desarrollo</p>
              <div>
                <span class="skill__box-progress-vite"></span>
                <p>10%</p>
              </div>
            </div>
          </div>
        </div>

        <div class="section__skill-noProgress">
          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_vscode.svg" alt="logo visual studio code" />
            <div>
              <p>VsCode<br />herramienta</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_git.svg" alt="logo git" />
            <div>
              <p>Git<br />desarrollo</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_github.svg" alt="logo github" />
            <div>
              <p>GitHub<br />desarrollo</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_illustrator.svg" alt="logo illustrator" />
            <div>
              <p>Illustrator<br />diseño</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_photoshop.svg" alt="logo photoshop" />
            <div>
              <p>Photoshop<br />diseño</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_premiere.svg" alt="logo premiere" />
            <div>
              <p>Premiere<br />audiovisual</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_figma.svg" alt="logo figma" />
            <div>
              <p>Figma<br />diseño</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_slack.svg" alt="logo slack" />
            <div>
              <p>Slack<br />productividad</p>
            </div>
          </div>

          <div class="skill__box-noProgress">
            <img src="./assets/icon/logo_notion.svg" alt="logo notion" />
            <div>
              <p>Notion<br />productividad</p>
            </div>
          </div>
        </div>
      </section>


      {/* sección de formación */}
      <section id="study">
        <h2>formación</h2>
        <div class="section__study">
          <div class="study__box">
            <img src="./assets/img/aluraoracle.png" alt="logo alura" />
            <div>
              <h3>Oracle Next Education</h3>
              <p>Es un programa educativo en alianza con Alura, diseñado para capacitar a personas en tecnología. Dura 6 meses y se divide en 4 rutas que ofrecen más de 560 horas de contenido práctico y teórico.</p>
              <p>2024</p>
            </div>
          </div>

          <div class="study__box">
            <img src="./assets/img/academlo.png" alt="logo academlo" />
            <div>
              <h3>Academlo</h3>
              <p>Es un programa de 5 a 6 meses con clases diarias, en vivo y por las noches. La idea es estudiar en línea, ofreciendo una experiencia muy interactiva.</p>
              <p>2022-2023</p>
            </div>
          </div>
        </div>
      </section>


      {/* sección de proyectos */}
      <section id="project">
        <h2>proyectos</h2>

        <div class="projects__content">
          <div class="project__box">
            <h3>Encriptador de texto</h3>
            <img src="./assets/img/encypter.png" alt="imagen previa del encriptador de texto" />
            <div class="project__box-info">
              <div>
                <i class="fa-br /ands fa-html5 fa-xl"></i>
                <i class="fa-br /ands fa-css3-alt fa-xl"></i>
                <i class="fa-br /ands fa-js fa-xl"></i>
              </div>
              <div>
                <a href="https://jonsdevsigned.github.io/encrypter-text/" target="_blank" rel="noopener noreferrer">
                  <i class="fa-solid fa-window-restore fa-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="project__box">
            <h3>Frases aleatorias</h3>
            <img src="./assets/img/quotes.png" alt="imagen previa del encriptador de texto" />
            <div class="project__box-info">
              <div>
                <i class="fa-br /ands fa-html5 fa-xl"></i>
                <i class="fa-br /ands fa-css3-alt fa-xl"></i>
                <i class="fa-br /ands fa-js fa-xl"></i>
                <i class="fa-br /ands fa-react fa-xl"></i>
              </div>
              <div>
                <a href="https://jonsdevsigned.github.io/hundred-quotes/" target="_blank" rel="noopener noreferrer">
                  <i class="fa-solid fa-window-restore fa-xl"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* sección de contacto */}
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

        <footer>
          <div class="publicity">
            <img src="./assets/img/jonsdesigned-web.png" alt="Logo de jonsdevsigned" class="logo_image" />
            <span class="jons">Jons</span><span class="dev">dev</span><span class="signed">signed</span>
          </div>
          <p class="developer">John Forero - 2024</p>
        </footer>
      </section>

      <a href="#home"><i class="fa-solid fa-house fa-xl"></i></a>
    </>
  )
}

export default App
