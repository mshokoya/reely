type ApplicationSchema = {
  id: string;
  applicationDate: Date;
  status: 'pending' | 'approved' | 'rejected';
  propertyId: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  leaseId: string;
};

const application_schema = {
  TableName: 'Applications',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
    { AttributeName: 'propertyId', AttributeType: 'S' },
    { AttributeName: 'userId', AttributeType: 'S' },
    { AttributeName: 'status', AttributeType: 'S' },
    { AttributeName: 'applicationDate', AttributeType: 'S' },
    { AttributeName: 'name', AttributeType: 'S' },
    { AttributeName: 'email', AttributeType: 'S' },
    { AttributeName: 'phone', AttributeType: 'S' },
    { AttributeName: 'message', AttributeType: 'S' },
    { AttributeName: 'leaseId', AttributeType: 'S' },
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
    {
      IndexName: 'StatusIndex',
      KeySchema: [{ AttributeName: 'status', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
};

const genSchema = ({
  id,
  applicationDate,
  status,
  propertyId,
  userId,
  name,
  email,
  phone,
  message,
  leaseId,
}: ApplicationSchema) => ({
  id,
  applicationData: applicationDate.toDateString(),
  status,
  propertyId,
  userId,
  name,
  email,
  phone,
  message,
  leaseId,
});

const parseSchema = (data: ApplicationSchema) => ({
  id: data.id,
  applicationData: new Date(data.applicationDate),
  status: data.status,
  propertyId: data.propertyId,
  userId: data.userId,
  name: data.name,
  email: data.email,
  phone: data.phone,
  message: data.message,
  leaseId: data.leaseId,
});

export const applications = {
  parseSchema,
  genSchema,
  schema: () => application_schema,
};
