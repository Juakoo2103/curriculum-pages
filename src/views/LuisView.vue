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
  </div>
</template>

<script>
export default {
  name: "LuisView",
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

.a-active {
  font-weight: bold;
  color: #0d6efd !important;
}
</style>
