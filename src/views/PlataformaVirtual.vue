<template>
  <div class="color">
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-section"></div>
      <div id="tsparticles"></div>
    </div>

    <!-- Contenido Principal -->
    <div class="container text-center py-5">
      <h2 class="section-title">Google Workspace</h2>
      <p class="info-text">
        A partir de la crisis sanitaria el año 2020, el Instituto Técnico
        Jesús María en la necesidad de adecuarse a las nuevas exigencias
        educativas utiliza el servicio de Google Workspace como una
        herramienta de apoyo en sus procesos académicos en la modalidad
        Semipresencial.
      </p>
      <p class="info-text">
        Una vez que un(a) estudiante se inscribe en nuestro instituto, puede
        acceder a los servicios de Google Workspace con su cuenta individual,
        misma que está habilitada bajo el siguiente formato:
      </p>

      <div class="section-box text-start mx-auto" style="max-width: 800px">
        <p>
          <i class="bi bi-person-circle icon"></i><span class="highlight">USUARIO:</span> Se le hará conocer al
          estudiante en el momento de su inscripción.
        </p>
        <p>
          <i class="bi bi-lock-fill icon"></i><span class="highlight">La contraseña:</span> es
          <code>jm.</code> seguido del número de Carnet de Identidad, por
          ejemplo:
        </p>
        <p>
          Si el <strong>C.I. del estudiante</strong> es
          <strong>7654321</strong> entonces su contraseña es:
          <span class="example-password">jm.7654321</span>
        </p>

        <p class="mt-3">
          Estas reglas se aplican sólo a usuarios que ingresan por primera vez
          a la Plataforma.<br />
          El usuario podrá cambiar su contraseña desde la plataforma Google si
          así lo desea.
        </p>

        <p class="mt-4 mb-2">
          Para acceder a la Plataforma Web del Instituto y utilizar tu cuenta
          Google Workspace puedes guiarte con el siguiente video:
        </p>

        <div class="youtube-btns d-flex justify-content-center flex-wrap gap-2">
          <a
            href="https://www.youtube.com/watch?v=nkxeHakiFYc"
            class="btn btn-outline-light btn-custom"
            target="_blank"
          ><i class="bi bi-youtube icon"></i>Ver Video para PC</a>
          <a
            href="https://www.youtube.com/watch?v=OJJ4E9Mhf-4"
            class="btn btn-outline-light btn-custom"
            target="_blank"
          ><i class="bi bi-phone icon"></i>Ver Video para Celular</a>
        </div>

        <p class="mt-3 mb-0" style="font-size: 0.95rem">
          Si tienes problemas con tu cuenta puedes hacer tus consultas por
          WhatsApp al:<br />
          <strong>72304838 (Mañana)</strong> o
          <strong>75420010 (Tarde)</strong>.
        </p>
      </div>

      <h3 class="subtitle">Plataforma Institucional</h3>
      <div class="section-box text-center mx-auto" style="max-width: 900px">
        <p>
          Todo estudiante inscrito puede acceder a la Plataforma Institucional
          para: verificar Documentos concernientes a la institución, sus
          materias, sus horarios de clases y consultar sus calificaciones,
          utilizando como USUARIO su cuenta Google Workspace y como CONTRASEÑA
          el número de su Cédula de Identidad.
        </p>
        <a
          href="https://intjem.edu.bo/infoplataforma.php"
          class="btn btn-green btn-custom mt-3"
        >
          <i class="bi bi-box-arrow-in-right icon"></i>ACCEDER A LA PLATAFORMA
          INSTITUCIONAL
        </a>
      </div>
    </div>

    <!-- Mapa y Redes Sociales -->
    <ContactoSection />
  </div>
</template>

<script>
import ContactoSection from '@/components/ContactoSection.vue'

export default {
  name: 'PlataformaVirtualView',
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
.color {
  background: linear-gradient(90deg, #7a3ff2, hsl(225, 99%, 38%));
}

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
  background-image: url('@/assets/w8.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: rgb(254, 254, 254);
}

.info-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: rgb(255, 255, 255);
}

.section-box {
  background-color: rgba(12, 12, 78, 0.9);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  color: white;
}

.highlight {
  font-weight: 600;
  color: #ffffff;
}

.example-password {
  font-weight: bold;
  color: #00f0ff;
}

.btn-custom {
  border-radius: 30px;
  padding: 0.6rem 1.5rem;
  font-weight: 500;
}

.btn-green {
  background: linear-gradient(135deg, #1de9b6, #1dc4e9);
  color: #000;
  border: none;
}

.btn-green:hover {
  background: linear-gradient(135deg, #00bfa5, #00acc1);
  color: white;
}

.subtitle {
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 2rem;
  color: white;
}

.icon {
  margin-right: 8px;
}
</style>