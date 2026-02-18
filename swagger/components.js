/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "The God of Small Things"
 *         price:
 *           type: string
 *           example: "399.00"
 *         rating:
 *           type: string
 *           example: "4.3"
 *         published_year:
 *           type: integer
 *           example: 1997
 *         author_id:
 *           type: integer
 *           example: 1
 *         in_stock:
 *           type: integer
 *           example: 12
 *         image_url:
 *           type: string
 *           format: uri
 *           example: "https://covers.openlibrary.org/b/isbn/9780679457312-L.jpg"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2026-02-11T13:32:37.000Z"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AuthorInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         nationality:
 *           type: string
 *       required:
 *         - name
 *         - nationality
 * 
 *     Author:
 *       allOf:
 *         - $ref: '#/components/schemas/AuthorInput'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *             name_key:
 *               type: string
 */
