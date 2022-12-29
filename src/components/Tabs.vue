<template>
  <div class="tabs-wrapper">
    <button
      :class="['tab', { active: isActive(HOTELS_URL) }]"
      @click="selectTab(HOTELS_URL)"
    >
      Готелі
    </button>
    <button
      :class="['tab', { active: isActive(RESTAURANTS_URL) }]"
      @click="selectTab(RESTAURANTS_URL)"
    >
      Ресторани
    </button>
    <button
      :class="['tab', { active: isActive(TOURS_URL) }]"
      @click="selectTab(TOURS_URL)"
    >
      Тури
    </button>
    <button
      :class="['tab', { active: isActive(EXCURSIONS_URL) }]"
      @click="selectTab(EXCURSIONS_URL)"
    >
      Екскурсії
    </button>
  </div>
  <div class="tabs-content-wrapper">
    <tab :content="tabContent" :is-active="isActive(HOTELS_URL)" />
    <tab :content="tabContent" :is-active="isActive(RESTAURANTS_URL)" />
    <tab :content="tabContent" :is-active="isActive(TOURS_URL)" />
    <tab :content="tabContent" :is-active="isActive(EXCURSIONS_URL)" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Tab from '@/components/Tab.vue';
import trackAttractionPropositions from '@/helpers/trackAttractionPropositions';
import {
  HOTELS_URL,
  RESTAURANTS_URL,
  TOURS_URL,
  EXCURSIONS_URL,
} from '@/constants/routes';
import type { Tab as TabContent } from '@/types/tab';

const tabContent = ref<TabContent[]>([]);
const activeTab = ref<string>(HOTELS_URL);
const propositionsIds = ref();

onMounted(() => selectTab(HOTELS_URL));

function selectTab(tabContentUrl: string): void {
  tabContent.value = [];

  trackAttractionPropositions(
    tabContentUrl,
    propositionsIds.value,
    tabContent.value
  );

  activeTab.value = tabContentUrl;
}

function isActive(tabTitle: string): boolean {
  return activeTab.value === tabTitle;
}
</script>
