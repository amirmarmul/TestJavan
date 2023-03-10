import _ from 'axios'
import { defineStore } from 'pinia'

const axios = _.create({
    baseURL: 'http://localhost:4000'
})

export const useUser = defineStore({
    id: 'users',

    state: () => ({
        user: {},
        users: {},
    }),

    actions: {
        async find() {
            this.users = (await axios.get('/users')).data
        },

        async findOne(id) {
            this.user = (await axios.get(`/users/${id}`)).data
        },

        async create(params) {
            await axios.post('/users', params)
        },

        async update(id, params) {
            await axios.put(`/users/${id}`, params)

            await this.findOne(id)
        },

        async delete(id) {
           await axios.delete(`/users/${id}`)
           
           await this.find()
        }
    },
})