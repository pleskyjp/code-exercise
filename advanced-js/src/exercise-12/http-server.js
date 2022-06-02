const express = require('express');
const bodyParser = require('body-parser');
const Library = require('./library-dao');
const morgan = require('morgan');
const LRU = require('lru-cache');

const options = {
  max: 500,

  // for use with tracking overall storage size
  maxSize: 5000,
  sizeCalculation: (value, key) => {
    return 1;
  },

  // how long to live in ms
  ttl: 1000 * 60 * 5,

  // return stale items before removing from cache?
  allowStale: false,

  updateAgeOnGet: false,
  updateAgeOnHas: false,
};

const app = express();
const library = new Library();
const cache = new LRU(options);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Juch');
});
app.get('/getBook', async (req, res) => {
  const { query } = req;

  const bookCode = query.code;
  if (!bookCode) {
    return res.status(400).send({ error: 'Code attribute not assigned' });
  }

  const cachedBook = cache.get(bookCode);

  if (cachedBook) {
    return res.json(cachedBook);
  } else {
    const book = await library.getBook(bookCode);

    if (!book) {
      return res
        .status(400)
        .send({ error: `Book with the specified code does not exist` });
    }
    cache.set(book.code, book);

    return res.json(book);
  }
});

app.post('/createBook', async (req, res) => {
  const { body } = req;

  if (!body.code || !body.name || !body.author) {
    return res
      .status(400)
      .send({ error: 'No attribute code, name or author specified' });
  }

  const book = {
    code: body.code,
    name: body.name,
    author: body.author,
  };

  try {
    await library.createBook(book);
  } catch (e) {
    if (e.code == 'DUPLICATE_CODE') {
      return res.status(400).send({
        error: 'The book already exists in the database - duplicate code',
      });
    } else {
      return res.status(500).send({
        error: 'Unexpecter error',
      });
    }
  }

  return res.json(book);
});

app.listen(5000, () => {
  console.log('Server started on port 5000.');
});
