import { createRouter } from 'vue-router'
import HomeIndex from './home/Index.vue'

import UserLayout from './users/Layout.vue'
import UserIndex from './users/Index.vue'
import UserCreate from './users/Create.vue'
import UserEdit from './users/Edit.vue'
import UserShow from './users/Show.vue'

import UserDeviceCreate from './users/DeviceCreate.vue'

import DeviceLayout from './devices/Layout.vue'
import DeviceIndex from './devices/Index.vue'


const routes = [
    {
        path: '/',
        component: HomeIndex,
    },

    {
        path: '/users',
        component: UserLayout,
        children: [
            { path: '', component: UserIndex },
            { path: 'create', component: UserCreate },
            { path: 'edit/:id', component: UserEdit },
            { 
                path: ':id', 
                component: UserLayout,
                children: [
                    { path: '', component: UserShow },
                    { path: 'devices/create', component: UserDeviceCreate }
                ] 
            }
        ] 
    },

    {
        path: '/devices',
        component: DeviceLayout,
        children: [
            { path: '', component: DeviceIndex },
        ] 
    },
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}
