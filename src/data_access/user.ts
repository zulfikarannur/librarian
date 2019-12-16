import { User } from '../models/user';

export class UserDAO {
    public async createUser(userData: any) {
        try {
            const createdUser = await User.create({
                name: userData.name
            });

            return createdUser.toJSON();
        } catch (error) {
            throw error;
        }
    }
}
