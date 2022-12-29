<template>
  <li class="main-content-list-item">
    <img :src="image" :alt="altText" />
    <div class="list-item-content">
      <h3>{{ title }}</h3>
      <p>{{ location }}</p>
      <propositions-list :attractionId="id" :categoryPath="categoryPath" />
    </div>
  </li>
</template>

<script setup lang="ts">
import PropositionsList from '@/components/PropositionsList.vue';

interface Props {
  id: string;
  image: string;
  altText: string;
  title: string;
  location: string;
  categoryPath: string;
}

const { id, image, altText, title, location, categoryPath } =
  defineProps<Props>();
</script>
