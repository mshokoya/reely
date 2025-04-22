type LeaseSchema = {
  id: string;
  startDate: Date;
  endDate: Date;
  rent: number;
  deposit: number;
  propertyId: string;
  userId: string;
};

const leases_schema = {
  TableName: 'Leases',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
    { AttributeName: 'startDate', AttributeType: 'S' },
    { AttributeName: 'endDate', AttributeType: 'S' },
    { AttributeName: 'rent', AttributeType: 'S' },
    { AttributeName: 'deposit', AttributeType: 'S' },
    { AttributeName: 'propertyId', AttributeType: 'S' },
    { AttributeName: 'userId', AttributeType: 'S' },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'PropertyIndex',
      KeySchema: [{ AttributeName: 'propertyId', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    },
    {
      IndexName: 'TenantIndex',
      KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
};

const parseSchema = (data: { [key: string]: any }) => ({
  id: data.id,
  startDate: new Date(data.startDate),
  endDate: new Date(data.endDate),
  rent: parseInt(data.rent),
  deposit: parseInt(data.deposit),
  propertyId: data.propertyId,
  userId: data.userId,
});

const genSchema = (
  id: string,
  startDate: Date,
  endDate: Date,
  rent: number,
  deposit: number,
  propertyId: string,
  userId: string,
) => ({
  id,
  startDate: startDate.toString(),
  endDate: endDate.toString(),
  rent: rent.toString(),
  deposit: deposit.toString(),
  propertyId,
  userId,
});

export const leases = {
  parseSchema,
  genSchema,
  schema: () => leases_schema,
};
