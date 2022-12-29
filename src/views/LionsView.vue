<template>
  <search class="mobile-only" />
  <main-content
    className="lions"
    description="Надзвичайною мальовничістю, щедрістю та багатогранністю відрізняється природа України.
        Родюча земля, безкраї степи, численні водойми, величні гори та ліси, багатий світ флори та фауни.
        Щоб зберегти всі ці багатства, були створені природні заповідники України. Їх головним завданням є збереження
        природних ландшафтів, а також видів тварин і рослин, що зникають."
    title="Заповідники"
  />
  <attractions-list :attractions="lions" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainContent from '@/components/MainContent.vue';
import Search from '@/components/Search.vue';
import AttractionsList from '@/components/AttractionsList.vue';
import { getAttractionsByCategoryType } from '@/api/attractions';
import { LIONS_URL } from '@/constants/routes';

const lions = ref([]);

onMounted(() => {
  window.scrollTo(0, 0);

  getAttractionsByCategoryType(LIONS_URL).then(({ data }) => {
    lions.value = data;
  });
});
</script>
