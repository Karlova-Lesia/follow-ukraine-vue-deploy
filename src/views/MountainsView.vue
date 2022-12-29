<template>
  <search class="mobile-only" />
  <main-content
    className="mountains"
    description="Краса величних Карпат, ще не залишила байдужим жодного відвідувача. І
        взимку, і влітку, тут величезна кількість туристів, які спостерігаючи за
        великими схилами і гострими шапками гір, назавжди занурюються вглиб
        себе, своїх роздумів, своєю сутністю."
    title="Карпати"
  />
  <attractions-list :attractions="mountains" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Search from '@/components/Search.vue';
import MainContent from '@/components/MainContent.vue';
import AttractionsList from '@/components/AttractionsList.vue';
import { getAttractionsByCategoryType } from '@/api/attractions';
import { MOUNTAINS_URL } from '@/constants/routes';

const mountains = ref([]);

onMounted(() => {
  window.scrollTo(0, 0);

  getAttractionsByCategoryType(MOUNTAINS_URL).then(({ data }) => {
    mountains.value = data;
  });
});
</script>
