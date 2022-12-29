<template>
  <router-link :to="link" class="list-item">
    <button :class="className" :disabled="searchState.isOpened">
      <span class="btn-title">{{ buttonTitle }}</span>
    </button>
  </router-link>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useSearchStore } from '@/stores/search';

const searchStore = useSearchStore();

const searchState = reactive(searchStore.state);

interface RouterLinkProps {
  link: string;
  className: string;
  buttonTitle: string;
}

const { link, className, buttonTitle } = defineProps<RouterLinkProps>();
</script>
