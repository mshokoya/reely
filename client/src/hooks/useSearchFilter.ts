import { observable } from "@legendapp/state";
// import { useObservable } from "@legendapp/state/react"

const filter = observable({
  openFilter: false,
  propertyType: { value: [], options: [] },
  priceRange: { value: [0, 100000], options: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000] },
  // priceRange: { value: ['0', '100000'], options: ['0', '10000', '20000', '30000', '40000', '50000', '60000', '70000', '80000', '90000', '100000'] },
  conveniences: { value: [], options: [] },
  beds: { value: 0, options: [] },
  baths: { value: 0, options: [] },
  sort: { value: 'price', options: [] },
  moveInDate: new Date(),
  location: '',
  view: 'grid',
});

export default () => {
  return filter
}