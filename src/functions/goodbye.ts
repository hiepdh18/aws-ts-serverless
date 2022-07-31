import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = event.body;
    const parsedBody = JSON.parse(requestBody || '');
    return {
      statusCode: 200,
      body: `Goodbye my friend, ${parsedBody?.name}! 🚀`,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `An error occurred => ${error}`,
    };
  }
};
