type User = {
  id: string
  email: string
  userType: ('tenant' | 'manager')[]
  likes: string[]
}

type Ouser = Observable<User | null>;

type IDTOKEN = {
  iss: string
  sub: string
  aud: string
  exp: number
  iat: number
  name: string
  given_name: string
  family_name: string
  gender: string
  birthdate: string
  email: string
  picture: string
}

type PropertiesSchema = {
  id: string;
  name: string;
  description: string;
  pricePerMonth: number;
  securityDeposit: number;
  applicationFee: number;
  photoUrls: string[];
  amenities: string[];
  highlights: string[];
  isPetsAllowed: boolean;
  isParkingIncluded: boolean;
  beds: number;
  baths: number;
  squareFeet: number;
  propertyType: string;
  postedDate: Date;
  averageRating: number;
  numberOfReviews: number;
  userId: string;

  // location
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: [number, number];

};