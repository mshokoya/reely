import { CreateTableCommand, DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
  QueryCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';

type ReturnValues = 'ALL_NEW' | 'ALL_OLD' | 'NONE' | 'UPDATED_NEW' | 'UPDATED_OLD';

export class Database {
  private client: DynamoDBClient;
  private docClient: DynamoDBDocumentClient;

  constructor(config: DynamoDBClientConfig) {
    this.client = new DynamoDBClient(config);
    this.docClient = DynamoDBDocumentClient.from(this.client);
  }

  async createDynamoDBTables(tables: { [key: string]: any }[]) {
    for (const tableDefinition of tables) {
      try {
        // ts-expect-error tableDefinition
        const command = new CreateTableCommand(tableDefinition);
        await this.docClient.send(command);
        console.log(`Table ${tableDefinition.TableName} created successfully`);
      } catch (error) {
        console.error(`Error creating table ${tableDefinition.TableName}:`, error);
      }
    }
  }

  async putData(tableName: string, itemData: any): Promise<any> {
    const command = new PutCommand({
      TableName: tableName,
      Item: itemData,
    });

    const response = await this.docClient.send(command);
    return response;
  }

  async updateData(
    tableName: string,
    itemKeyValue: any,
    updateExpression: string,
    expressionAttributeValues: any,
    returnValues: ReturnValues = 'ALL_NEW',
  ): Promise<any> {
    const command = new UpdateCommand({
      TableName: tableName,
      Key: itemKeyValue,
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: returnValues,
    });

    const response = await this.docClient.send(command);
    return response;
  }

  async getData(tableName: string, itemKeyValue: any): Promise<any> {
    const command = new GetCommand({
      TableName: tableName,
      Key: itemKeyValue,
    });

    const response = await this.docClient.send(command);
    return response;
  }

  async queryData(
    tableName: string,
    keyConditionExpression: string,
    expressionAttributeValues: any,
    consistentRead: boolean = false,
  ): Promise<any> {
    const command = new QueryCommand({
      TableName: tableName,
      KeyConditionExpression: keyConditionExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ConsistentRead: consistentRead,
    });

    const response = await this.docClient.send(command);
    return response;
  }

  async scanData(
    tableName: string,
    filterExpression: string,
    expressionAttributeValues: any,
  ): Promise<any> {
    const command = new ScanCommand({
      TableName: tableName,
      FilterExpression: filterExpression,
      ExpressionAttributeValues: expressionAttributeValues,
    });

    const response = await this.docClient.send(command);
    return response;
  }
}
