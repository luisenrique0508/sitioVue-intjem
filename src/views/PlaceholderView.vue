<template>
  <div class="container py-5 mt-5">
    <div class="card shadow">
      <div class="card-body text-center">
        <h1 class="mb-4">Página en construcción</h1>
        <p class="lead">Esta sección estará disponible próximamente.</p>
        <router-link to="/" class="btn btn-primary mt-3">
          <i class="fas fa-home me-2"></i> Volver al inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceholderView'
}
</script>

<style scoped>
.container {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>