type User = {
  id: string
  email: string
  phoneNumber: string
  name: string
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

// type PropertiesSchema = {
//   id: string;
//   name: string;
//   description: string;
//   pricePerMonth: number;
//   securityDeposit: number;
//   applicationFee: number;
//   photoUrls: string[];
//   amenities: string[];
//   highlights: string[];
//   isPetsAllowed: boolean;
//   isParkingIncluded: boolean;
//   beds: number;
//   baths: number;
//   squareFeet: number;
//   propertyType: string;
//   postedDate: Date;
//   averageRating: number;
//   numberOfReviews: number;
//   userId: string;

//   // location
//   address: string;
//   city: string;
//   state: string;
//   country: string;
//   postalCode: string;
//   coordinates: [number, number];
// };

type PropertySchema = {
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
  postedDate: string;
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


type Property = {
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
  postedDate: string;
  averageRating: number;
  numberOfReviews: number;
  user: User;

  // location
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: [number, number];
};

type Lease = {
  id: string,
  startDate: string
  endDate: string
  rent: number
  deposit: number

  nextPaymentDate: string
  property: Property
  tenant: User
  application: Application
  payments: Payment[]
}

type Payment = {
  id: string
  amountDue: number
  amountPaid: number
  dueDate: string
  paymentDate: string
  paymentStatus: 'Pending' | 'Paid' | 'PartiallyPaid' | 'Overdue'
  lease: Lease
}

type Application = {
  id: string;
  applicationDate: string;
  status: 'Pending' | 'Approved' | 'Rejected' | "Denied";
  property: Property;
  manager: User;
  tenant: User;
  name: string;
  email: string;
  phone: string;
  message: string;
  lease: Lease;
};

// const app1 = {
//   id: '123id',
//   applicationDate: '2021-01-01',
//   status: 'Pending',
//   property: {
//     id: '123id',
//     name: 'Property 1',
//     description: 'Description'
//   },
//   manager: {
//     id: '123id',
//     name: 'Manager 1',
//     email: 'manager1@example.com',
//     phoneNumber: '1234567890',
//     userType: ['manager'],
//     likes: ['123id']
//   },
//   tenant: {
//     id: '123id',
//     name: 'Tenant 1',
//     email: 'tenant1@
// }