<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '../../stores/useUser'

const router = useRouter()
const user = ref({})
const loading = ref(false)

const onSubmit = () => {
    loading.value = !loading.value

    useUser()
        .create(user.value)
        .then(() => router.push('/users'))
}

</script>

<template>
    <div>
        <h1>Create User</h1>

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
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>