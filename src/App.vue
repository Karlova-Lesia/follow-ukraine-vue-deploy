<template>
  <Header />
  <router-link to="/" />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>
