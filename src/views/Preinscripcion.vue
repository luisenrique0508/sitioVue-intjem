<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-section"></div>
      <div id="tsparticles"></div>
    </div>

    <!-- Título -->
    <div class="container-fluid text-center my-5" style="margin-top: 5rem;">
      <h1 style="font-family: 'Helvetica Neue', sans-serif; font-size: 2.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); background: linear-gradient(45deg, #ffffff, #8b87ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        FORMULARIO DE PREINSCRIPCIÓN
      </h1>
    </div>

    <!-- Formulario y Requisitos -->
    <div class="container py-5 mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="form-box">
            <p>Este es el primer paso para ingresar a una de nuestras carreras a nivel Técnico Superior para la próxima gestión 2026</p>
            <form id="preinscripcionForm" @submit.prevent="enviarFormulario">
              <input type="text" v-model="formData.apellidos" class="form-control" placeholder="Apellidos" required>
              <input type="text" v-model="formData.nombres" class="form-control" placeholder="Nombres" required>
              <input type="text" v-model="formData.ci" class="form-control" placeholder="Cédula de Identidad (con su extensión,OR,LP.SC)" required>
              <input type="tel" v-model="formData.telefono" class="form-control" placeholder="Teléfono (WhatsApp)" required>
              <input type="email" v-model="formData.correo" class="form-control" placeholder="Correo electrónico" required>
          
              <label class="mt-3">Selecciona una carrera:</label>
              <select v-model="formData.carrera" class="form-select" required>
                <option value="">Elegir carrera</option>
                <option value="Sistemas Informáticos">Sistemas Informáticos</option>
                <option value="Secretariado Ejecutivo">Secretariado Ejecutivo</option>
                <option value="Telecomunicaciones">Telecomunicaciones</option>
              </select>
          
              <label class="mt-3">Selecciona el turno:</label>
              <select v-model="formData.turno" class="form-select" required>
                <option value="">Elegir turno</option>
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
              </select>
              
              <button type="submit" class="btn btn-success btn-enviar">
                <i class="bi bi-send-fill me-2 text-black" style="color: rgb(16, 171, 255);"></i>ENVIAR LOS DATOS
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="info-box" style="background-color: rgba(158, 155, 155, 0.111);">
            <img src="@/assets/noticia04-2.jpg" alt="Logo" style="max-width: 120px; margin: 0 auto 30px; filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2)); border-radius: 15%;">
            <h3 style="color: #feffff; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 25px; text-shadow: 0 2px 4px rgba(232, 227, 227, 0.2);">
              Instituto Técnico Jesús María
            </h3>
            <p style="color: #ffdd02; font-size: 1.2rem; font-weight: 500; margin-bottom: 20px;">
              <i class="fas fa-clipboard-list me-2 text-info"></i>
              <strong>Requisitos de inscripción</strong>
            </p>
            <ul style="list-style: none; padding: 0; color: #fcfcfcf0; text-align: left;">
              <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                <i class="fas fa-check-circle" style="color: #fdfd0a; position: absolute; left: 0;"></i>
                Original y fotocopia simple del Diploma de Bachiller
              </li>
              <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                <i class="fas fa-check-circle" style="color: #fdfd0a; position: absolute; left: 0;"></i>
                Original y fotocopia simple del Carnet de Identidad vigente
              </li>
              <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                <i class="fas fa-check-circle" style="color: #ffd500; position: absolute; left: 0;"></i>
                Original y fotocopia del Certificado de Nacimiento
              </li>
              <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                <i class="fas fa-check-circle" style="color: #fdfd0a; position: absolute; left: 0;"></i>
                4 fotografias tamaño 3x3 cm con fondo color perla (traje formal)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Mapa y Redes Sociales -->
    <section class="contact-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 text-center">
            <div class="contact-divider"></div>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.123456789012!2d-67.1082046!3d-17.9591347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0a679d6e793%3A0x4ea39a9506e08039!2sInstituto%20T%C3%A9cnico%20Jes%C3%BAs%20Mar%C3%ADa!5e0!3m2!1ses!2sbo!4v1234567890123!5m2!1ses!2sbo"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                class="w-100">
              </iframe>
            </div>
            <div class="social-links py-4">
              <a href="https://www.facebook.com/IntJem/" target="_blank" class="mx-2"><i class="fab fa-facebook"></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FInT_JesusMaria" target="_blank" class="mx-2"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/intjem.bo/" target="_blank" class="mx-2"><i class="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UC1WdF2amZjCVAlOlbUbhcMg" target="_blank" class="mx-2"><i class="fab fa-youtube"></i></a>
              <a href="mailto:intjemoruro@gmail.com" class="mx-2"><i class="fas fa-envelope"></i></a>
              <a href="https://www.google.com.bo/maps/place/Instituto+T%C3%A9cnico+Jes%C3%BAs+Mar%C3%ADa/@-17.9608343,-67.1094465,21z/data=!4m6!3m5!1s0x93e2b0a679d6e793:0x4ea39a9506e08039!8m2!3d-17.9591347!4d-67.1082046!16s%2Fg%2F11bzyxyfy8?hl=es&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="mx-2"><i class="fas fa-map-marker-alt"></i></a>
              <a href="https://www.tiktok.com/@intjem_oruro?_t=ZM-8vW1YvMGb3f&_r=1" target="_blank" class="mx-2"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PreinscripcionView',
  data() {
    return {
      formData: {
        apellidos: '',
        nombres: '',
        ci: '',
        telefono: '',
        correo: '',
        carrera: '',
        turno: ''
      }
    }
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
    },
    enviarFormulario() {
      const mensaje = `Llenado del Formulario de Preinscripción INTJEM Gestión 2026, Mis datos son los siguientes:%0A%0A
      1. Apellidos: ${this.formData.apellidos}%0A
      2. Nombres: ${this.formData.nombres}%0A
      3. Cédula de Identidad: ${this.formData.ci}%0A
      4. Teléfono: ${this.formData.telefono}%0A
      5. Correo: ${this.formData.correo}%0A
      6. La Carrera que Elegí es: ${this.formData.carrera}%0A
      7. Para el Turno: ${this.formData.turno}`;
      
      const numero = "59168367213"; // Número del administrador
      window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
    }
  }
}
</script>

<style scoped>
html, body {
  background: linear-gradient(45deg, #1E90FF, #800080);
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
  object-fit: cover;
}

body {
  background: linear-gradient(to right, #4b5dfa, #6701a7);
  color: white;
  min-height: 100vh;
}

.container-box {
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 40px auto;
  max-width: 1200px;
}

.form-box {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
  flex: 1;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.form-box h2, .info-box h3 {
  margin-bottom: 20px;
}

.form-control, .form-select {
  margin-bottom: 15px;
}

.btn-enviar {
  width: 50%;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(29, 193, 0);
}

@media (max-width: 768px) {
  .hero-container {
    height: auto;
    object-fit: cover;
  }
}
</style>