<template>
  <section class="container py-5 flashcards-section">
    <div class="container">
      <h2 class="section-title">Ven y Estudia</h2>
      <center>
        <p class="intro-text px-md-5 px-5 h2 fw-bold"></p>
        Te invitamos a forjar un futuro diferente estudiando en el Instituto Técnico Jesús María. con mayor prestigio y calidad en la educación técnica.
      </center>

      <!-- Flip Cards Container -->
      <div class="flashcards-container">
        <div class="row g-4 justify-content-center">
          <div class="col-12 col-md-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style="
                        background-image: url('../assets/coding-bg.jpeg');
                        background-size: contain;
                        background-position: center;
                        whidth: 100%;
                        height: 100%;
                        object-fit: contain;
                        background-color: white;

                        ">
                  <div class="overlay"></div>
                  <div class="icon-circle">
                    <i class="fas fa-laptop-code"></i>
                  </div>
                  <h3 class="front-title">Sistemas Informáticos</h3>
                  <p class="front-subtitle">Técnico Superior</p>
                  <i class="fas fa-sync-alt flip-indicator"></i>
                </div>
                <div class="flip-card-back">
                  <h3 class="card-title">Sistemas Informáticos</h3>
                  <p class="card-text">
                    Sistemas informáticos es una carrera técnica y tecnológica a nivel de técnico superior que se
                    adapta a las necesidades de automatización de la información de poblaciones rurales y urbanas.
                  </p>
                  <router-link to="/Sistemas" class="btn btn-primary">Ver más <i class="fas fa-laptop-code"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style="
                        background-image: url('../assets/secretaria.jpg');
                        background-size: contain;
                        background-position: center;

                        background-color: white;
                        ">
                  <div class="overlay"></div>
                  <div class="icon-circle">
                    <i class="fas fa-chart-column"></i>
                  </div>
                  <h3 class="front-title">Secretariado Ejecutivo</h3>
                  <p class="front-subtitle">Técnico Superior</p>
                  <i class="fas fa-sync-alt flip-indicator"></i>
                </div>
                <div class="flip-card-back">
                  <h3 class="card-title">Secretariado Ejecutivo</h3>
                  <p class="card-text">
                    Formar profesionales Productivos emprendedores pertinentes, con una sólida, formación científica, técnica, tecnológica y social, con un alto grado de conciencia, crítica, decisiva e innovadora, basada en valores éticos y morales
                  </p>
                  <router-link to="/Secretariado" class="btn btn-primary">Ver más <i class="fas fa-chart-column"></i></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front" style="
                        background-image: url('../assets/telecom.jpg');
                        background-size: cover;
                        background-position: center;
                        width: 100%;
                        height: 300px;
                      ">
                  <div class="overlay"></div>
                  <div class="icon-circle">
                    <i class="fas fa-broadcast-tower"></i>
                  </div>
                  <h3 class="front-title">Telecomunicaciones</h3>
                  <p class="front-subtitle">Técnico Superior</p>
                  <i class="fas fa-sync-alt flip-indicator"></i>
                </div>
                <div class="flip-card-back">
                  <h3 class="card-title">Telecomunicaciones</h3>
                  <p class="card-text">
                    Formar profesionales idóneos en el área de telecomunicaciones a nivel de técnico superior con conocimientos sólidos, teóricos y prácticos, para que sean capaces de desenvolverse, eficientemente con solvencia y ética en el mercado laboral, cuado a las necesidades de instalación y mantenimiento de equipos y sistemas de comunicación
                  </p>
                  <router-link to="/Telecomunicaciones" class="btn btn-primary">Ver más <i class="fas fa-broadcast-tower"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CarrerasSection'
}
</script>

<style scoped>
/* Los estilos se importarán desde el archivo CSS global */
</style>