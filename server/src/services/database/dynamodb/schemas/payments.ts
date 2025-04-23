type PaymentSchema = {
  id: string;
  amountDue: number;
  amountPaid: number;
  dueDate: Date;
  paymentDate: Date;
  paymentStatus: 'pending' | 'paid' | 'overdue' | 'partially_paid';
  leaseId: string;
};

const payments_schema = {
  TableName: 'Payments',
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' },
    // { AttributeName: 'amountDue', AttributeType: 'S' },
    // { AttributeName: 'amountPaid', AttributeType: 'S' },
    // { AttributeName: 'dueDate', AttributeType: 'S' },
    // { AttributeName: 'paymentDate', AttributeType: 'S' },
    // { AttributeName: 'paymentStatus', AttributeType: 'S' },
    { AttributeName: 'leaseId', AttributeType: 'S' },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'LeaseIndex',
      KeySchema: [{ AttributeName: 'leaseId', KeyType: 'HASH' }],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
    },
    // {
    //   IndexName: 'StatusIndex',
    //   KeySchema: [{ AttributeName: 'paymentStatus', KeyType: 'HASH' }],
    //   Projection: { ProjectionType: 'ALL' },
    //   ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    // },
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 },
};

const parseSchema = (data: { [key: string]: any }) => ({
  id: data.id,
  amountDue: parseInt(data.amountDue),
  amountPaid: parseInt(data.amountPaid),
  dueDate: new Date(data.dueDate),
  paymentDate: new Date(data.paymentDate),
  paymentStatus: data.paymentStatus,
  leaseId: data.leaseId,
});

const genSchema = (
  id: string,
  amountDue: number,
  amountPaid: number,
  dueDate: Date,
  paymentDate: Date,
  paymentStatus: 'pending' | 'paid' | 'overdue' | 'partially_paid',
  leaseId: string,
) => ({
  id,
  amountDue: amountDue.toString(),
  amountPaid: amountPaid.toString(),
  dueDate: dueDate.toString(),
  paymentDate: paymentDate.toString(),
  paymentStatus,
  leaseId,
});

export const payments = {
  parseSchema,
  genSchema,
  schema: () => payments_schema,
};
