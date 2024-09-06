/**
 * @swagger
 * /documents/upload:
 *   post:
 *     summary: Upload a document
 *     description: Endpoint to upload a document to the server.
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: document
 *         type: file
 *         description: The document file to upload.
 *     responses:
 *       200:
 *         description: Document uploaded successfully
 *       400:
 *         description: Bad request, check file input
 *       500:
 *         description: Internal server error
 */
const express = require('express');
const uploadDocument = require('../controllers/documentcontroller');

const router = express.Router();

router.post('/upload', uploadDocument);

module.exports = router;
