<template>
  <div class="container profile-container">
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
        <p>suarezluis.ea@gmail.com - +56 930539942</p>
      </div>
    </header>
    <section class="experience my-4 p-3 rounded">
      <h2>Experiencia Profesional</h2>
      <p>
        Con 15 años de experiencia como cocinero, he trabajado en diversos
        restaurantes y cocinas, especializándome en técnicas de alta gastronomía
        y servicio al cliente.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "LuisView",
};
</script>

<style scoped>
/* Background and overall container styling */
.profile-container {
  background-image: url("https://img.freepik.com/vector-premium/coleccion-utensilios-cocina-articulos-cocina_9493-82097.jpg?w=740");
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
  color: black;
  font-weight: 700;
}

/* Header styling */
h1,
h2,
h3 {
  color: black;
}

.profile-pic {
  object-fit: cover;
  border-radius: 50%;
}

/* Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.a-active {
  font-weight: bold;
  color: #0d6efd !important;
}

/* Experience section styling */
.experience {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
}
</style>
