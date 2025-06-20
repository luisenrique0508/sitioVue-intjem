<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-container">
      <div class="hero-section">
        <video autoplay muted loop playsinline>
          <source src="@/assets/Telecom.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div id="tsparticles"></div>
    </div>

    <!-- Telecomunicaciones -->
    <section class="container mission-vision-container text-center">
      <div class="row justify-content-center mb-4">
        <div class="col-12 col-md-8">
          <h2 class="section-title mb-3">Telecomunicaciones</h2>
          <p class="intro-text">
            Formar profesionales técnicos capaces de instalar, configurar y mantener equipos y sistemas de telecomunicaciones, con habilidades en redes, radiofrecuencia, telefonía y transmisión de datos para contribuir al desarrollo tecnológico de la sociedad.
          </p>
          <p class="text-gray-600">
            La carrera está constituida por Resolución Ministerial 354/15
          </p>
        </div>
      </div>
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <div class="img-container">
            <img src="../assets/lenprogra.jpg" alt="Sistemas Informáticos" class="img-fluid rounded" />
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">Acerca de la Carrera</h2>
          <p class="lead">
            Formar profesionales que promuevan el cuidado de la Madre Tierra y el Cosmos, conociendo el desarrollo y administración de sistemas informáticos, para contribuir al desarrollo de la sociedad, con habiliades en la operacion de el desarrollo de software, hardware, redes, diseño web, etc.
          </p>
          <div class="d-flex align-items-center mb-3">
            <span class="badge bg-primary me-2">Duración: 3 años</span>
            <span class="badge bg-success">Título: Técnico Superior</span>
          </div>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <!-- Primera Fila -->
        <div class="col-12 col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-container me-3">
                  <i class="fas fa-code fa-2x" style="color: #f7df1e;"></i>
                </div>
                <h3 class="card-title mb-0">Programación</h3>
              </div>
              <p class="card-text text-muted">
                Programación y Desarrolla aplicaiones de red,sitemas de telecomunicaciones, y sistemas de control. 
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-container me-3">
                  <i class="fas fa-phone-alt fa-2x" style="color: #218838;"></i>
                </div>
                <h3 class="card-title mb-0">Telefonía y Comunicaciones</h3>
              </div>
              <p class="card-text text-muted">
                Configuración y mantenimiento de sistemas telefónicos, redes de voz y datos, tecnologías VoIP y comunicaciones móviles.
              </p>
            </div>
          </div>
        </div>

        <!-- Segunda Fila -->
        <div class="col-12 col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-container me-3">
                  <i class="fas fa-network-wired fa-2x"></i>
                </div>
                <h3 class="card-title mb-0">Redes de Telecomunicaciones</h3>
              </div>
              <p class="card-text text-muted">
                Diseño, implementación y mantenimiento de redes de telecomunicaciones, fibra óptica y sistemas de transmisión digital.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-container me-3">
                  <i class="fas fa-satellite-dish fa-2x" style="color: #000000;"></i>
                </div>
                <h3 class="card-title mb-0">Sistemas Satelitales</h3>
              </div>
              <p class="card-text text-muted">
                Instalación y mantenimiento de sistemas de comunicación satelital, antenas parabólicas y equipos de recepción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Asignaturas -->
    <div class="container mx-auto p-4">
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <div class="w-full md:w-2/3">
          <div class="table-container">
            <div class="table-buttons">
              <button class="table-button" :class="{ active: activeTable === 'firstYearTable' }" @click="showTable('firstYearTable')">
                <i class="fas fa-satellite-dish"></i>
                Primer Año
              </button>
              <button class="table-button" :class="{ active: activeTable === 'secondYearTable' }" @click="showTable('secondYearTable')">
                <i class="fas fa-broadcast-tower"></i>
                Segundo Año
              </button>
              <button class="table-button" :class="{ active: activeTable === 'thirdYearTable' }" @click="showTable('thirdYearTable')">
                <i class="fas fa-network-wired"></i>
                Tercer Año
              </button>
            </div>

            <table class="schedule-table" :class="{ active: activeTable === 'firstYearTable' }" id="firstYearTable">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>CÓDIGO</th>
                  <th>SÍNTESIS DEL PLAN DE ESTUDIOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td class="code">MAT-101</td>
                  <td class="subject">MATEMÁTICA</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="code">TSO-102</td>
                  <td class="subject">Fundamentos de Electricidad y Electrónica</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="code">FEE-103</td>
                  <td class="subject">FUNDAMENTOS DE ELECTRICIDAD Y ELECTRÓNICA</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td class="code">INA-104</td>
                  <td class="subject">Informática Aplicada</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="code">ING-105</td>
                  <td class="subject">Inglés Técnico I</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td class="code">THW-106</td>
                  <td class="subject">Taller de Hardware I</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td class="code">TER-107</td>
                  <td class="subject">Tecnología de Redes I</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td class="code">TEL-108</td>
                  <td class="subject">Telecomunicaciones I</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td class="code">PRG-109</td>
                  <td class="subject">Programación</td>
                </tr>
              </tbody>
            </table>

            <table class="schedule-table" :class="{ active: activeTable === 'secondYearTable' }" id="secondYearTable">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>CÓDIGO</th>
                  <th>SÍNTESIS DEL PLAN DE ESTUDIOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td class="code">TLM-201</td>
                  <td class="subject">TELEMÁTICA</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="code">TEL-202</td>
                  <td class="subject">TELECOMUNICACIONES II</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="code">TSO-203</td>
                  <td class="subject">TALLER DE SISTEMAS OPERATIVOS II</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td class="code">HDW-204</td>
                  <td class="subject">HARDWARE II</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="code">TER-205</td>
                  <td class="subject">TECNOLOGÍA DE REDES II</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td class="code">RCO-206</td>
                  <td class="subject">REDES CONVERGENTES II</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td class="code">ING-207</td>
                  <td class="subject">INGLÉS TÉCNICO II</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td class="code">TMO-208</td>
                  <td class="subject">TELECOMUNICACIONES MÓVILES</td>
                </tr>
              </tbody>
            </table>

            <table class="schedule-table" :class="{ active: activeTable === 'thirdYearTable' }" id="thirdYearTable">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>CÓDIGO</th>
                  <th>SÍNTESIS DEL PLAN DE ESTUDIOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td class="code">STE-301</td>
                  <td class="subject">SISTEMAS DE TELECOMUNICACIONES</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="code">TRE-302</td>
                  <td class="subject">TECNOLOGÍAS DE REDES III</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="code">RCO-303</td>
                  <td class="subject">REDES CONVERGENTES II</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td class="code">TDG-304</td>
                  <td class="subject">TALLER DE GRADO</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="code">RET-305</td>
                  <td class="subject">REGULACIONES EN LAS TELECOMUNICACIONES</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td class="code">TEL-306</td>
                  <td class="subject">TELECOMUNICACIONES III</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td class="code">SIR-307</td>
                  <td class="subject">SEGURIDAD INDUSTRIAL DE REDES</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td class="code">TVI-308</td>
                  <td class="subject">TECNOLOGIA DE VIDEO VIGILANCIA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-8">
        <a href="https://intjem.edu.bo/pdf/Contenidos_Anuales_Telecomunicaciones.pdf" 
           class="btn btn-primary" 
           target="_blank">
          <i class="fas fa-download me-2"></i>
          Descargar en PDF
        </a>
      </div>
      <div class="text-center mt-4">
        <router-link to="/preinscripcion" class="btn btn-primary btn-lg">
          <i class="fas fa-user-plus me-2"></i> Pre-inscríbete Ahora
        </router-link>
      </div>
    </div>

    <!-- Convenios -->
    <ConveniosSection />
  </div>
