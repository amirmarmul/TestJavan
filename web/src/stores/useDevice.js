import _ from 'axios'
import { defineStore } from 'pinia'

const axios = _.create({
    baseURL: 'https://amirmarmul-shiny-guide-69prr94x564c4px7-4000.preview.app.github.dev'
})

export const useDevice = defineStore({
    id: 'devices',

    state: () => ({
        device: {},
        devices: {},
    }),

    actions: {
        async find() {
            this.devices = (await axios.get('/devices')).data
        },

        async findOne(id) {
            this.device = (await axios.get(`/devices/${id}`)).data
        },
    },
})