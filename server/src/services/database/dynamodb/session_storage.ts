import { DynamoDBStore } from '@pwrdrvr/dynamodb-session-store';
import { dynamoDBClient } from './database';

export const dynamoDBSessionStorage = () => {
  return new DynamoDBStore({
    tableName: 'some-table',
    dynamoDBClient,
    touchAfter: 60 * 60, // 60 minutes in seconds
  });
};
