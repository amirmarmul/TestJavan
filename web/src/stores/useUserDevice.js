import _ from 'axios'
import { defineStore } from 'pinia'

const axios = _.create({
    baseURL: 'http://localhost:4000'
})

export const useUserDevice = defineStore({
    id: 'userDevices',

    state: () => ({
        devices: {},
    }),

    getters: {
        totalPrice: (state) => {
            let sum = 0
            if (Array.isArray(state.devices)) {
                state.devices.forEach(x => {
                    sum += x.price
                })
            };

            return sum;
        }
    },

    actions: {
        async find(userId) {
            this.devices = (await axios.get(`/users/${userId}/devices`)).data
        },

        async create(userId, deviceId) {
            await axios.post(`/users/${userId}/devices`, { deviceId })
        },

        async delete(userId, deviceId) {
           await axios.delete(`/users/${userId}/devices/${deviceId}`)
           
           await this.find(userId)
        }
    },
})