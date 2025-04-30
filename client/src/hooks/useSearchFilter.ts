import { observable } from "@legendapp/state";
// import { useObservable } from "@legendapp/state/react"

const filter = observable({
  openFilter: false,
  propertyType: {
    value: ['Townhouse', 'Apartment', 'Condo', 'House', 'Land', 'Manufactured'],
    options: ['Townhouse', 'Apartment', 'Condo', 'House', 'Land', 'Manufactured']
  },
  priceRange: { value: [0, 100000], options: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000] },
  squareFeet: { value: [0, 3500], options: [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3500] },
  amenities: {
    value: ['air conditioning', 'balcony', 'dishwasher', 'dryer', 'elevator', 'fireplace', 'garage', 'gym', 'laundry', 'microwave', 'parking', 'pool', 'refrigerator', 'stove', 'tv', 'washer'],
    options: ['air conditioning', 'balcony', 'dishwasher', 'dryer', 'elevator', 'fireplace', 'garage', 'gym', 'laundry', 'microwave', 'parking', 'pool', 'refrigerator', 'stove', 'tv', 'washer']
  },
  beds: { value: 0, options: [0, 1, 2, 3, 4, 5] },
  baths: { value: 0, options: [0, 1, 2, 3, 4, 5] },
  sort: { value: 'price', options: [] },
  moveInDate: new Date(),
  location: '',
  view: 'grid',
});

export default () => {
  return filter
}