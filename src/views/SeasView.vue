<template>
  <search class="mobile-only" />
  <main-content
    className="seas"
    description="Море здатне зробити нас щасливими. Воно нагадує нам про дитинство, коли ми вперше
        зустрілись з ним, і відтоді постійно хочеться побачити його знову, воно дарує відпочинок
        розуму та тілу, надихає нас."
    title="Море"
  />
  <attractions-list :attractions="seas" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainContent from '@/components/MainContent.vue';
import Search from '@/components/Search.vue';
import AttractionsList from '@/components/AttractionsList.vue';
import { getAttractionsByCategoryType } from '@/api/attractions';
import { SEAS_URL } from '@/constants/routes';

const seas = ref([]);

onMounted(() => {
  window.scrollTo(0, 0);

  getAttractionsByCategoryType(SEAS_URL).then(({ data }) => {
    seas.value = data;
  });
});
</script>
