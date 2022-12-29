import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import VueClickAway from 'vue3-click-away';
import App from './App.vue';
import { useAttractionStore } from '@/stores/attraction';
import { STATE } from '@/constants/store';
import './assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueClickAway);

app.mount('#app');

const attractionStore = useAttractionStore();

attractionStore.$subscribe((mutation, { state }) => {
  localStorage.setItem(STATE, JSON.stringify(state));
});
