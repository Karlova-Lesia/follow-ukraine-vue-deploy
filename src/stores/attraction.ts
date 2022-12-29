import { ref } from 'vue';
import { defineStore } from 'pinia';
import { STATE } from '@/constants/store';
import type { Attraction } from '@/types/attraction';

interface State {
  attraction: Attraction;
}

const initialAttraction: Attraction = {
  id: '',
  title: {
    ua: '',
    en: '',
  },
  location: '',
  description: '',
  altText: '',
  image: '',
  hotelsIds: [],
  restaurantsIds: [],
  toursIds: [],
  excursionsIds: [],
};
const initialStore: State = {
  attraction: initialAttraction,
};
const parsedAttractionToJson: State = JSON.parse(
  localStorage.getItem(STATE) || '{}'
);

export const useAttractionStore = defineStore('attraction', () => {
  const state = ref<State>(
    localStorage.getItem(STATE) ? parsedAttractionToJson : initialStore
  );

  function setAttraction({
    id,
    title,
    location,
    description,
    altText,
    image,
    hotelsIds,
    restaurantsIds,
    toursIds,
    excursionsIds,
  }: Attraction) {
    state.value.attraction.id = id;
    state.value.attraction.title.ua = title.ua;
    state.value.attraction.title.en = title.en;
    state.value.attraction.location = location;
    state.value.attraction.description = description;
    state.value.attraction.altText = altText;
    state.value.attraction.image = image;
    state.value.attraction.hotelsIds = hotelsIds;
    state.value.attraction.restaurantsIds = restaurantsIds;
    state.value.attraction.toursIds = toursIds;
    state.value.attraction.excursionsIds = excursionsIds;
  }

  return { state, setAttraction };
});
