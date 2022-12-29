<template>
  <form
    :class="[
      'search',
      {
        'list-is-opened': isVisibleListAttractions,
      },
    ]"
    @click="openSearchList"
    v-click-away="onClickOutside"
  >
    <input
      class="search-input"
      type="text"
      id="search"
      v-model="searchAttractionTitle"
      autocomplete="off"
      @keydown.space.prevent
    />
    <p v-if="filteredAttractions.length === 0">Нічого не знайдено!</p>
    <ul class="search-list" v-if="isVisibleListAttractions">
      <li
        v-for="{ title, location } in filteredAttractions"
        :key="title.en"
        @click="onSubmit"
      >
        <router-link
          class="search-list-item"
          :to="`/${ATTRACTION_NESTED_ROUTE_NAME}/${transformToRouteFormat(
            title.en
          )}`"
        >
          <img src="@/assets/images/icons/location-pin.svg" alt="Location" />
          {{ location ? `${title.ua}, ${location}` : title.ua }}
        </router-link>
      </li>
    </ul>
    <div>
      <img src="@/assets/images/icons/search.svg" alt="Search" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import axiosInstance from '@/api/axios';
import {
  ATTRACTIONS_URL,
  ATTRACTION_NESTED_ROUTE_NAME,
} from '@/constants/routes';
import { useAttractionStore } from '@/stores/attraction';
import { useSearchStore } from '@/stores/search';
import transformToRouteFormat from '@/helpers/transformToRouteFormat';
import type { Attraction } from '@/types/attraction';

const route = useRoute();

const attractionStore = useAttractionStore();
const searchStore = useSearchStore();

const searchAttractionTitle = ref<string>('');
const attractions = ref<Attraction[]>([]);
const isVisible = ref<boolean>(false);

const filteredAttractions = computed<Attraction[]>(() => {
  const query: string = searchAttractionTitle.value.toLowerCase();

  if (searchAttractionTitle.value === '') {
    return attractions.value;
  }

  return attractions.value.filter((attraction: Attraction) =>
    String(attraction.title.ua).toLowerCase().includes(query)
  );
});

const isVisibleListAttractions = computed<boolean>(() => {
  return filteredAttractions.value.length !== 0 && isVisible.value;
});

onMounted(() => {
  axiosInstance.get(ATTRACTIONS_URL).then(({ data }) => {
    attractions.value = data;
    attractions.value.sort((a, b) => a.title.ua.localeCompare(b.title.ua));
  });
});

function openSearchList(): void {
  searchStore.setSearchIsOpen(true);
  isVisible.value = true;
}

function onClickOutside(): void {
  isVisible.value === true && searchStore.setSearchIsOpen(false);
  isVisible.value = false;
  searchAttractionTitle.value = '';
}

function onSubmit(): void {
  isVisible.value = false;
  searchAttractionTitle.value = '';
}

watch(
  () => route.params,
  () => {
    const searchedAttraction = attractions.value.find(
      (attraction: Attraction) => {
        return (
          transformToRouteFormat(attraction.title.en) ===
          String(route.params.attractionTitle)
        );
      }
    );

    searchedAttraction &&
      axiosInstance
        .get(`${ATTRACTIONS_URL}/${searchedAttraction.id}`)
        .then(({ data }) => {
          attractionStore.setAttraction(data);
        });
  }
);
</script>
