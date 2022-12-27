<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUser } from '../../stores/useUser'
import { storeToRefs } from 'pinia'

const router = useRouter()

const id = useRoute().params.id
useUser().findOne(id)

const { user } = storeToRefs(useUser())
const loading = ref(false)

const onSubmit = () => {
    loading.value = !loading.value

    useUser()
        .update(user.value.id, user.value)
        .then(() => router.push('/'))
}
</script>

<template>
    <div>
        <h1>Edit User</h1>

        <form @submit.prevent="onSubmit">
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="user.name">
            </div>

            <div>
                <label for="gender">Gender</label>
                <select v-model="user.gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div>
                <button :disabled="loading">Submit</button>
            </div>
        </form>
    </div>
</template>