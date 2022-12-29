import { ref } from 'vue';
import { defineStore } from 'pinia';

interface State {
  isOpened: boolean;
}

const initialStore: State = {
  isOpened: false,
};

export const useSearchStore = defineStore('search', () => {
  const state = ref<State>(initialStore);

  function setSearchIsOpen(isOpened: boolean): void {
    state.value.isOpened = isOpened;
  }

  return { state, setSearchIsOpen };
});
