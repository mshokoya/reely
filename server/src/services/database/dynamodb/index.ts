import { Database } from './database';
// import { applications, payments, properties, user_favorites, users, leases } from './schemas';

export const database = (() => {
  const database = new Database({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    // endpoint: 'http://localhost:8000',
  });

  // (async () => {
  //   await database.createDynamoDBTables([
  //     applications.schema(),
  //     payments.schema(),
  //     properties.schema(),
  //     user_favorites.schema(),
  //     users.schema(),
  //     leases.schema(),
  //   ]);
  // })();

  return database;
})();
