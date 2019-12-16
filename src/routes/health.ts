import { Request, Response, Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Express ok'
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

export default healthRouter;
