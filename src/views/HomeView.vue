<template>
  <main>
    <HeroSection />
    <CarrerasSection />
    <MisionVisionSection />
    <CarouselSection />
    <TestimoniosSection />
    <ConveniosSection />
    <ContactoSection />
  </main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import CarrerasSection from '@/components/CarrerasSection.vue'
import MisionVisionSection from '@/components/MisionVisionSection.vue'
import CarouselSection from '@/components/CarouselSection.vue'
import TestimoniosSection from '@/components/TestimoniosSection.vue'
import ConveniosSection from '@/components/ConveniosSection.vue'
import ContactoSection from '@/components/ContactoSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    CarrerasSection,
    MisionVisionSection,
    CarouselSection,
    TestimoniosSection,
    ConveniosSection,
    ContactoSection
  }
}
</script>