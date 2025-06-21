<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-section"></div>
      <div id="tsparticles"></div>
    </div>

    <!-- Preguntas Frecuentes -->
    <div class="container my-5" id="formulario">
      <div class="row">
        <!-- Inscripciones al instituto -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-calendar-alt text-dark-purple fa-2x me-3" style="color: #4B0082;"></i>
              <div>
                <h5 class="card-title"><strong>¿Cuándo empiezan las inscripciones?</strong></h5>
                <p class="card-text">El instituto aplica el régimen ANUAL, por tanto las inscripciones se realizan al principio de cada año según el calendario emitido por el ministerio de educación. 
                  -Estar pendiente a las redes sociales del instituto</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Estudiantes Nacionales - Requisitos básicos -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-user-graduate text-primary fa-2x me-3"></i>
              <div>
                <h5 class="card-title"><strong>Estudiantes Nacionales</strong><br>¿Cuáles son los requisitos básicos de inscripción?</h5>
                <ul class="card-text">
                  <li>Original y fotocopia simple del Diploma de bachiller.</li>
                  <li>Original y fotocopia simple de cédula de identidad vigente</li>
                  <li>Original y fotocopia simple de Certificado de Nacimiento</li>
                  <li><strong>4</strong> fotografías tamaño <strong>3x3 con fondo perla, traje formal (est. nuevos).</strong></li>
                  <li>Boletín de calificaciones de la gestión anterior (est. Antiguos)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Estudiantes Extranjeros -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-globe text-secondary fa-2x me-3"></i>
              <div>
                <h5 class="card-title"><strong>Estudiantes Extranjeros</strong></h5>
                <ul class="card-text">
                  <li>Fotocopia simple de la Cédula de Extranjería vigente</li>
                  <li>Fotocopia simple de pasaporte con visa vigente, acompañado de original para su verificación.</li>
                  <li>Fotocopia del Diploma de Bachiller o su equivalente legalizado por las instancias correspondientes</li>
                  <li>4 fotografías tamaño 3x3 con fondo perla (traje formal)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Costo de inscripción -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-money-bill-wave text-warning fa-2x me-3"></i>
              <div>
                <h5 class="card-title"><strong>¿Cuánto es el costo de inscripción?</strong></h5>
                <p class="card-text">Para inscribirse a una de nuestras carreras el estudiante deberá cancelar un total de 510 Bs. como aporte anual y único pago en toda la gestión.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Horarios de clases -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-clock text-danger fa-2x me-3"></i>
              <div>
                <h5 class="card-title"><strong>¿Cuáles son sus horarios de clases?</strong></h5>
                <p class="card-text"><strong><br>– Mañana: 07:50 – 12:30</strong> <strong><br>– Tarde: 13:50 a 18:30</strong><br><strong>– NO CONTAMOS CON EL TURNO NOCTURNO.</strong></p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Convalidaciones -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-file-alt text-success fa-2x me-3"></i>
              <div>
                <h5 class="card-title"><strong>Convalidaciones</strong></h5>
                <p class="card-text">Certificados de Notas Originales.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Dirección -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-map-marker-alt text-dark fa-2x me-3"></i>
              <div>
                <h5 class="card-title"><strong>¿Cuál es la dirección exacta?</strong></h5>
                <p class="card-text">Calle Oblitas Nro364 entre Pagador y Potosí</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Teléfonos -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body d-flex">
              <i class="fas fa-phone text-success fa-2x me-3 text-success"></i>
              <div>
                <h5 class="card-title"><strong>Teléfonos y contactos de la institución</strong></h5>
                <p class="card-text">(+591) 2 52 45400 
                  <br>Los links de todas las redes sociales de la institución están al final de la página
                  (tocar los iconos)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Modalidades de Titulación -->
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <div class="d-flex">
                <i class="fas fa-graduation-cap text-warning fa-2x me-3"></i>
                <div>
                  <h5 class="card-title"><strong>Modalidades de Titulación por Carrera</strong></h5>
                  <ul class="mb-0" style="padding-left: 15px; line-height: 1.2;">
                    <li><strong>Sistemas Informáticos:</strong>
                      <ul style="padding-left: 15px; margin-bottom: 5px;">
                        <li>Proyecto de Grado</li>
                        <li>Trabajo Dirigido</li>
                        <li>Excelencia Académica</li>
                        <li>Pasantías</li>
                        <li>Reconocimiento a la Experiencia</li>
                      </ul>
                    </li>
                    <li><strong>Secretariado Ejecutivo:</strong>
                      <ul style="padding-left: 15px; margin-bottom: 5px;">
                        <li>Proyecto de Grado</li>
                        <li>Trabajo Dirigido</li>
                        <li>Excelencia Académica</li>
                      </ul>
                    </li>
                    <li><strong>Telecomunicaciones:</strong>
                      <ul style="padding-left: 15px; margin-bottom: 0;">
                        <li>Proyecto de Grado</li>
                        <li>Trabajo Dirigido</li>
                        <li>Pasantías</li>
                        <li>Reconocimiento a la Experiencia</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mapa y Redes Sociales -->
    <ContactoSection />
  </div>
</template>

<script>
import ContactoSection from '@/components/ContactoSection.vue'

export default {
  name: 'AdmisionView',
  components: {
    ContactoSection
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      if (typeof window !== 'undefined' && window.tsParticles) {
        window.tsParticles.load("tsparticles", {
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: [
                "#FFFFFF",
                "#000080",
                "#00BFFF",
                "#FFD700",
                "#FF69B4",
                "#8A2BE2",
              ],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4.3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: ["#6253DD"],
              opacity: 0.7,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            twinkle: {
              particles: {
                enable: true,
                color: "#ffd700",
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          interactivity: {
            detectOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.2,
                factor: 50,
              },
              push: {
                quantity: 2,
              },
            },
          },
          background: {
            color: "transparent",
          },
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          detectRetina: true,
          fpsLimit: 60,
        });
      }
    }
  }
}
</script>

<style scoped>
.hero-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 65%;
  background-color: transparent;
  z-index: 2;
}

.hero-section {
  position: absolute;
  width: 100%;
  height: 65%;
  background-image: url('@/assets/w2.1.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-container {
    height: auto;
  }
  .hero-section {
    height: auto;
    margin-top: 50px;
  }
}

@media (min-width: 992px) and (max-width: 1440px) {
  .hero-container {
    height: auto;
    padding-top: 3.7rem;
  }
}

@media (min-width: 1440px) and (max-width: 2600px) {
  .hero-container {
    height: auto;
    padding-top: 1rem;
  }
}

/* Estilos para las cards */
#formulario .card {
  background: linear-gradient(135deg, #176cff, #9362fb) !important;
}

#formulario .card h5,
#formulario .card p,
#formulario .card li,
#formulario .card i {
  color: #ffffff !important;
}

#formulario .card i {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

#formulario .card h5,
#formulario .card p,
#formulario .card li {
  color: #FDF6E3 !important;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

#formulario .card i {
  color: #FFD700 !important;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

#formulario .card .fa-money-bill-wave {
  color: #28a745 !important;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

#formulario .card .fa-map-marker-alt {
  color: #DB4437 !important;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

#formulario .card h5,
#formulario .card p,
#formulario .card li {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}
</style>