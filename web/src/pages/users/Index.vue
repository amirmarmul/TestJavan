<script setup>
import { storeToRefs } from 'pinia'
import { useUser } from '../../stores/useUser'

const { users } = storeToRefs(useUser())

useUser().find()

const confirmDeletion = (userId) => {
    if (confirm('are you sure?')) {
        useUser().delete(userId)
    }
}
</script>

<template>
    <div>
        <h1>Users</h1>

        <router-link to="/users/create">Create User</router-link>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.gender }}</td>
                    <td>
                        <router-link :to="`/users/${user.id}`">Show</router-link>
                        <router-link :to="`/users/edit/${user.id}`">Edit</router-link>
                        <button @click="confirmDeletion(user.id)">Delete</button>
                    </td>
                </tr>
                <tr v-if="! users.length">
                    <td colspan="3">No data yet</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>