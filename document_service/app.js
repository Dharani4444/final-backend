const express = require('express');
const documentRoutes = require('./routes/documentroute');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Swagger setup for Document Service
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Document Service API',
            version: '1.0.0',
            description: 'API documentation for the Document Service',
        },
    },
    apis: ['./routes/documentroute.js'], // Path to your routes file with Swagger annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/documents', documentRoutes);
app.options('*', cors());

module.exports = app;
