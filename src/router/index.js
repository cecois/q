import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Index from '/src/components/Index.vue'

const rfunc = (route) => {
    return {
        pane: !route.params.pane ? 'home' : route.params.pane
    }
}
const rfuncd = (route) => {
    return {
        region: !route.params.region ? 'brighton' : route.params.region,
        collapsed: !route.params.collapsed ? '$' : route.params.collapsed,
        trackiso: !route.params.trackiso ? '$' : route.params.trackiso,
        panel: !route.params.panel ? 'home' : route.params.panel,
        basemap: !route.params.basemap ? 'carto_darkmatter' : route.params.basemap,
        bbox: !route.params.bbox ? '$' : route.params.bbox
            // center: !route.params.center ? '-71.1354446411133,42.32504712815144' : route.params.center,
            // zoom: !route.params.zoom ? "13" : route.params.zoom
    }
}

// https://localhost:3001/admin/brighton/$/$$/carto_darkmatter/-71.1779308319092,42.35362836606727,-71.12338542938234,42.38859969692781
const routes = [{
    path: '/:pane?',
    name: 'Index',
    component: Index,
    props: rfunc
}]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})
export default router