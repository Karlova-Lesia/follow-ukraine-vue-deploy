<template>
  <search class="mobile-only" />
  <main-content
    className="architecture"
    description="Українська архітектура пронизана поліетнічною інтертекстуальністю та
        колоніальними травмами — і все ж вона залишається унікальною та повною
        несподіванок. Усе це перетворює її на дивовижну подорож у часі та
        просторі. Іноді українські архітектурні ландшафти спокушають загубитися:
        чи то в потаємних провулках, чи то в нерозгаданих таємницях — тож ми
        підготували короткий огляд деяких найяскравіших тенденцій, які
        допоможуть відчути, як б’ються серця українських міст."
    title="Архітектура"
  />
  <attractions-list :attractions="architecture" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MainContent from '@/components/MainContent.vue';
import Search from '@/components/Search.vue';
import AttractionsList from '@/components/AttractionsList.vue';
import { getAttractionsByCategoryType } from '@/api/attractions';
import { ARCHITECTURE_URL } from '@/constants/routes';

const architecture = ref([]);

onMounted(() => {
  window.scrollTo(0, 0);

  getAttractionsByCategoryType(ARCHITECTURE_URL).then(({ data }) => {
    architecture.value = data;
  });
});
</script>
