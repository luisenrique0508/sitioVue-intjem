<template>
  <section class="container py-5">
    <h2 class="section-title text-center mb-5">Nuestros Convenios</h2>
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="convenio-card text-center">
          <img src="@/assets/congregacionmadresreli.png" class="img-fluid mb-3" alt="Convenio 1" />
          <div class="convenio-link-wrapper">
            <a href="#" class="btn btn-success w-100">
              <i class="fas fa-external-link-alt me-2"></i>Congregación JM
            </a>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="convenio-card text-center">
          <img src="@/assets/ministerioeduca.png" class="img-fluid mb-3" alt="Ministerio de Educación" />
          <div class="convenio-link-wrapper">
            <a href="https://www.minedu.gob.bo/" class="btn btn-success w-100" target="_blank">
              <i class="fas fa-external-link-alt me-2"></i>Ministerio de Educación
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="convenio-card text-center">
          <img src="@/assets/direciontecnicasuperior.jpg" class="img-fluid mb-3" alt="DIGESTTA" />
          <div class="convenio-link-wrapper">
            <a href="https://www.minedu.gob.bo/index.php/dir-gral-de-educacion-superior-tecnica-tecnologica-lingueistica-y-artistica" class="btn btn-success w-100" target="_blank">
              <i class="fas fa-external-link-alt me-2"></i>DIGESTTA
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="convenio-card text-center">
          <img src="@/assets/utpunidadtiprofe.png" class="img-fluid mb-3" alt="UTP" />
          <div class="convenio-link-wrapper">
            <a href="https://www.utp.edu.bo/" class="btn btn-success w-100" target="_blank">
              <i class="fas fa-external-link-alt me-2"></i>UTP
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConveniosSection'
}
</script>

<style scoped>
.convenio-card {
  padding: 15px;
  background: linear-gradient(135deg, #fff5e6, #74bcff);
  border-radius: 10px;
  transition: transform 0.3s;
  height: 100%;
  width: 100%;
}

.convenio-card:hover {
  transform: translateY(-5px);
}

.convenio-link-wrapper {
  margin-top: 10px;
}

.convenio-card .btn-success {
  background: #28a745;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s;
}

.convenio-card .btn-success:hover {
  background: #218838;
  transform: scale(1.05);
}

.convenio-card img {
  height: 150px;
  object-fit: contain;
  margin: auto;
}
</style>