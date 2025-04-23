import { doesNotMatch } from 'assert';
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
    { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
    { AttributeName: 'email', AttributeType: 'S' },
    // { AttributeName: 'userType', AttributeType: 'S' },
    // { AttributeName: 'phone', AttributeType: 'S' },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'EmailIndex',
      KeySchema: [{ AttributeName: 'email', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
    },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
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
  getUser: async (id: string) => {
    const user = await database.getData(user_schema.TableName, { id });
    return user.Item;
  },
  createUser: async (id: string, email: string) => {
    const user = { id, email, userType: ['tenant'], phone: '' };
    let fmtUser = genSchema(user.id, user.email, user.userType, user.phone);
    await database.putData(user_schema.TableName, fmtUser);
    return user;
  },
};

export const users = {
  actions,
  parseSchema,
  genSchema,
  schema: () => user_schema,
};
