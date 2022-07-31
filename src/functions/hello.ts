import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: `Hello bud, you are my friend!! 🚀`,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `An error occurred => ${error}`,
    };
  }
};
