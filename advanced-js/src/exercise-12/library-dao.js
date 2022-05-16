const fs = require('fs');
const path = require('path');
const rf = fs.promises.readFile;
const wf = fs.promises.writeFile;

class Library {
  constructor(storagePath) {
    this.bookStoragePath = storagePath
      ? storagePath
      : path.join(__dirname, 'books.json');
  }

  async getBook(code) {
    let books = await this._loadAllBooks();

    const result = books.find((b) => {
      return b.code === code;
    });

    return result;
  }

  async createBook(book) {
    const books = await this._loadAllBooks();

    if (this._isDuplicate(books, book.code)) {
      const e = new Error(`Book with code '${book.code}' already exists.`);
      e.code = 'DUPLICATE_CODE';
      throw e;
    }

    books.push(book);

    try {
      await wf(this._getStorageLocation(), JSON.stringify(books, null, 2));
      return { status: 'OK', data: book };
    } catch (e) {
      return { status: 'ERROR', error: e };
    }
  }

  async _loadAllBooks() {
    let books;
    try {
      books = JSON.parse(await rf(this._getStorageLocation()));
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.info('No storage found, initializing new one...');
        books = [];
      } else {
        throw new Error(
          'Unable to read from storage. Wrong data format. ' +
            this._getStorageLocation()
        );
      }
    }
    return books;
  }

  _isDuplicate(books, code) {
    const result = books.find((b) => {
      return b.code === code;
    });
    return result ? true : false;
  }

  _getStorageLocation() {
    return this.bookStoragePath;
  }
}

module.exports = Library;
