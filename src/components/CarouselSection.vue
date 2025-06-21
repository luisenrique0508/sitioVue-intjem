<template>
  <section class="carousel-section">
    <div class="container">
      <h2 class="section-title">Galería del Instituto</h2>
      <p class="section-subtitle">Descubre nuestras instalaciones y actividades</p>
      
      <!-- Carrusel Mostrador Giratorio -->
      <div class="carousel-showcase-container">
        <div class="carousel-showcase-stage" ref="carouselStage">
          <div 
            v-for="(image, index) in images" 
            :key="index"
            class="carousel-showcase-item"
            :style="getShowcaseItemStyle(index)"
            @click="selectImage(index)"
          >
            <div class="image-container">
              <img :src="image.src" :alt="image.alt" />
              <div class="image-info">
                <h3>{{ image.title }}</h3>
                <p>{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Controles de navegación -->
        <button class="carousel-nav prev" @click="rotateLeft">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-nav next" @click="rotateRight">
          <i class="fas fa-chevron-right"></i>
        </button>
        
        <!-- Indicadores de posición -->
        <div class="carousel-dots">
          <span 
            v-for="(image, index) in images" 
            :key="index"
            class="dot"
            :class="{ active: currentIndex === index }"
            @click="selectImage(index)"
          ></span>
        </div>
      </div>
      
      <!-- Miniaturas -->
      <div class="thumbnails-section">
        <h3>Selecciona una imagen</h3>
        <div class="thumbnails-grid">
          <div 
            v-for="(image, index) in images" 
            :key="index"
            class="thumbnail-item"
            :class="{ active: currentIndex === index }"
            @click="selectImage(index)"
          >
            <img :src="image.src" :alt="image.alt" />
            <div class="thumbnail-overlay">
              <i class="fas fa-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CarouselSection',
  data() {
    return {
      currentIndex: 0,
      rotationAngle: 0,
      autoPlayInterval: null,
      images: [
        {
          src: require('@/assets/01.jpg'),
          alt: 'Instalaciones del Instituto',
          title: 'Instalaciones Modernas',
          description: 'Espacios equipados para el aprendizaje'
        },
        {
          src: require('@/assets/02.jpg'),
          alt: 'Laboratorio de Sistemas',
          title: 'Laboratorio de Sistemas',
          description: 'Tecnología de vanguardia'
        },
        {
          src: require('@/assets/03.jpg'),
          alt: 'Área de Telecomunicaciones',
          title: 'Telecomunicaciones',
          description: 'Equipos especializados'
        },
        {
          src: require('@/assets/04.jpg'),
          alt: 'Secretariado Ejecutivo',
          title: 'Secretariado Ejecutivo',
          description: 'Formación profesional integral'
        },
        {
          src: require('@/assets/05.jpg'),
          alt: 'Actividades Estudiantiles',
          title: 'Actividades Estudiantiles',
          description: 'Desarrollo integral'
        },
        {
          src: require('@/assets/06.jpg'),
          alt: 'Biblioteca',
          title: 'Biblioteca',
          description: 'Centro de recursos educativos'
        },
        {
          src: require('@/assets/07.jpg'),
          alt: 'Área de Recreación',
          title: 'Área de Recreación',
          description: 'Espacios para el esparcimiento'
        },
        {
          src: require('@/assets/11.jpg'),
          alt: 'Auditorio',
          title: 'Auditorio',
          description: 'Eventos y presentaciones'
        },
        {
          src: require('@/assets/13.jpg'),
          alt: 'Patio Central',
          title: 'Patio Central',
          description: 'Área de convivencia'
        },
        {
          src: require('@/assets/14.jpg'),
          alt: 'Entrada Principal',
          title: 'Entrada Principal',
          description: 'Bienvenidos al Instituto'
        },
        {
          src: require('@/assets/15.jpg'),
          alt: 'Vista Aérea',
          title: 'Vista Aérea',
          description: 'Perspectiva general del campus'
        }
      ]
    }
  },
  mounted() {
    this.startAutoRotation();
    this.setupKeyboardNavigation();
  },
  beforeUnmount() {
    this.stopAutoRotation();
    this.removeKeyboardNavigation();
  },
  methods: {
    getShowcaseItemStyle(index) {
      const totalImages = this.images.length;
      const angleStep = 360 / totalImages;
      const itemAngle = angleStep * index;
      const radius = 300; // Radio más pequeño para mostrador compacto
      
      // Calcular posición en círculo
      const x = Math.sin((itemAngle + this.rotationAngle) * Math.PI / 180) * radius;
      const z = Math.cos((itemAngle + this.rotationAngle) * Math.PI / 180) * radius;
      
      // Calcular opacidad y escala basada en la distancia Z
      const opacity = Math.max(0.4, Math.min(1, (z + radius) / (2 * radius)));
      const scale = 0.7 + (opacity * 0.3);
      
      // Calcular rotación Y para que las imágenes miren hacia el centro
      const rotationY = -(itemAngle + this.rotationAngle);
      
      return {
        transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotationY}deg) scale(${scale})`,
        opacity: opacity,
        zIndex: Math.round(z + radius)
      };
    },
    
    selectImage(index) {
      this.currentIndex = index;
      const totalImages = this.images.length;
      const angleStep = 360 / totalImages;
      const targetAngle = -angleStep * index;
      
      this.rotationAngle = targetAngle;
      this.stopAutoRotation();
      this.startAutoRotation();
    },
    
    rotateLeft() {
      const totalImages = this.images.length;
      const angleStep = 360 / totalImages;
      this.rotationAngle += angleStep;
      this.currentIndex = (this.currentIndex - 1 + totalImages) % totalImages;
      this.stopAutoRotation();
      this.startAutoRotation();
    },
    
    rotateRight() {
      const totalImages = this.images.length;
      const angleStep = 360 / totalImages;
      this.rotationAngle -= angleStep;
      this.currentIndex = (this.currentIndex + 1) % totalImages;
      this.stopAutoRotation();
      this.startAutoRotation();
    },
    
    startAutoRotation() {
      this.stopAutoRotation();
      this.autoPlayInterval = setInterval(() => {
        this.rotationAngle -= 0.3; // Rotación más lenta
        if (this.rotationAngle <= -360) {
          this.rotationAngle = 0;
        }
        
        // Actualizar índice actual basado en la rotación
        const totalImages = this.images.length;
        const angleStep = 360 / totalImages;
        const normalizedAngle = ((-this.rotationAngle % 360) + 360) % 360;
        this.currentIndex = Math.round(normalizedAngle / angleStep) % totalImages;
      }, 50);
    },
    
    stopAutoRotation() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    },
    
    setupKeyboardNavigation() {
      this.keyboardHandler = (e) => {
        if (e.key === 'ArrowLeft') {
          this.rotateLeft();
        } else if (e.key === 'ArrowRight') {
          this.rotateRight();
        }
      };
      document.addEventListener('keydown', this.keyboardHandler);
    },
    
    removeKeyboardNavigation() {
      if (this.keyboardHandler) {
        document.removeEventListener('keydown', this.keyboardHandler);
      }
    }
  }
}
</script>

<style scoped>
.carousel-section {
  padding: 3rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 80vh;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 2px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.carousel-showcase-container {
  position: relative;
  height: 500px; /* Altura más pequeña */
  margin: 2rem auto;
  perspective: 1500px;
  perspective-origin: 50% 50%;
  overflow: hidden;
  max-width: 800px; /* Contenedor más compacto */
}

.carousel-showcase-stage {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateX(15deg) rotateY(0deg); /* Menos inclinación */
  transition: transform 0.1s linear;
}

.carousel-showcase-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px; /* Imágenes más pequeñas */
  height: 200px;
  margin: -100px 0 0 -140px;
  cursor: pointer;
  transition: all 0.1s linear;
  transform-style: preserve-3d;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 3px solid rgba(255, 255, 255, 0.8);
}

.carousel-showcase-item:hover .image-container {
  transform: scale(1.08);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
  border-color: #2575fc;
}

.carousel-showcase-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: white;
  transition: transform 0.3s ease;
}

.image-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  padding: 1.5rem 1rem 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.carousel-showcase-item:hover .image-info {
  transform: translateY(0);
}

.image-info h3 {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.image-info p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Controles de navegación */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.carousel-nav:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.carousel-nav.prev {
  left: 20px;
}

.carousel-nav.next {
  right: 20px;
}

.carousel-nav i {
  font-size: 1.2rem;
  color: #2c3e50;
}

/* Indicadores de posición */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #2575fc;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(37, 117, 252, 0.6);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

/* Sección de miniaturas */
.thumbnails-section {
  margin-top: 3rem;
  text-align: center;
}

.thumbnails-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.thumbnail-item {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.thumbnail-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.thumbnail-item.active {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(37, 117, 252, 0.4);
  border: 3px solid #2575fc;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail-item:hover img {
  transform: scale(1.1);
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.thumbnail-item:hover .thumbnail-overlay {
  opacity: 1;
}

.thumbnail-overlay i {
  color: white;
  font-size: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-showcase-container {
    height: 400px;
    max-width: 600px;
  }
  
  .carousel-showcase-item {
    width: 220px;
    height: 160px;
    margin: -80px 0 0 -110px;
  }
  
  .carousel-showcase-stage {
    transform: rotateX(10deg) rotateY(0deg);
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .thumbnails-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
  }
  
  .carousel-nav {
    width: 45px;
    height: 45px;
  }
  
  .carousel-nav.prev {
    left: 15px;
  }
  
  .carousel-nav.next {
    right: 15px;
  }
}

@media (max-width: 480px) {
  .carousel-showcase-container {
    height: 350px;
    max-width: 500px;
  }
  
  .carousel-showcase-item {
    width: 180px;
    height: 130px;
    margin: -65px 0 0 -90px;
  }
  
  .carousel-showcase-stage {
    transform: rotateX(8deg) rotateY(0deg);
  }
  
  .thumbnails-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 8px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
  }
  
  .carousel-nav i {
    font-size: 1rem;
  }
}
</style>