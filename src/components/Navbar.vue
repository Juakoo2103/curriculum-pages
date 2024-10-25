<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <RouterLink class="nav-link" to="home">Curriculum Pages</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="luis">Luis</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="jose">Jose</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="gaby">Gaby</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="ignacio">Ignacio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="joaquin">Joaquin</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
