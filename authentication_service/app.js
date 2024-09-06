const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authroutes');
const documentRoutes = require('./routes/documentroutes'); // Update this to documentroutes for consistency
const serviceRoutes = require('./routes/serviceroutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Swagger setup for Authentication Service
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Unified API Documentation',
            version: '1.0.0',
            description: 'API documentation for Authentication Service and Document Service',
        },
        servers: [
            {
                url: 'http://localhost:5004', // Update with your server URL if different
                description: 'Local server',
            },
        ],
    },
    apis: ['./routes/*.js', './controllers/*.js'], // Include all route and controller files with Swagger annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/documents', documentRoutes); // Corrected to use documentRoutes
app.use('/services', serviceRoutes);

module.exports = app;
