<template>
  <main class="main-content">
    <div class="description">
      <p>Відтепер подорожувати Україною легко!</p>
      <p>Обирай, що саме ти хочеш відвідати і отримуй усі існуючі варіанти.</p>
      <p>
        Або ж вбивай в пошук точку на карті України і дізнайся, що буде
        очікувати тебе в цьому місці.
      </p>
    </div>
    <search class="mobile-only" />
    <nav :class="['buttons-list', { opacity: searchState.isOpened }]">
      <category-link
        link="/mountains"
        className="mountains"
        buttonTitle="Гори"
      />
      <category-link
        link="/architecture"
        className="architecture"
        buttonTitle="Архітектура"
      />
      <category-link link="/seas" className="seas" buttonTitle="Моря" />
      <category-link
        link="/lions"
        className="lions"
        buttonTitle="Заповідники"
      />
      <category-link
        link="/lakes"
        className="lakes"
        buttonTitle="Озера/річки"
      />
    </nav>
  </main>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import Search from '@/components/Search.vue';
import CategoryLink from '@/components/CategoryLink.vue';
import { useSearchStore } from '@/stores/search';

const searchStore = useSearchStore();

onMounted(() => window.scrollTo(0, 0));

const searchState = reactive(searchStore.state);
</script>
