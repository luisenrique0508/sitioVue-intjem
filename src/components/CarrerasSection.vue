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
                <div class="flip-card-front sistemas-card">
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
                  <button class="btn btn-primary" @click="navigateToSistemas">Ver más <i class="fas fa-laptop-code"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front secretaria-card">
                  <div class="overlay"></div>
                  <div class="icon-circle2">
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
                  <button class="btn btn-primary" @click="navigateToSecretariado">Ver más <i class="fas fa-chart-column"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front telecom-card">
                  <div class="overlay"></div>
                  <div class="icon-circle3">
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
                  <button class="btn btn-primary" @click="navigateToTelecom">Ver más <i class="fas fa-broadcast-tower"></i></button>
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
  name: 'CarrerasSection',
  methods: {
    navigateToSistemas() {
      this.$router.push('/sistemas');
    },
    navigateToSecretariado() {
      this.$router.push('/secre');
    },
    navigateToTelecom() {
      this.$router.push('/telecom');
    }
  }
}
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  perspective: 1000px;
  margin-bottom: 2rem;
  position: relative;
  height: 330px;
  width: 100%;
}

.flip-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  z-index: 2;
}

.flip-card:hover .flip-indicator {
  transform: rotate(180deg);
  opacity: 1;
}

.flip-card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flip-card-front {
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sistemas-card {
  background-image: url('@/assets/coding-bg.jpeg');
}

.secretaria-card {
  background-image: url('@/assets/secretaria.jpg');
}

.telecom-card {
  background-image: url('@/assets/telecom.jpg');
}

.front-title {
  color: white;
  margin-top: 1.1rem;
  font-size: 1.65rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.front-subtitle {
  color: white;
  font-size: 1.1rem;
  margin-top: 0.55rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.icon-circle {
  width: 88px;
  height: 88px;
  background: rgba(255, 255, 255, 0.409);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.icon-circle2 {
  width: 88px;
  height: 88px;
  background: rgba(255, 255, 255, 0.409);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.icon-circle3 {
  width: 88px;
  height: 88px;
  background: rgba(255, 255, 255, 0.409);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.icon-circle i {
  font-size: 2.75rem;
  color: #033e82a2;
}

.icon-circle2 i {
  font-size: 2.75rem;
  color: #6505d3a2;
}

.icon-circle3 i {
  font-size: 2.75rem;
  color: #ecd31ba2;
}

.flip-card-back {
  background: linear-gradient(135deg, #e6f9fc 0%, #75c9fa 100%);
  color: black;
  transform: rotateY(180deg);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #0d0ba5;
}

.card-text {
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.btn-primary {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 117, 252, 0.2);
  color: white;
  text-decoration: none;
}

.btn-primary i {
  margin-left: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .flip-card {
    height: 300px;
  }
  
  .front-title {
    font-size: 1.4rem;
  }
  
  .front-subtitle {
    font-size: 1rem;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
  
  .btn-primary {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (min-width: 1440px) {
  .flip-card {
    height: 400px;
  }
  
  .front-title {
    font-size: 2rem;
  }
  
  .front-subtitle {
    font-size: 1.3rem;
  }
  
  .card-title {
    font-size: 1.8rem;
  }
  
  .card-text {
    font-size: 1.1rem;
  }
  
  .btn-primary {
    padding: 0.7rem 2rem;
    font-size: 1.1rem;
  }
}
</style>