import { observable } from "@legendapp/state";

const filter = observable({
  openFilter: false,
  propertyType: {
    value: ['Tinyhouse', 'Apartment', 'Cottage', 'Villa', 'Townhouse', 'House'],
    options: ['Tinyhouse', 'Apartment', 'Cottage', 'Villa', 'Townhouse', 'House']
  },
  priceRange: { value: [0, 100000], options: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000] },
  squareFeet: { value: [500, 3500], options: [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3500] },
  amenities: {
    value: ['AirConditioning', 'WasherDryer', 'Dishwasher', 'HighSpeedInternet', 'HardwoodFloors', 'WalkInClosets', 'Microwave', 'Refrigerator', 'Pool', 'Gym', 'Parking', 'PetsAllowed', 'WiFi'],
    options: ['AirConditioning', 'WasherDryer', 'Dishwasher', 'HighSpeedInternet', 'HardwoodFloors', 'WalkInClosets', 'Microwave', 'Refrigerator', 'Pool', 'Gym', 'Parking', 'PetsAllowed', 'WiFi']
  },
  yearBuilt: [0, 0],
  beds: { value: 0, options: [0, 1, 2, 3, 4, 5] },
  baths: { value: 0, options: [0, 1, 2, 3, 4, 5] },
  sort: { value: 'Newest', options: ['Homes for you', 'Price (High to low)', 'Price (Low to high)', 'Newest', 'Bathrooms', 'Bedrooms'] },
  location: '',
  view: 'grid',
  coordinates: [-74.5, 40]
});

const listings = observable<{ data: PropertiesSchema[], found: number, page: number }>({
  data: (tess() as unknown) as PropertiesSchema[],
  found: 0,
  page: 1,
})

const isLoading = observable(false)

export default () => {
  return { filter, listings, isLoading }
}











// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================









function tess() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomItem(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
  }

  function randomSample(arr, size) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }

  function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return `new Date('${date.toLocaleDateString("en-US")}')`;
  }

  const streetNames = ["Main", "Oak", "Pine", "Maple", "Cedar", "Elm", "Birch", "Willow", "2nd", "3rd"];
  const amenitiesPool = ['pool', 'washer', 'dryer', 'shower', 'gym', 'wifi', 'air conditioning', 'heating'];
  const highlightsPool = ['newly renovated', 'close to downtown', 'great view', 'pet friendly', 'quiet neighborhood'];
  const propertyTypes = ['Condo', 'Apartment', 'House', 'Studio'];

  const listings = [];

  for (let i = 0; i < 10; i++) {
    listings.push({
      id: crypto.randomUUID(),
      name: `${getRandomInt(100, 999)} ${randomItem(streetNames)} St`,
      description: `${getRandomInt(1, 100)} this is the des ${getRandomInt(1, 100)}`,
      pricePerMonth: getRandomInt(500, 5000),
      securityDeposit: getRandomInt(100, 1000),
      applicationFee: getRandomInt(50, 500),
      photoUrls: [
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      amenities: randomSample(amenitiesPool, 3),
      highlights: randomSample(highlightsPool, 3),
      isPetsAllowed: Math.random() < 0.5,
      isParkingIncluded: Math.random() < 0.5,
      beds: getRandomInt(1, 5),
      baths: getRandomInt(1, 3),
      squareFeet: getRandomInt(300, 1500),
      propertyType: randomItem(propertyTypes),
      postedDate: randomDate(new Date(2019, 0, 1), new Date(2023, 11, 31)),
      averageRating: getRandomInt(1, 5),
      numberOfReviews: getRandomInt(0, 100),
      locationId: crypto.randomUUID(),
      userId: crypto.randomUUID(),

      // ... other properties
      address: 'Villa Kunta Selatan',
      city: 'Bali',
      postalCode: '80361',
      country: 'India',
      state: 'Indonesia',
      coordinates: generateNearbyCoordinates()
      // [-74.5, 40],
    });
  }

  return listings
}







// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================







function generateNearbyCoordinates(offset = 0.001) {
  const lon = -73.968285 + (Math.random() - 0.5) * 2 * offset;
  const lat = 40.785091 + (Math.random() - 0.5) * 2 * offset;
  return [parseFloat(lon.toFixed(6)), parseFloat(lat.toFixed(6))]
}