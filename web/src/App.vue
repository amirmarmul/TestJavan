<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div>
    <div>
      <Navigation></Navigation>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

