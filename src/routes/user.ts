import { Request, Response, Router } from 'express';

import { UserController } from '../controllers/user';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const createdUser = await userController.createUser(req.body);

        res.status(200).json(createdUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default userRouter;
