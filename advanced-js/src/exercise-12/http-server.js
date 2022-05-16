const express = require('express');
const bodyParser = require('body-parser');
const Library = require('./library-dao');
const morgan = require('morgan');

const library = new Library();
const app = express();

app.listen(5000, () => {
  console.log('Server started on port 5000.');
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Juch' });
});
app.get('/getBook', async (req, res) => {
  const { query } = req;

  const bookCode = query.code;
  if (!bookCode) {
    return res.status(400).send({ error: 'Code attribute not assigned' });
  }

  const book = await library.getBook(bookCode);

  if (!book) {
    return res
      .status(400)
      .send({ error: `Book with the specified code does not exist` });
  }
  res.json(book);
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
      res.status(400).send({
        error: 'The book already exists in the database - duplicate code',
      });
    } else {
      res.status(500).send({
        error: 'Unexpecter error',
      });
    }
    return res.send({ error: e.message });
  }

  res.json(book);
});
