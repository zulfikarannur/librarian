import { Book } from '../models/book';
import { User } from '../models/user';

export class BooksDAO {
    public async getAllBooks() {
        const booksColl = await Book.findAll({
            include: [{
                model: User
            }]
        });

        return booksColl.map((book) => {
            return book.toJSON();
        });
    }

    public async createBook(bookData: any) {
        try {
            const createdBook = await Book.create({
                author: bookData.author,
                page: bookData.page,
                publisher: bookData.publisher,
                title: bookData.title,
                userId: bookData.user_id,
                year: bookData.year
            });

            return createdBook.toJSON();
        } catch (error) {
            throw error;
        }
    }
}
