import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MyBook API',
      description: `MyBook API is a RESTful service for managing books and authors.
                    It allows clients to add, retrieve, update, and delete books and authors, as
                   well as filter books based on price, rating, or publication year. The API's provided endpoints are mentioned below:`,
      version: '1.0.0',
    },
    tags: [
      {
        name: "Books",
        description: "Get all books route",
      },
      {
        name: "Authors",
        description: "Get all authors route",
      }
    ],
    servers: [
      {
        url: `http://localhost:3000`,
        description: "Development Server"
      },
    ]
  },
  apis: ['./swagger/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
