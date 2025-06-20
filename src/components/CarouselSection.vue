<template>
  <div class="container text-center">
    <h2 class="my-4">Carrusel De Imagenes de Instituto</h2>
    <div class="carousel-container">
      <div class="carousel" id="carousel" ref="carousel"></div>
      
      <!-- Miniaturas -->
      <div class="thumbnails-container">
        <div 
          v-for="(src, index) in imageSources" 
          :key="index" 
          class="thumbnail" 
          :class="{ active: currentIndex === index }"
          @click="selectImage(index)"
        >
          <img :src="src" :alt="`Imagen ${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSection',
  data() {
    return {
      imageSources: [
        require('@/assets/01.jpg'), 
        require('@/assets/02.jpg'), 
        require('@/assets/03.jpg'), 
        require('@/assets/04.jpg'),
        require('@/assets/05.jpg'), 
        require('@/assets/06.jpg'), 
        require('@/assets/07.jpg'), 
        require('@/assets/11.jpg'),
        require('@/assets/13.jpg'), 
        require('@/assets/14.jpg'), 
        require('@/assets/15.jpg')
      ],
      currentIndex: 0,
      carouselImages: [],
      rotationAngle: 0
    }
  },
  mounted() {
    this.setupCarousel();
    this.startAutoRotation();
  },
  beforeUnmount() {
    this.stopAutoRotation();
  },
  methods: {
    setupCarousel() {
      const carousel = this.$refs.carousel;
      const radius = 1550;
      const total = this.imageSources.length;

      // Limpiar el carrusel
      carousel.innerHTML = '';
      this.carouselImages = [];

      this.imageSources.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        const angle = (360 / total) * index;
        img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
      
        img.addEventListener('click', () => {
          this.selectImage(index);
        });
        
        carousel.appendChild(img);
        this.carouselImages.push(img);
      });
    },
    
    selectImage(index) {
      this.currentIndex = index;
      this.stopAutoRotation();
      
      // Calcular el ángulo para centrar la imagen seleccionada
      const total = this.imageSources.length;
      const anglePerImage = 360 / total;
      const targetAngle = -anglePerImage * index;
      
      // Aplicar la rotación al carrusel
      const carousel = this.$refs.carousel;
      carousel.style.transform = `rotateY(${targetAngle}deg)`;
      carousel.style.transition = 'transform 1s ease';
      
      // Reiniciar la rotación automática después de un tiempo
      setTimeout(() => {
        this.rotationAngle = targetAngle;
        this.startAutoRotation();
      }, 5000);
    },
    
    startAutoRotation() {
      this.autoRotationInterval = setInterval(() => {
        this.rotationAngle -= 0.5;
        if (this.rotationAngle <= -360) {
          this.rotationAngle = 0;
        }
        
        const carousel = this.$refs.carousel;
        carousel.style.transform = `rotateY(${this.rotationAngle}deg)`;
        carousel.style.transition = 'transform 0.1s linear';
        
        // Actualizar el índice actual basado en la rotación
        const total = this.imageSources.length;
        const anglePerImage = 360 / total;
        const normalizedAngle = ((-this.rotationAngle % 360) + 360) % 360;
        this.currentIndex = Math.round(normalizedAngle / anglePerImage) % total;
      }, 50);
    },
    
    stopAutoRotation() {
      clearInterval(this.autoRotationInterval);
    }
  }
}
</script>

<style scoped>
.carousel-container {
  perspective: 1000%;
  height: 700px;
  position: relative;
  margin: 20px auto;
  overflow: hidden;
  transform: rotateX(35deg); 
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s ease;
}

.carousel img {
  position: absolute;
  width: 900px;
  height: 410px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel img:hover {
  transform-origin: center;
  transform: scale(1.05) translateZ(50px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}

/* Estilos para las miniaturas */
.thumbnails-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 650px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.thumbnail {
  width: 80px;
  height: 60px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.thumbnail.active {
  border-color: #2575fc;
  opacity: 1;
  transform: scale(1.1);
}

.thumbnail:hover {
  opacity: 1;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .carousel-container {
    height: 400px;
    transform: rotateX(25deg);
  }
  
  .carousel img {
    width: 300px;
    height: 200px;
  }
  
  .thumbnails-container {
    margin-top: 350px;
  }
  
  .thumbnail {
    width: 60px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 300px;
  }
  
  .carousel img {
    width: 250px;
    height: 150px;
  }
  
  .thumbnails-container {
    margin-top: 250px;
    padding: 10px;
  }
  
  .thumbnail {
    width: 50px;
    height: 40px;
  }
}
</style>