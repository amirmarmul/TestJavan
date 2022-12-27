<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUser } from '../../stores/useUser'
import { useUserDevice } from '../../stores/useUserDevice'

import { storeToRefs } from 'pinia'

const router = useRouter()

const id = useRoute().params.id
useUser().findOne(id)
useUserDevice().find(id)

const { user } = storeToRefs(useUser())
const { devices } = storeToRefs(useUserDevice())


const confirmDeletion = (deviceId) => {
    if (confirm('are you sure?')) {
        useUserDevice().delete(user.value.id, deviceId)
    }
}
</script>

<template>
    <div>
        <h1>Show User</h1>

        <div>

        </div>

        <div>
            <h2>My Devices</h2>
            
            <router-link :to="`/users/${user.id}/devices/create`">Add Device</router-link>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="device in devices" :key="device.id">
                        <td>{{ device.title }}</td>
                        <td>{{ device.price }}</td>
                        <td>
                            <button @click="confirmDeletion(device.id)">Delete</button>
                        </td>
                    </tr>
                    <tr v-if="! devices.length">
                        <td colspan="3">No data yet</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>