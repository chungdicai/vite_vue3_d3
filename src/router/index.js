import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routesItem.js'
import { setupRoutePermission } from './permission.js'
const router = createRouter({
    history:  createWebHashHistory(),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})


export async function setupRouter(AppInstance) {
    AppInstance.use(router)
    setupRoutePermission(router)
}