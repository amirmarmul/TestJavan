<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDevice } from '../../stores/useDevice'
import { useUser } from '../../stores/useUser'
import { storeToRefs } from 'pinia'
import { useUserDevice } from '../../stores/useUserDevice'

const router = useRouter()

const loading = ref(false)
const id = useRoute().params.id
useUser().findOne(id)

const { user } = storeToRefs(useUser())
const { devices } = storeToRefs(useDevice())
useDevice().find()

const userDevice = ref({
    deviceId: '',
})

const onSubmit = () => {
    useUserDevice()
        .create(
            user.value.id,
            userDevice.value.deviceId
        )
        .then(() => router.push(`/users/${user.value.id}`))
}
</script>

<template>
    <div>
        <h1>Add Device</h1>

        <form @submit.prevent="onSubmit">
            <div>
                <label for="user">User</label>
                <span>{{ user.name }}</span>
            </div>
            <div>
                <label for="gender">Device</label>
                <select v-model="userDevice.deviceId">
                    <option v-for="device in devices" :key="device.id" :value="device.id">{{  device.title }}</option>
                </select>
            </div>

            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>