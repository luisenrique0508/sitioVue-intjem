<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-section"></div>
      <div id="tsparticles"></div>
    </div>

    <!-- Formulario sección -->
    <section class="text-white py-5">
      <div class="container">
        <h2 class="text-center mb-4">Contáctanos</h2>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="p-4 rounded shadow" style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(5px);">
              <h4 class="mb-3 text-center">Envíanos un mensaje</h4>
              <form id="contactForm" @submit.prevent="submitForm" novalidate>
                <div class="mb-3">
                  <label class="form-label">Apellidos y Nombres</label>
                  <input type="text" class="form-control" v-model="formData.nombre" :class="{'is-invalid': errors.nombre}" required>
                  <div class="invalid-feedback text-warning">Por favor ingrese su nombre completo</div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Teléfono Celular (WhatsApp)</label>
                  <input type="tel" class="form-control" v-model="formData.telefono" :class="{'is-invalid': errors.telefono}" required pattern="^[0-9]{7,8}$">
                  <div class="invalid-feedback text-warning">Ingrese un número de teléfono válido</div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input type="email" class="form-control" v-model="formData.correo" :class="{'is-invalid': errors.correo}" required>
                  <div class="invalid-feedback text-warning">Ingrese un correo electrónico válido</div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Asunto</label>
                  <input type="text" class="form-control" v-model="formData.asunto" :class="{'is-invalid': errors.asunto}" required>
                  <div class="invalid-feedback text-warning">Por favor ingrese el asunto</div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Mensaje</label>
                  <textarea class="form-control" v-model="formData.mensaje" :class="{'is-invalid': errors.mensaje}" rows="3" required></textarea>
                  <div class="invalid-feedback text-warning">Por favor ingrese su mensaje</div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-success mt-3 d-flex align-items-center justify-content-center mx-auto">
                    <i class="bi bi-send-fill me-2" style="color: rgb(134, 222, 254);"></i>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa y Redes Sociales -->
    <ContactoSection />
  </div>
</template>

<script>
import ContactoSection from '@/components/ContactoSection.vue'

export default {
  name: 'ContactosView',
  components: {
    ContactoSection
  },
  data() {
    return {
      formData: {
        nombre: '',
        telefono: '',
        correo: '',
        asunto: '',
        mensaje: ''
      },
      errors: {
        nombre: false,
        telefono: false,
        correo: false,
        asunto: false,
        mensaje: false
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
    submitForm() {
      // Reset errors
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = false;
      });
      
      // Validate form
      let isValid = true;
      
      if (!this.formData.nombre) {
        this.errors.nombre = true;
        isValid = false;
      }
      
      if (!this.formData.telefono || !/^[0-9]{7,8}$/.test(this.formData.telefono)) {
        this.errors.telefono = true;
        isValid = false;
      }
      
      if (!this.formData.correo || !this.validateEmail(this.formData.correo)) {
        this.errors.correo = true;
        isValid = false;
      }
      
      if (!this.formData.asunto) {
        this.errors.asunto = true;
        isValid = false;
      }
      
      if (!this.formData.mensaje) {
        this.errors.mensaje = true;
        isValid = false;
      }
      
      if (isValid) {
        alert('Formulario enviado correctamente!');
        this.formData = {
          nombre: '',
          telefono: '',
          correo: '',
          asunto: '',
          mensaje: ''
        };
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
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
  width: 80%;
  height: 65%;
  background-color: transparent;
  z-index: 2;
}

.hero-section {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/w8.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 0, 0);
}

@media (max-width: 768px) {
  .hero-section {
    height: 40vh;
  }
  
  #tsparticles {
    height: 40vh;
  }
  
  .hero-container {
    height: 40vh;
    background: linear-gradient(
      135deg,
      rgba(106, 17, 203, 0.9) 0%,
      rgba(37, 117, 252, 0.9) 100%
    ) !important;
    backdrop-filter: blur(5px);
    padding: 0;
    margin-bottom: 1rem;
  }
}
</style>