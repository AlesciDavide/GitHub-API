

import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '../components/homepage/AppMain.vue';
import MainProject from '../components/pages/MainProject.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppMain,
    },
    {
        path: '/project',
        name: 'Project',
        component: MainProject,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
