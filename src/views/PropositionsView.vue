<template>
  <main class="main-content">
    <search class="mobile-only" />
    <h1 class="content-title">{{ pageTitle }}</h1>
    <ol class="main-content-list">
      <li
        class="main-content-list-item"
        v-for="{
          id,
          image,
          altText,
          title,
          address,
          description,
        } in attractionPropositions"
        :key="id"
      >
        <img :src="image" :alt="altText" />
        <div class="list-item-content">
          <h3>{{ title }}</h3>
          <p>{{ address }}</p>
          <p>{{ description }}</p>
        </div>
      </li>
    </ol>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Search from '@/components/Search.vue';
import trackAttractionPropositions from '@/helpers/trackAttractionPropositions';
import type { Proposition } from '@/types/propositions';

const { params } = useRoute();
const propositionCategory = params.propositionCategory as string;

const propositionsIds = ref();
const attractionPropositions = ref<Proposition[]>([]);

const pageTitle = computed(
  () =>
    propositionCategory.charAt(0).toUpperCase() + propositionCategory.slice(1)
);

onMounted(() => {
  window.scrollTo(0, 0);

  trackAttractionPropositions(
    propositionCategory,
    propositionsIds.value,
    attractionPropositions.value
  );
});
</script>
