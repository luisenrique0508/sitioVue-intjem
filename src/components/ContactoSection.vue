<template>
  <section class="contact-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 text-center">
          <div class="contact-divider"></div>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.123456789012!2d-67.1082046!3d-17.9591347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0a679d6e793%3A0x4ea39a9506e08039!2sInstituto%20T%C3%A9cnico%20Jes%C3%BAs%20Mar%C3%ADa!5e0!3m2!1ses!2sbo!4v1234567890123!5m2!1ses!2sbo"
              width="100%"
              height="300"
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
</template>

<script>
export default {
  name: 'ContactoSection'
}
</script>

<style scoped>
.contact-section {
  padding: 4rem 0;
  background: linear-gradient(90deg, #9370db, #4169e1);
  color: white;
}

.contact-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 2rem 0;
}

.map-container {
  margin: 2rem 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.social-links {
  text-align: center;
  margin-top: 2rem;
}

.social-links a {
  display: inline-block;
  margin: 0 1rem;
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.social-links a:hover {
  transform: scale(1.1);
  color: #ffd700;
}

.social-links .fa-facebook:hover {
  color: #1877f2;
}

.social-links .fa-twitter:hover {
  color: #1da1f2;
}

.social-links .fa-instagram:hover {
  color: #e4405f;
}

.social-links .fa-envelope:hover {
  color: #ea4335;
}

.social-links .fa-map-marker-alt:hover {
  color: #34a853;
}

.social-links .fa-tiktok:hover {
  color: #000000;
}
</style>