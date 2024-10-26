<template>
  <div class="container">
    <header class="my-4 d-flex align-items-start">
      <img
        src="../assets/img/foto.png"
        alt="Foto de perfil de Luis Suarez"
        class="profile-pic img-thumbnail me-4"
        width="100"
        height="100"
      />
      <div>
        <h1 class="mb-3">Luis Suarez</h1>
        <p class="mb-1">Av. Independencia 1050</p>
        <p>suarrezluis.ea@gmail.com - +56 930539942</p>
      </div>
    </header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4 rounded">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'resumen' }"
                active-class="active"
                >Resumen</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'experiencia' }"
                active-class="active"
                >Experiencia</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'educacion' }"
                active-class="active"
                >Educación</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'habilidades' }"
                active-class="active"
                >Habilidades</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'contacto' }"
                active-class="active"
                >Contacto</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="text-center my-4 text-muted">
      <p>
        &copy; {{ new Date().getFullYear() }} Luis Suarez. Todos los derechos
        reservados.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitae",
};
</script>

<style scoped>
h1,
h2,
h3 {
  color: #333;
}

.profile-pic {
  object-fit: cover;
  border-radius: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-link-active {
  font-weight: bold;
  color: #0d6efd !important;
}
</style>
