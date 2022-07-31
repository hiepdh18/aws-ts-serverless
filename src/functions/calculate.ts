import { SQSEvent, SQSHandler, SQSRecord } from 'aws-lambda';

export const handler: SQSHandler = async (event: SQSEvent) => {
  const records: SQSRecord[] = event.Records;
  records.forEach((record: SQSRecord) => {
    // const parsedBody = JSON.parse(record.body);
    console.log('Message received', record.body);
  });
};
