import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MountainsView from '@/views/MountainsView.vue';
import ArchitectureView from '@/views/ArchitectureView.vue';
import SeasView from '@/views/SeasView.vue';
import LionsView from '@/views/LionsView.vue';
import LakesView from '@/views/LakesView.vue';
import AttractionView from '@/views/AttractionView.vue';
import PropositionsView from '@/views/PropositionsView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/mountains',
      name: 'mountains',
      component: MountainsView,
      children: [
        {
          path: '/:attractionTitle',
          component: AttractionView,
        },
      ],
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: ArchitectureView,
      children: [
        {
          path: '/:attractionTitle',
          component: AttractionView,
        },
      ],
    },
    {
      path: '/seas',
      name: 'seas',
      component: SeasView,
      children: [
        {
          path: '/:attractionTitle',
          component: AttractionView,
        },
      ],
    },
    {
      path: '/lions',
      name: 'lions',
      component: LionsView,
      children: [
        {
          path: '/:attractionTitle',
          component: AttractionView,
        },
      ],
    },
    {
      path: '/lakes',
      name: 'lakes',
      component: LakesView,
      children: [
        {
          path: '/:attractionTitle',
          component: AttractionView,
        },
      ],
    },
    {
      path: '/attraction/:attractionTitle',
      name: 'attraction',
      component: AttractionView,
    },
    {
      name: 'propositions',
      path: '/attraction/:attractionTitle/propositions/:propositionCategory',
      component: PropositionsView,
    },
  ],
});

export default router;
