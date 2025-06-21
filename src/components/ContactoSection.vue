<template>
  <section class="contact-section">
    <div class="contact-background">
      <div class="overlay"></div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <!-- Header Section -->
          <div class="contact-header text-center mb-3">
            <h2 class="section-title">Contáctanos</h2>
            <p class="section-subtitle">Visítanos o conéctate con nosotros a través de nuestras redes sociales</p>
            <div class="title-divider"></div>
          </div>

          <!-- Map Section -->
          <div class="map-section mb-3">
            <div class="map-card">
              <div class="map-header">
                <i class="fas fa-map-marker-alt map-icon"></i>
                <h3>Ubicación</h3>
              </div>
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.123456789012!2d-67.1082046!3d-17.9591347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0a679d6e793%3A0x4ea39a9506e08039!2sInstituto%20T%C3%A9cnico%20Jes%C3%BAs%20Mar%C3%ADa!5e0!3m2!1ses!2sbo!4v1234567890123!5m2!1ses!2sbo"
                  width="100%"
                  height="250"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  class="map-iframe">
                </iframe>
              </div>
            </div>
          </div>

          <!-- Contact Info Section -->
          <div class="contact-info-section">
            <div class="contact-info-card">
              <div class="info-header text-center">
                <h4>Síguenos en Redes Sociales</h4>
              </div>

              <div class="contact-details">
               

            
              </div>

              <div class="social-section">
                
                <div class="social-grid">
                  <a href="https://www.facebook.com/IntJem/" target="_blank" class="social-item facebook">
                    <i class="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2FInT_JesusMaria" target="_blank" class="social-item twitter">
                    <i class="fas fa-x"></i>
                    <span>X (Twitter)</span>
                  </a>
                  <a href="https://www.instagram.com/intjem.bo/" target="_blank" class="social-item instagram">
                    <i class="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/channel/UC1WdF2amZjCVAlOlbUbhcMg" target="_blank" class="social-item youtube">
                    <i class="fab fa-youtube"></i>
                    <span>YouTube</span>
                  </a>
                  <a href="mailto:intjemoruro@gmail.com" class="social-item email">
                    <i class="fas fa-envelope"></i>
                    <span>Email</span>
                  </a>
                  <a href="https://www.tiktok.com/@intjem_oruro?_t=ZM-8vW1YvMGb3f&_r=1" target="_blank" class="social-item tiktok">
                    <i class="fab fa-tiktok"></i>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactoSection'
}
</script>

<style scoped>
.contact-section {
  position: relative;
  padding: 3rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.contact-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,0 1000,1000"/></svg>');
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.container {
  position: relative;
  z-index: 2;
}

/* Header Styles */
.contact-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
  font-weight: 300;
  color: #ffffff;
}

.title-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
}

/* Map Section */
.map-section {
  margin-bottom: 1.5rem;
}

.map-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.map-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Map Header */
.map-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.map-icon {
  font-size: 1.2rem;
  color: #ffd700;
  margin-right: 0.6rem;
}

.map-header h3 {
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Map Container */
.map-container {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.map-iframe {
  border-radius: 15px;
}

/* Contact Info Section */
.contact-info-section {
  margin-bottom: 1rem;
}

.contact-info-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.contact-info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Contact Info Card */
.info-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.info-icon {
  font-size: 1.2rem;
  color: #ffd700;
  margin-right: 0.6rem;
}

.info-header h3 {
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Contact Details */
.contact-details {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(3px);
}

.contact-item i {
  font-size: 1rem;
  color: #ffd700;
  margin-right: 0.6rem;
  margin-top: 0.1rem;
}

.contact-text h5 {
  margin: 0 0 0.1rem 0;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.8;
}

.contact-text p {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Social Section */
.social-section h4 {
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 0.4rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-item:hover {
  transform: translateY(-2px);
  color: white;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.social-item i {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  transition: all 0.3s ease;
}

.social-item span {
  font-size: 0.7rem;
  font-weight: 500;
  text-align: center;
}

/* Social Item Specific Colors */
.social-item.facebook:hover {
  background: linear-gradient(135deg, #1877f2, #0d6efd);
  border-color: #1877f2;
}

.social-item.twitter:hover {
  background: linear-gradient(135deg, #000000, #1a1a1a);
  border-color: #ffffff;
}

.social-item.instagram:hover {
  background: linear-gradient(135deg, #7905f5, #f919ba,#ffed4e);
  border-color: #e4405f;
}

.social-item.youtube:hover {
  background: linear-gradient(135deg, #ff0000, #dc2626);
  border-color: #ff0000;
}

.social-item.email:hover {
  background: linear-gradient(135deg, #34a853, #ffa968,#0d6efd,#f50505);
  border-color: #ea4335;
}

.social-item.tiktok:hover {
  background: linear-gradient(135deg, #000000, #1f2937);
  border-color: #000077;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-section {
    padding: 2.5rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .map-card, .contact-info-card {
    padding: 1rem;
  }

  .contact-details {
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-item {
    min-width: auto;
  }

  .social-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .social-item {
    padding: 0.6rem 0.3rem;
  }

  .social-item i {
    font-size: 1rem;
  }

  .social-item span {
    font-size: 0.65rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.6rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  .map-card, .contact-info-card {
    padding: 0.8rem;
  }

  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Animation Effects */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.map-card, .contact-info-card {
  animation: fadeInUp 0.6s ease-out;
}

.contact-item {
  animation: fadeInUp 0.6s ease-out;
  animation-delay: 0.1s;
}

.social-item {
  animation: fadeInUp 0.6s ease-out;
  animation-delay: 0.2s;
}
</style>