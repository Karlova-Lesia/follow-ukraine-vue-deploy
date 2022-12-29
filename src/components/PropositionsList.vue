<template>
  <nav class="propositions-list">
    <router-link
      :to="{
        name: PROPOSITIONS_ROUTE_NAME,
        params: {
          propositionCategory: 'hotels',
          attractionTitle: categoryPath,
        },
      }"
    >
      <button>Готелі</button>
    </router-link>
    <router-link
      :to="{
        name: PROPOSITIONS_ROUTE_NAME,
        params: {
          propositionCategory: 'restaurants',
          attractionTitle: categoryPath,
        },
      }"
    >
      <button>Ресторани</button>
    </router-link>
    <router-link
      :to="{
        name: PROPOSITIONS_ROUTE_NAME,
        params: {
          propositionCategory: 'tours',
          attractionTitle: categoryPath,
        },
      }"
    >
      <button>Тури</button>
    </router-link>
    <router-link
      :to="{
        name: PROPOSITIONS_ROUTE_NAME,
        params: {
          propositionCategory: 'excursions',
          attractionTitle: categoryPath,
        },
      }"
    >
      <button>Екскурсії</button>
    </router-link>
    <router-link
      :to="{
        name: ATTRACTION_NESTED_ROUTE_NAME,
        params: { attractionTitle: categoryPath },
      }"
      :key="attractionId"
    >
      <button>Дізнатись докладніше</button>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import {
  ATTRACTION_NESTED_ROUTE_NAME,
  PROPOSITIONS_ROUTE_NAME,
} from '@/constants/routes';

interface Props {
  attractionId: string;
  categoryPath: string;
}

const { attractionId, categoryPath } = defineProps<Props>();
</script>
