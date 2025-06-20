import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sistemas',
    name: 'Sistemas',
    component: () => import('../views/Sistemas.vue')
  },
  {
    path: '/secre',
    name: 'Secretariado',
    component: () => import('../views/Secretariado.vue')
  },
  {
    path: '/telecom',
    name: 'Telecomunicaciones',
    component: () => import('../views/Telecomunicaciones.vue')
  },
  {
    path: '/admision',
    name: 'Admision',
    component: () => import('../views/Admision.vue')
  },
  {
    path: '/platvirtu',
    name: 'PlataformaVirtual',
    component: () => import('../views/PlataformaVirtual.vue')
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: () => import('../views/Contactos.vue')
  },
  {
    path: '/preinscripci',
    name: 'Preinscripcion',
    component: () => import('../views/Preinscripcion.vue')
  },
  {
    path: '/planteldoc',
    name: 'PlantelDocente',
    component: () => import('../views/PlantelDocente.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router