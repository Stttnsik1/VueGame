import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/game',
    name: 'game',
    component: () => import('./views/GameView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('./views/TaskView.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('./views/RefView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

