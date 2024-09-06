/**
 * @swagger
 * /services/select-service:
 *   post:
 *     summary: Select a service
 *     description: Endpoint to select a service for a customer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceId:
 *                 type: string
 *                 description: The ID of the selected service
 *               customerId:
 *                 type: string
 *                 description: The ID of the customer selecting the service
 *     responses:
 *       200:
 *         description: Service selected successfully
 *       400:
 *         description: Bad request, check input fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /services/activate-service:
 *   post:
 *     summary: Activate a selected service
 *     description: Endpoint to activate a service for a customer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceId:
 *                 type: string
 *                 description: The ID of the selected service
 *               customerId:
 *                 type: string
 *                 description: The ID of the customer activating the service
 *     responses:
 *       200:
 *         description: Service activated successfully
 *       400:
 *         description: Bad request, check input fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /services/get-services:
 *   get:
 *     summary: Get all services
 *     description: Retrieve a list of all available services.
 *     responses:
 *       200:
 *         description: List of services retrieved successfully
 *       500:
 *         description: Internal server error
 */

const express = require('express');
const { getAllServices, selectService, activateService } = require('../controllers/servicecontroller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/select-service', selectService);
router.post('/activate-service', activateService);
router.get('/get-services', getAllServices);

module.exports = router;
