<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="@/assets/noticia04.jpg" alt="Logo del Instituto" class="img-fluid me-1" />
          <i class="fas fa-school me-1"></i>
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
                <i class="fas fa-users me-1"></i>
                QUIENES SOMOS?
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/plantelDocente">
                    <i class="fas fa-users me-1"></i> Plantel Docente <br />
                    Plantel Administrativo
                  </router-link>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="fas fa-church me-1"></i>
                    Congregación
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user-graduate me-1"></i>
                ADMISION
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/admision">
                    <i class="fas fa-question-circle me-1"></i> Preguntas Frecuentes
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-graduation-cap me-1"></i>
                NUESTRAS CARRERAS
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/sistemas">
                    <i class="fas fa-laptop-code me-1"></i> Sistemas Informáticos
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/secre">
                    <i class="fas fa-chart-column me-1"></i> Secretariado Ejecutivo
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/telecom">
                    <i class="fas fa-satellite-dish me-1"></i> Telecomunicaciones
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active d-flex align-items-center" to="/platvirtu">
                <i class="fas fa-laptop-house me-1"></i>
                Plataforma Virtual
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-envelope me-1"></i>
                CONTACTO
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/contactos">
                    <i class="fas fa-phone me-1"></i> Contactanos
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item d-flex align-items-center" to="/preinscripci">
                    <i class="fas fa-calendar-alt me-1"></i> Pre-inscripción
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
      // Función para cerrar el menú en mobile al hacer clic en cada nav-link
      const handleNavLinkClick = (event) => {
        const href = event.currentTarget.getAttribute("href");
        if (!href || href === "#") event.preventDefault();
        if (event.currentTarget.classList.contains("dropdown-toggle") || 
            event.currentTarget.getAttribute("data-bs-toggle") === "dropdown") return;
        const navbarCollapseEl = document.querySelector(".navbar-collapse");
        const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapseEl);
        if (bsCollapse) bsCollapse.hide();
      };

      document.querySelectorAll(".nav-link:not(.dropdown-toggle)").forEach(link => {
        link.addEventListener("click", handleNavLinkClick);
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
  padding: 0.15rem 0;
}

.navbar-brand {
  padding: 0.1rem 0.2rem;
  font-size: 0.85rem;
}

.navbar-brand img {
  height: 20px;
  width: auto;
}

.navbar-brand i {
  font-size: 0.85rem;
}

.navbar-brand span {
  font-size: 0.85rem;
}

.nav-link {
  padding: 0.15rem 0.25rem !important;
  font-size: 0.75rem;
}

.nav-link i {
  font-size: 0.8rem;
  margin-right: 2px;
}

.dropdown-menu {
  min-width: 160px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(180, 176, 176, 0.45);
  background-color: rgba(255, 255, 255, 0.5) !important;
  padding: 0.2rem 0;
}

.dropdown-item {
  color: rgb(0, 0, 0) !important;
  padding: 0.15rem 0.3rem;
  font-size: 0.75rem;
}

.dropdown-item i {
  margin-right: 3px;
  font-size: 0.75rem;
}

.navbar.scrolled {
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.9) 0%, rgba(37, 117, 252, 0.9) 100%) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    padding: 0.3rem;
    border-radius: 8px;
    margin-top: 0.2rem;
  }
}
</style>