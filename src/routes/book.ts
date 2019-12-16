import { Request, Response, Router } from 'express';

import { BookController } from '../controllers/book';

const bookRouter = Router();
const bookController = new BookController();

bookRouter.get('/', async (req: Request, res: Response) => {
    try {
        const booksColl = await bookController.getAll();

        res.status(200).json(booksColl);
    } catch (error) {
        res.status(500).json(error);
    }
});

bookRouter.post('/', async (req: Request, res: Response) => {
    try {
        const createdBook = await bookController.createBook(req.body);

        res.status(200).json(createdBook);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default bookRouter;
