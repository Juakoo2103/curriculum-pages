<template>
  <div class="container-fluid">
    <section class="container my-3">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <img src="../assets/img/JoseView/profile.png" alt="profile" class="img-fluid hero__img">
        </div>
        <div class="col-12 col-md-6">
          <h2 class="hero__title">Soy José Pérez</h2>
          <h3 class="hero__subtitle">Intento de Desarrollador FrontEnd</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos iure distinctio soluta magnam nam, et provident! Ipsa, quasi consequuntur. Inventore quas quam rem excepturi consectetur maxime labore porro tenetur?</p>
        </div>
      </div>
    </section>
    <section class="container">
    <div class="col-12 my-5 pt-5 skill">
      <h2 class="text-center skill__title">Mis habilidades</h2>
      <div class="row mt-5">
          <div class="row col-6">
            <div class="col-md col-12 p-1 d-flex">
              <i id="html" class="fa-brands fa-html5 skill__icon"></i>
              <span class="skill__text ms-2">HTML</span>
            </div>
            <div class="col-md col-12 p-1 d-flex">
              <i id="css" class="fa-brands fa-css3-alt skill__icon"></i>
              <span class="skill__text ms-2">CSS</span>
            </div>
            <div class="col-md col-12 p-1 d-flex">
              <i id="sass" class="fa-brands fa-sass skill__icon"></i>
              <span class="skill__text ms-2">Sass</span>
            </div>
            <div class="col-md col-12 p-1 d-flex">
              <i id="bootstrap" class="fa-brands fa-bootstrap skill__icon"></i>
              <span class="skill__text ms-2">Bootstrap</span>
            </div>
          </div>
          <div class="row col-6">
            <div class="col-md col-12 p-1 d-flex">
              <i id="git" class="fa-brands fa-git-alt skill__icon"></i>
              <span class="skill__text ms-2">Git</span>
            </div>
            <div class="col-md col-12 p-1 d-flex">
              <i id="github" class="fa-brands fa-github skill__icon"></i>
              <span class="skill__text ms-2">Github</span>
            </div>
            <div class="col-md col-12 p-1 d-flex">
              <i id="js" class="fa-brands fa-js skill__icon"></i>
              <span class="skill__text ms-2">Javascript</span>
            </div>
            <div class="col-md col-12 p-1 d-flex">
              <i id="vue" class="fa-brands fa-vuejs skill__icon"></i>
              <span class="skill__text ms-2">Vue</span>
            </div>
          </div>
      </div>
    </div>
    </section>
    <section class="container col-12 my-5 pt-5 projects">
      <h2 class="text-center projects__title">Mis proyectos</h2>
      <div class="row mt-5">
        <div class="row col-md-6 col-6">
          <div class="col-md">
            <img src="" alt="" class="img-fluid">
            <h3 class="projects__subtitle my-1">Pendiente</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  name: 'CurriculumJose',
  data() {
    return {};
  }
};
</script>

<style scoped>
.hero__img{
  width: 25rem;
  border-radius: 50%;
}
.hero__title {
  color: #1D3557;
  font-weight: 700;
}
.hero__subtitle {
  color: #457B9D;
  font-weight: 500;
}
.skill__title {
  color: #1D3557;
  font-weight: 500;
}
.skill__icon {
  font-size: 3rem;
}
.skill__text {
  font-size: 1rem;
  align-self: center;
}
#html {
  color: #DD4B25;
}

#css {
  color: #379AD6;
}

#sass {
  color: #CD669A;
}

#bootstrap {
  color: #533B78;
}

#git {
  color: #F05030;
}

#github {
  color: #000;
}

#js {
  color: #E8D44D;
}

#vue {
  color: #3FB27F;
}
.projects__title {
  color: #1D3557;
  font-weight: 700;
}
.projects__subtitle {
  color: #1D3557;
}

</style>