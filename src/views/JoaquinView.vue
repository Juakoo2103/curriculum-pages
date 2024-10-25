<template>
  <div class="container-fluid d-flex flex-column min-vh-100 bg-dark text-white">
    <header class="text-center my-4">
      <img
        src="@/assets/img/joaquinview/profile.png"
        alt="Joaquin Gonzalez"
        width="200"
        class="rounded-circle mb-3"
      />
      <h1>Joaquin Gonzalez Dev</h1>
    </header>

    <main class="flex-grow-1 d-flex justify-content-center align-items-center">
      <div class="content w-100 p-4" style="max-width: 800px">
        <section>
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy Joaquin Gonzalez, y me encanta el desarrollo web. Me
            especializo en JavaScript y React, y actualmente me dedico a crear
            encuestas con LimeSurvey, donde disfruto transformando ideas en
            soluciones prácticas y efectivas.
          </p>
          <p>
            Siempre estoy buscando aprender algo nuevo. Ahora, me estoy
            sumergiendo en un bootcamp de front end para mejorar mis habilidades
            en el desarrollo front end y poder ofrecer soluciones completas en
            mis proyectos. Mi objetivo es seguir creciendo como desarrollador
            web, abarcando tanto el frontend como el backend.
          </p>
          <p>
            Me apasiona resolver desafíos técnicos y ver cómo mis proyectos
            cobran vida en la web.
          </p>
        </section>

        <section class="my-3">
          <h2>Experiencia Laboral</h2>
          <ul class="list-unstyled">
            <li>Front end Developer</li>
            <li>Freelancer</li>
            <li>Programador de encuestas</li>
          </ul>
        </section>

        <section class="my-3">
          <h2>Educación</h2>
          <ul class="list-unstyled">
            <li>Enseñanza media - Liceo Industrial Italia Generación - 2009</li>
            <li>Universidad - Ing. en Informática (sin terminar) - 2020</li>
          </ul>
        </section>
      </div>
    </main>

    <footer class="text-center py-3">
      <p>&copy; 2024 Joaquin Gonzalez. Todos los derechos reservados.</p>
      <a
        href="https://github.com/Juakoo2103"
        target="_blank"
        class="text-light mx-2"
        >GitHub</a
      >
      <a
        href="https://www.linkedin.com/in/joaquingonzalezjs/"
        target="_blank"
        class="text-light mx-2"
        >LinkedIn</a
      >
      <p>
        Contacto:
        <p>joaquineduardo.gonzalez@gmail.com</p>       
      </p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container-fluid {
  font-family: "Cascadia Code", monospace;
  background-image: url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  transform: translateY(-100%);
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: block;
}

.header,
.footer,
.content {
  width: 100%;
  padding: 0 !important;
}
</style>