</template>

<script>
import ConveniosSection from '@/components/ConveniosSection.vue'

export default {
  name: 'TelecomunicacionesView',
  components: {
    ConveniosSection
  },
  data() {
    return {
      activeTable: 'firstYearTable'
    }
  },
  methods: {
    showTable(tableId) {
      this.activeTable = tableId;
    }
  }
}
</script>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

@media (max-width: 768px) {
  .hero-container {
    height: auto;
  }
  .hero-section {
    height: auto;
    margin-top: 50px;
  }
  .hero-section video {
    height: auto;
  }
}

@media (min-width: 992px) and (max-width: 1440px) {
  .hero-section {
    height: auto;
  }
  .hero-container {
    height: auto;
    padding-top: 3.7rem;
  }
  .hero-section video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 1440px) and (max-width: 2600px) {
  .hero-section {
    width: 100%;
    height: auto;
  }
  .hero-container {
    height: auto;
    padding-top: 1rem;
  }
  .hero-section video {
    object-fit: cover;
    height: auto;
  }
}

.hero-section video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.icon-container {
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6a11cb;
  margin-right: 20px;
  margin-left: 20px;
  position: relative;
}

.card {
  border: 2px solid rgb(232, 0, 0);
  background: linear-gradient(135deg, #2c81f7, #765df3);
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
}

.card-text {
  font-weight: bold;
  color: #ffffff;
}

/* Estilos para las tablas y botones */
.table-container {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem 0;
}

.table-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.table-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: #e5e7eb;
  color: #4b5563;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.table-button.active {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.table-button i {
  font-size: 1.2rem;
}

.schedule-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;
  display: none;
}

.schedule-table.active {
  display: table;
}

.schedule-table th {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
}

.schedule-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.schedule-table tr:hover {
  background-color: #f8f9fa;
}

.schedule-table tr:last-child td {
  border-bottom: none;
}

.schedule-table .code {
  font-weight: 600;
  color: #6a11cb;
}

.schedule-table .subject {
  text-align: left;
}

@media (max-width: 768px) {
  .table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .schedule-table {
    width: 100%;
    font-size: 0.9rem;
  }
  .table-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .table-button {
    width: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>