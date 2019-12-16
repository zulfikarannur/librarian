import { UserDAO } from '../data_access/user';

const userDAO = new UserDAO();

export class UserController {
    public async createUser(userData: any) {
        try {
            return userDAO.createUser(userData);
        } catch (error) {
            throw error;
        }
    }
}
