/**
 * @swagger
 * /author:
 *   get:
 *     summary: Get all authors
 *     description: Returns a list of all authors
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: List of authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     summary: Add a new author
 *     description: Creates a new author
 *     tags:
 *       - Authors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthorInput'
 *     responses:
 *       201:
 *         description: Author created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /author/{id}:
 *   get:
 *     summary: Get author by ID
 *     description: Returns a single author using author ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Author found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Update author details
 *     description: Updates author information using author ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthorInput'
 *     responses:
 *       200:
 *         description: Author updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */
