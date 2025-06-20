<template>
  <section class="container mission-vision-container py-5">
    <h2 class="section-title">Misión - Visión - Filosofía</h2>
    <p class="intro-text px-md-5 px-3">
      Texto introductorio sobre los valores y principios del instituto.
    </p>

    <div class="row g-4">
      <div class="col-12 col-md-4">
        <div class="mission-vision-card h-100">
          <div class="icon-box">
            <i class="fas fa-trophy" style="color: #fbe942;"></i>
          </div>
          <h3>Misión</h3>
          <p>
            Formar profesionales técnicos comprometidos con valores éticos y
            excelencia.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="mission-vision-card h-100">
          <div class="icon-box">
            <i class="fas fa-eye text-white"></i>
          </div>
          <h3>Visión</h3>
          <p>
            Ser una institución líder en educación técnica a nivel nacional.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="mission-vision-card h-100">
          <div class="icon-box">
            <i class="fas fa-heart" style="color: rgb(181, 0, 0);"></i>
          </div>
          <h3>Filosofía</h3>
          <p>
            Inspirados en los valores de Jesús María, promovemos el
            desarrollo integral.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MisionVisionSection'
}
</script>

<style scoped>
/* Los estilos se importarán desde el archivo CSS global */
</style>