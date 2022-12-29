<template>
  <ul :class="['tab-content', isActive ? 'active' : '']">
    <li
      v-for="{ id, altText, image, title, address, description } in content"
      class="tab-content-item"
      :key="id"
    >
      <img :src="image" :alt="altText" />
      <div>
        <h3 class="tabs-content-title">{{ title }}</h3>
        <p class="tabs-content-address">{{ address }}</p>
        <p class="tabs-content-description">{{ description }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Tab } from '@/types/tab';

interface Props {
  content: Tab[];
  isActive: boolean;
}
const { content, isActive } = defineProps<Props>();
</script>
