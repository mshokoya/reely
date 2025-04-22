import { database } from '..';

type User = {
  id: string;
  email: string;
  userType: ('tenant' | 'manager')[];
  phone: string;
};

const user_schema = {
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'cognitoId', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
    { AttributeName: 'email', AttributeType: 'S' },
    { AttributeName: 'userType', AttributeType: 'S' },
    { AttributeName: 'phone', AttributeType: 'S' },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'EmailIndex',
      KeySchema: [{ AttributeName: 'email', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    },
    {
      IndexName: 'UserTypeIndex',
      KeySchema: [{ AttributeName: 'userType', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
};

const parseSchema = (data: { [key: string]: any }) => ({
  id: data.id,
  email: data.email,
  userType: data.userType.split(','),
  phone: data.phone,
});

const genSchema = (id: string, email: string, userType: string[], phone: string) => ({
  id,
  email,
  userType: userType.join(','),
  phone,
});

const actions = {
  createUser: async (user: User) =>
    await database.putData('Users', genSchema(user.id, user.email, ['tenant'], '')),
};

export const users = {
  actions,
  parseSchema,
  genSchema,
  schema: () => user_schema,
};