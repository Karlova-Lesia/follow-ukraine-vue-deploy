import { computed, reactive } from 'vue';
import { getPropositionsById } from '@/api/propositions';
import { useAttractionStore } from '@/stores/attraction';
import type { Proposition } from '@/types/propositions';

export default function trackAttractionPropositions(
  propositionCategory: string,
  propositionsIds: [],
  attractionPropositions: Proposition[]
): void {
  const attractionStore = useAttractionStore();
  const state = reactive(attractionStore.state.attraction);

  const propositionsIdsTitle = computed(() => propositionCategory + 'Ids');

  if (propositionsIdsTitle.value in state) {
    switch (propositionsIdsTitle.value) {
      case 'hotelsIds':
        propositionsIds = state.hotelsIds;
        break;
      case 'restaurantsIds':
        propositionsIds = state.restaurantsIds;
        break;
      case 'toursIds':
        propositionsIds = state.toursIds;
        break;
      case 'excursionsIds':
        propositionsIds = state.excursionsIds;
        break;
    }
  }

  propositionsIds.forEach((id: number) =>
    getPropositionsById(propositionCategory, id).then(({ data }) => {
      attractionPropositions.push(...data);
    })
  );
}
