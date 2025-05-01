import { observable } from "@legendapp/state";
import { use } from "react";
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
  yearBuilt: [0, 0],
  beds: { value: 0, options: [0, 1, 2, 3, 4, 5] },
  baths: { value: 0, options: [0, 1, 2, 3, 4, 5] },
  sort: { value: 'Newest', options: ['Homes for you', 'Price (High to low)', 'Price (Low to high)', 'Newest', 'Bathrooms', 'Bedrooms'] },
  location: '',
  view: 'grid',
});

const listings = observable({
  data: [],
  found: 0,
  page: 1,
})

export default () => {
  return { filter, listings }
}