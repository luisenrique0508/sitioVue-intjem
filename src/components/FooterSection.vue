<template>
  <footer class="text-center">
    <div class="container footer-content">
      <p>
        &copy; 2025 Instituto Técnico Jesús María 
        <router-link to="/contactos">Contacto</router-link> |
        <a href="#">Política de Privacidad</a> |
      </p>
      <p>Design by: Luis Enrique Ledezma Lopez</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
footer {
  background: linear-gradient(90deg, #9370db, #4169e1);
  color: white;
  padding: 1.5rem 0;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  position: relative;
}

footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

.footer-content {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.footer-content p {
  margin-bottom: 0.5rem;
}

.footer-content a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-content a:hover {
  color: #ffd700;
}
</style>