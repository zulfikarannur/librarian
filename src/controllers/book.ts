import { BooksDAO } from '../data_access/book';

const bookDAO = new BooksDAO();

export class BookController {
    public async getAll() {
        try {
            return bookDAO.getAllBooks();
        } catch (error) {
            throw error;
        }
    }

    public async createBook(bookData: any) {
        try {
            return bookDAO.createBook(bookData);
        } catch (error) {
            throw error;
        }
    }
}
