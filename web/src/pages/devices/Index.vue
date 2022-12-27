<script setup>
import { storeToRefs } from 'pinia'
import { useDevice } from '../../stores/useDevice'

const { devices } = storeToRefs(useDevice())

useDevice().find()
</script>

<template>
    <div>
        <h1>Devices</h1>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="device in devices" :key="device.id">
                    <td>{{ device.title }}</td>
                    <td>{{ device.price }}</td>
                </tr>
                <tr v-if="! devices.length">
                    <td colspan="3">No data yet</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>