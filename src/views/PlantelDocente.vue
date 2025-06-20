<template>
  <div class="container py-5 mt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-5">Nuestro Equipo</h1>

        <!-- Autoridades -->
        <h2 class="mb-4">Autoridades</h2>
        <div class="row mb-5">
          <div class="col-md-4" v-for="autoridad in autoridades" :key="autoridad.id">
            <div class="staff-card">
              <div class="staff-image">
                <img :src="autoridad.foto" :alt="autoridad.nombre" class="img-fluid">
              </div>
              <div class="staff-info">
                <h4>{{ autoridad.nombre }}</h4>
                <p class="staff-position">{{ autoridad.cargo }}</p>
                <p class="staff-description">{{ autoridad.descripcion }}</p>
                <div class="staff-contact">
                  <a :href="'mailto:' + autoridad.email" class="me-2"><i class="fas fa-envelope"></i></a>
                  <a v-if="autoridad.linkedin" :href="autoridad.linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Docentes -->
        <h2 class="mb-4">Plantel Docente</h2>

        <!-- Filtro de carreras -->
        <div class="mb-4">
          <div class="btn-group" role="group">
            <button 
              type="button" 
              class="btn" 
              :class="carreraSeleccionada === '' ? 'btn-primary' : 'btn-outline-primary'" 
              @click="carreraSeleccionada = ''"
            >
              Todos
            </button>
            <button 
              type="button" 
              class="btn" 
              :class="carreraSeleccionada === 'sistemas' ? 'btn-primary' : 'btn-outline-primary'" 
              @click="carreraSeleccionada = 'sistemas'"
            >
              Sistemas Informáticos
            </button>
            <button 
              type="button" 
              class="btn" 
              :class="carreraSeleccionada === 'secretariado' ? 'btn-primary' : 'btn-outline-primary'" 
              @click="carreraSeleccionada = 'secretariado'"
            >
              Secretariado Ejecutivo
            </button>
            <button 
              type="button" 
              class="btn" 
              :class="carreraSeleccionada === 'telecomunicaciones' ? 'btn-primary' : 'btn-outline-primary'" 
              @click="carreraSeleccionada = 'telecomunicaciones'"
            >
              Telecomunicaciones
            </button>
          </div>
        </div>

        <div class="row">
          <div 
            class="col-md-3 col-sm-6 mb-4" 
            v-for="docente in docentesFiltrados" 
            :key="docente.id"
          >
            <div class="staff-card-small">
              <div class="staff-image-small">
                <img :src="docente.foto" :alt="docente.nombre" class="img-fluid">
              </div>
              <div class="staff-info-small">
                <h5>{{ docente.nombre }}</h5>
                <p class="staff-subject">{{ docente.materia }}</p>
                <p class="staff-department">{{ docente.carrera }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Administrativo -->
        <h2 class="mt-5 mb-4">Personal Administrativo</h2>
        <div class="row">
          <div 
            class="col-md-3 col-sm-6 mb-4" 
            v-for="admin in personalAdministrativo" 
            :key="admin.id"
          >
            <div class="staff-card-small">
              <div class="staff-image-small">
                <img :src="admin.foto" :alt="admin.nombre" class="img-fluid">
              </div>
              <div class="staff-info-small">
                <h5>{{ admin.nombre }}</h5>
                <p class="staff-position">{{ admin.cargo }}</p>
                <p class="staff-department">{{ admin.departamento }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantelDocenteView',
  data() {
    return {
      carreraSeleccionada: '',
      autoridades: [
        {
          id: 1,
          nombre: 'Ing. Alejandro Guzmán Molina',
          cargo: 'Director Académico',
          descripcion: 'Ingeniero de Sistemas con más de 15 años de experiencia en educación superior y gestión académica.',
          email: 'direccion@intjem.edu.bo',
          foto: '/img/docentehom.jpg',
          linkedin: 'https://www.linkedin.com/'
        },
        {
          id: 2,
          nombre: 'Lic. María Fernanda Rojas',
          cargo: 'Directora Administrativa',
          descripcion: 'Licenciada en Administración de Empresas con especialidad en gestión educativa.',
          email: 'admin@intjem.edu.bo',
          foto: '/img/docente-mujer.jpg',
          linkedin: 'https://www.linkedin.com/'
        },
        {
          id: 3,
          nombre: 'Ing. Carlos Martínez Gómez',
          cargo: 'Coordinador de Investigación',
          descripcion: 'Doctor en Ciencias de la Educación con enfoque en innovación tecnológica educativa.',
          email: 'investigacion@intjem.edu.bo',
          foto: '/img/docente-hombre2.jpg',
          linkedin: 'https://www.linkedin.com/'
        }
      ],
      docentes: [
        {
          id: 1,
          nombre: 'Ing. Roberto Mendoza',
          materia: 'Programación I y II',
          carrera: 'Sistemas Informáticos',
          foto: '/img/docente1.jpg'
        },
        {
          id: 2,
          nombre: 'Lic. Ana Belén Quiroga',
          materia: 'Base de Datos',
          carrera: 'Sistemas Informáticos',
          foto: '/img/docente2.jpg'
        },
        {
          id: 3,
          nombre: 'Ing. Laura Velasco',
          materia: 'Redes de Computadoras',
          carrera: 'Sistemas Informáticos',
          foto: '/img/docente3.jpg'
        },
        {
          id: 4,
          nombre: 'Lic. Patricia Sánchez',
          materia: 'Redacción y Comunicación',
          carrera: 'Secretariado Ejecutivo',
          foto: '/img/docente4.jpg'
        },
        {
          id: 5,
          nombre: 'Lic. Jorge Ramírez',
          materia: 'Administración Empresarial',
          carrera: 'Secretariado Ejecutivo',
          foto: '/img/docente5.jpg'
        },
        {
          id: 6,
          nombre: 'Ing. Daniela Flores',
          materia: 'Informática Aplicada',
          carrera: 'Secretariado Ejecutivo',
          foto: '/img/docente6.jpg'
        },
        {
          id: 7,
          nombre: 'Ing. Fernando Rojas',
          materia: 'Fundamentos de Telecomunicaciones',
          carrera: 'Telecomunicaciones',
          foto: '/img/docente7.jpg'
        },
        {
          id: 8,
          nombre: 'Ing. Claudia Montero',
          materia: 'Antenas y Propagación',
          carrera: 'Telecomunicaciones',
          foto: '/img/docente8.jpg'
        }
      ],
      personalAdministrativo: [
        {
          id: 1,
          nombre: 'Lic. Verónica Mendez',
          cargo: 'Secretaria Académica',
          departamento: 'Secretaría General',
          foto: '/img/admin1.jpg'
        },
        {
          id: 2,
          nombre: 'Lic. Mario Aguilar',
          cargo: 'Contador',
          departamento: 'Administración y Finanzas',
          foto: '/img/admin2.jpg'
        },
        {
          id: 3,
          nombre: 'Tec. José Luis Perez',
          cargo: 'Soporte Técnico',
          departamento: 'TI',
          foto: '/img/admin3.jpg'
        },
        {
          id: 4,
          nombre: 'Sra. Carmen Morales',
          cargo: 'Biblioteca',
          departamento: 'Recursos Educativos',
          foto: '/img/admin4.jpg'
        }
      ]
    }
  },
  computed: {
    docentesFiltrados() {
      if (this.carreraSeleccionada === '') {
        return this.docentes;
      }
      return this.docentes.filter(docente => {
        return docente.carrera.toLowerCase().includes(this.carreraSeleccionada.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>
.staff-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  margin-bottom: 30px;
}

.staff-card:hover {
  transform: translateY(-10px);
}

.staff-image {
  height: 250px;
  overflow: hidden;
}

.staff-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.staff-card:hover .staff-image img {
  transform: scale(1.1);
}

.staff-info {
  padding: 20px;
}

.staff-position {
  color: #007bff;
  font-weight: 600;
  margin-bottom: 10px;
}

.staff-contact {
  margin-top: 15px;
}

.staff-contact a {
  font-size: 18px;
  color: #495057;
  transition: color 0.3s;
}

.staff-contact a:hover {
  color: #007bff;
}

.staff-card-small {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: all 0.3s;
  height: 100%;
}

.staff-card-small:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.staff-image-small {
  height: 180px;
  overflow: hidden;
}

.staff-image-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.staff-info-small {
  padding: 15px;
}

.staff-subject {
  font-weight: 600;
  color: #007bff;
  margin-bottom: 5px;
}

.staff-department {
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
