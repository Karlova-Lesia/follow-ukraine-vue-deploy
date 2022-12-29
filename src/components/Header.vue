<template>
  <header class="header">
    <div class="title">
      <h1>Follow Ukraine</h1>
      <img src="@/assets/images/ukraine_flag.svg" alt="Flag" />
    </div>
    <Search class="desktop-only" />
  </header>
</template>

<script setup lang="ts">
import Search from '@/components/Search.vue';
import '../assets/styles/main.scss';
</script>
