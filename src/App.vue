<template>
  <NavBar />
  <router-view/>
  <FooterSection />
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection
  }
}
</script>

<style>
@import './assets/styles.css';
</style>