    /**
 * @swagger
 * /book:
 *   get:
 *     summary: Get all books
 *     description: Returns a list of all books available in the system.
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /book:
 *   post:
 *     summary: Add a new book
 *     description: Creates a new book record in the system.
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - price
 *               - author_name
 *               - nationality
 *               - in_stock
 *             properties:
 *               title:
 *                 type: string
 *                 example: "System Design"
 *               price:
 *                 type: string
 *                 example: "500"
 *               rating:
 *                 type: string
 *                 example: "4.5"
 *               published_year:
 *                 type: integer
 *                 example: 2020
 *               author_name:
 *                 type: string
 *                 example: "John due"
 *               nationality:
 *                 type: string
 *                 example: "American"
 *               in_stock:
 *                 type: integer
 *                 example: 50
 *               image_url:
 *                 type: string
 *                 format: uri
 *                 example: "https://covers.openlibrary.org/b/isbn/9780679457312-L.jpg"
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /book/filter:
 *      get:
 *        summary: filter the books
 *        description: Return a list of filtered book
 *        tags:
 *          - Books
 *        parameters:
 *           - name: maxPrice
 *             in: query
 *             required: false
 *             schema:
 *                type: string
 *           - name: rating
 *             in: query
 *             required: false
 *             schema:
 *                type: string
 *           - name: published_year
 *             in: query
 *             required: false
 *             schema:
 *                type: integer
 *        responses:
 *            200:
 *              description: A list of filtered books
 *              content:
 *                 application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/Book'
 *            500:
 *              description: Internal server error
 */

/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Returns a single book by its ID
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     summary: Update a book by ID
 *     description: Updates book details using book ID
 *     tags:
 *       - Books
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
 *             type: object
 *             required:
 *               - title
 *               - price
 *               - in_stock
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: string
 *               rating:
 *                 type: string
 *               published_year:
 *                 type: integer
 *               in_stock:
 *                 type: integer
 *               image_url:
 *                 type: string
 *                 format: uri
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete a book by ID
 *     description: Deletes a book using its ID
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /book/author/{id}:
 *   put:
 *     summary: Update author name in books table
 *     description: Updates author name in book details using book ID
 *     tags:
 *       - Books
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
 *             type: object
 *             properties:
 *               author_name:
 *                 type: string
 *               nationality:
 *                 type: string
 *     responses:
 *       200:
 *         description: Author updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */

