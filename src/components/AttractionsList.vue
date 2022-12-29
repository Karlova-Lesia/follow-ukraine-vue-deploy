<template>
  <ol class="main-content-list">
    <attractions-item
      v-for="{ id, altText, image, location, title } in attractions"
      :key="id"
      :id="id"
      :alt-text="altText"
      :image="image"
      :location="location"
      :title="title.ua"
      :categoryPath="deleteWhitespace(title.en)"
    />
  </ol>
</template>

<script setup lang="ts">
import AttractionsItem from '@/components/AttractionsItem.vue';
import type { Attraction } from '@/types/attraction';

interface Props {
  attractions: Attraction[];
}

const { attractions } = defineProps<Props>();

function deleteWhitespace(str: string) {
  return str.split(' ').join('').toLowerCase();
}
</script>
