<template>
  <main class="main-content">
    <search class="mobile-only" />
    <h1 class="content-title">{{ state.title.ua }}</h1>
    <div class="content-description-wrapper">
      <img class="description-image" :src="state.image" :alt="state.altText" />
      <div class="description-text">
        <p v-for="(paragraph, key) in state.description" :key="key">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <tabs />
  </main>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import Search from '@/components/Search.vue';
import Tabs from '@/components/Tabs.vue';
import { useAttractionStore } from '@/stores/attraction';

const attractionStore = useAttractionStore();

onMounted(() => window.scrollTo(0, 0));

const state = reactive(attractionStore.state.attraction);
</script>
