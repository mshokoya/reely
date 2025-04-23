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
  locationId: string;
  userId: string;
};

export const properties_schema = {
  TableName: 'Properties',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
    // { AttributeName: 'name', AttributeType: 'S' },
    // { AttributeName: 'description', AttributeType: 'S' },
    // { AttributeName: 'pricePerMonth', AttributeType: 'N' },
    // { AttributeName: 'securityDeposit', AttributeType: 'N' },
    // { AttributeName: 'applicationFee', AttributeType: 'N' },
    // { AttributeName: 'photoUrls', AttributeType: 'S' },
    // { AttributeName: 'anemities', AttributeType: 'S' },
    // { AttributeName: 'highlights', AttributeType: 'S' },
    // { AttributeName: 'isPetsAllowed', AttributeType: 'BOOL' },
    // { AttributeName: 'isParkingIncluded', AttributeType: 'BOOL' },
    // { AttributeName: 'beds', AttributeType: 'N' },
    // { AttributeName: 'baths', AttributeType: 'N' },
    // { AttributeName: 'squareFeet', AttributeType: 'N' },
    // { AttributeName: 'propertyType', AttributeType: 'S' },
    // { AttributeName: 'postedDate', AttributeType: 'S' },
    // { AttributeName: 'averageRating', AttributeType: 'N' },
    // { AttributeName: 'numberOfReviews', AttributeType: 'N' },
    { AttributeName: 'locationId', AttributeType: 'S' },
    { AttributeName: 'userId', AttributeType: 'S' },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'UserIndex',
      KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
    },
    {
      IndexName: 'LocationTypeIndex',
      KeySchema: [
        { AttributeName: 'locationId', KeyType: 'HASH' },
        // { AttributeName: 'propertyType', KeyType: 'RANGE' },
      ],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
    },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
};

const parseSchema = (data: { [key: string]: any }) => ({
  id: data.id,
  name: data.name,
  description: data.description,
  pricePerMonth: data.pricePerMonth,
  securityDeposit: data.securityDeposit,
  applicationFee: data.applicationFee,
  photoUrls: data.photoUrls.join(','),
  amenities: data.amenities.join(','),
  highlights: data.highlights.join(','),
  isPetsAllowed: data.isPetsAllowed,
  isParkingIncluded: data.isParkingIncluded,
  beds: data.beds,
  baths: data.baths,
  squareFeet: data.squareFeet,
  propertyType: data.propertyType,
  postedDate: data.postedDate,
  averageRating: data.averageRating,
  numberOfReviews: data.numberOfReviews,
  locationId: data.locationId,
  userId: data.userId,
});

const genSchema = (
  id: string,
  name: string,
  description: string,
  pricePerMonth: number,
  securityDeposit: number,
  applicationFee: number,
  photoUrls: string[],
  amenities: string[],
  highlights: string[],
  isPetsAllowed: boolean,
  isParkingIncluded: boolean,
  beds: number,
  baths: number,
  squareFeet: number,
  propertyType: string,
  postedDate: Date,
  averageRating: number,
  numberOfReviews: number,
  locationId: string,
  userId: string,
) => ({
  id,
  name,
  description,
  pricePerMonth,
  securityDeposit,
  applicationFee,
  photoUrls: photoUrls.join(','),
  amenities: amenities.join(','),
  highlights: highlights.join(','),
  isPetsAllowed,
  isParkingIncluded,
  beds,
  baths,
  squareFeet,
  propertyType,
  postedDate,
  averageRating,
  numberOfReviews,
  locationId,
  userId,
});

export const properties = {
  parseSchema,
  genSchema,
  schema: () => properties_schema,
};
