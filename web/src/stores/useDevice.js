import _ from 'axios'
import { defineStore } from 'pinia'

const axios = _.create({
    baseURL: 'http://localhost:4000'
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