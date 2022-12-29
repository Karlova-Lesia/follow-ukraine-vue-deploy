<template>
  <search class="mobile-only" />
  <main-content
    className="lakes"
    description="Україна – багата країна. Бог наділив цю землю дивовижно мальовничими краєвидами, де є і гори, і моря, і ріки, і степи.
        В Україні налічується близько 20 тисяч озер: вони розкидані у заплавах річок, морських заливах та високо в горах."
    title="Озера і річки"
  />
  <attractions-list :attractions="lakes" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Search from '@/components/Search.vue';
import MainContent from '@/components/MainContent.vue';
import AttractionsList from '@/components/AttractionsList.vue';
import { getAttractionsByCategoryType } from '@/api/attractions';
import { LAKES_URL } from '@/constants/routes';

const lakes = ref([]);

onMounted(() => {
  window.scrollTo(0, 0);

  getAttractionsByCategoryType(LAKES_URL).then(({ data }) => {
    lakes.value = data;
  });
});
</script>
