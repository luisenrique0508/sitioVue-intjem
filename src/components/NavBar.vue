<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="@/assets/noticia04.jpg" alt="Logo del Instituto" class="img-fluid me-2" />
          <i class="fas fa-school me-2"></i>
          <span>INICIO</span>
        </router-link>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#"
                id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-users me-2"></i>
                QUIENES SOMOS?
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/plantelDocente" @click="closeNavbar">
                    <i class="fas fa-users me-2"></i> Plantel Docente <br />
                    Plantel Administrativo
                  </router-link>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#" @click="closeNavbar">
                    <i class="fas fa-church me-2"></i>
                    Congregación
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user-graduate me-2"></i>
                ADMISION
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/admision" @click="closeNavbar">
                    <i class="fas fa-question-circle me-2"></i> Preguntas Frecuentes
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-graduation-cap me-2"></i>
                NUESTRAS CARRERAS
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/sistemas" @click="closeNavbar">
                    <i class="fas fa-laptop-code me-2"></i> Sistemas Informáticos
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/secre" @click="closeNavbar">
                    <i class="fas fa-chart-column me-2"></i> Secretariado Ejecutivo
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/telecom" @click="closeNavbar">
                    <i class="fas fa-satellite-dish me-2"></i> Telecomunicaciones
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active d-flex align-items-center" to="/platvirtu" @click="closeNavbar">
                <i class="fas fa-laptop-house me-2"></i>
                Plataforma Virtual
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-envelope me-2"></i>
                CONTACTO
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/contactos" @click="closeNavbar">
                    <i class="fas fa-phone me-2"></i> Contactanos
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/preinscripci" @click="closeNavbar">
                    <i class="fas fa-calendar-alt me-2"></i> Pre-inscripción
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    closeNavbar() {
      // Cerrar el navbar en dispositivos móviles
      const navbarCollapseEl = document.querySelector(".navbar-collapse");
      if (navbarCollapseEl && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapseEl);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }

      // Cerrar todos los dropdowns abiertos
      const dropdowns = document.querySelectorAll('.dropdown-menu.show');
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
      });

      // Remover la clase 'show' de los botones dropdown
      const dropdownToggles = document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]');
      dropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
      });

      // Remover la clase 'show' del navbar-collapse
      if (navbarCollapseEl) {
        navbarCollapseEl.classList.remove('show');
      }

      // Remover la clase 'collapsed' del botón toggler
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) {
        toggler.classList.add('collapsed');
        toggler.setAttribute('aria-expanded', 'false');
      }
    }
  },
  mounted() {
    // Script para el efecto del navbar
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      const heroSection = document.querySelector(".hero-container");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        if (window.scrollY > heroHeight) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    });

    // Inicializar Bootstrap
    if (typeof window !== 'undefined' && window.bootstrap) {
      // Cerrar navbar al hacer clic en cualquier enlace (excepto dropdown toggles)
      document.addEventListener('click', (event) => {
        const target = event.target;
        
        // Si el clic es en un enlace de navegación o dropdown item
        if (target.closest('.nav-link') || target.closest('.dropdown-item')) {
          // No cerrar si es un dropdown toggle
          if (!target.closest('.dropdown-toggle')) {
            this.closeNavbar();
          }
        }
      });

      // Cerrar navbar al hacer clic fuera del navbar en responsive
      document.addEventListener('click', (event) => {
        const navbar = document.querySelector('.navbar');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (window.innerWidth <= 768 && navbarCollapse && navbarCollapse.classList.contains('show')) {
          if (!navbar.contains(event.target)) {
            this.closeNavbar();
          }
        }
      });

      // Cerrar navbar al cambiar el tamaño de la ventana
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          const navbarCollapseEl = document.querySelector(".navbar-collapse");
          if (navbarCollapseEl && window.bootstrap) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapseEl);
            if (bsCollapse && navbarCollapseEl.classList.contains('show')) {
              bsCollapse.hide();
            }
          }
        }
      });

      // Agregar evento específico para el botón toggler
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) {
        toggler.addEventListener('click', () => {
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Si está abierto, cerrarlo
            this.closeNavbar();
          }
        });
      }

      // Agregar eventos a todos los enlaces de navegación
      document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item').forEach(link => {
        link.addEventListener('click', () => {
          // Pequeño delay para asegurar que la navegación ocurra antes del cierre
          setTimeout(() => {
            this.closeNavbar();
          }, 100);
        });
      });
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: rgba(96, 96, 96, 0.4) !important;
  backdrop-filter: blur(10px);
  padding: 0.5rem 0;
  min-height: 65px;
}

.navbar-brand {
  padding: 0.3rem 0.3rem;
  font-size: 1.1rem;
}

.navbar-brand img {
  height: 30px;
  width: auto;
}

.navbar-brand i {
  font-size: 1.1rem; /* Aumentado de 0.85rem */
}

.navbar-brand span {
  font-size: 1.1rem; /* Aumentado de 0.85rem */
}

.nav-link {
  padding: 0.6rem 0.5rem !important; /* Duplicado de 0.3rem a 0.6rem */
  font-size: 1rem; /* Aumentado de 0.75rem */
  margin: 0 0.2rem; /* Espaciado adicional entre elementos */
}

.nav-link i {
  font-size: 1rem; /* Aumentado de 0.8rem */
  margin-right: 4px; /* Aumentado de 2px */
}

.dropdown-menu {
  min-width: 200px; /* Aumentado de 160px */
  backdrop-filter: blur(5px);
  border: 1px solid rgba(180, 176, 176, 0.45);
  background-color: rgba(255, 255, 255, 0.5) !important;
  padding: 0.4rem 0; /* Duplicado de 0.2rem a 0.4rem */
  margin-top: 0.2rem;
}

.dropdown-item {
  color: rgb(0, 0, 0) !important;
  padding: 0.4rem 0.6rem; /* Duplicado de 0.2rem/0.3rem a 0.4rem/0.6rem */
  font-size: 1rem; /* Aumentado de 0.75rem */
}

.dropdown-item i {
  margin-right: 6px; /* Aumentado de 3px */
  font-size: 1rem; /* Aumentado de 0.75rem */
}

.navbar.scrolled {
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.9) 0%, rgba(37, 117, 252, 0.9) 100%) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.3rem 0;
    min-height: 50px;
  }

  .navbar-brand {
    padding: 0.3rem 0.3rem;
    font-size: 1rem;
  }

  .navbar-brand img {
    height: 25px;
  }

  .nav-link {
    padding: 0.5rem 0.4rem !important;
    font-size: 0.95rem;
  }

  .navbar-collapse {
    background: rgba(157, 156, 156, 0.533);
    backdrop-filter: blur(5px);
    padding: 0.5rem;
    border-radius: 8px;
    margin-top: 0.4rem;
  }

  .dropdown-menu {
    min-width: 180px;
    padding: 0.3rem 0;
  }

  .dropdown-item {
    padding: 0.3rem 0.5rem;
    font-size: 0.95rem;
  }
}

/* Mejoras para el responsive del toggler */
.navbar-toggler {
  padding: 0.4rem 0.6rem;
  font-size: 1.1rem;
}

.navbar-toggler-icon {
  width: 1.2em;
  height: 1.2em;
}
</style>