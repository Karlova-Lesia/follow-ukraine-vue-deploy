export interface Attraction {
  id: string;
  title: {
    ua: string;
    en: string;
  };
  location: string;
  description: string;
  altText: string;
  image: string;
  hotelsIds: [];
  restaurantsIds: [];
  toursIds: [];
  excursionsIds: [];
}
