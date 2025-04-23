type UserFavorites = {
  userId: string;
  propertyId: string;
};

export const user_favorites_schema = {
  TableName: 'UserFavorites',
  KeySchema: [
    { AttributeName: 'userId', KeyType: 'HASH' }, // Partition key
    { AttributeName: 'propertyId', KeyType: 'RANGE' }, // Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: 'userId', AttributeType: 'S' },
    { AttributeName: 'propertyId', AttributeType: 'S' },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
};

export const parseSchema = (data: { [key: string]: any }) => ({
  userId: data.userId,
  propertyId: data.propertyId,
});

export const genSchema = (userId: string, propertyId: string) => ({
  userId,
  propertyId,
});

export const user_favorites = {
  parseSchema,
  genSchema,
  schema: () => user_favorites_schema,
};
