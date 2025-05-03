const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postController = require('./app/controller/post.controller'); // Adjust if the path differs

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/posts', postController.index);
app.get('/posts/:id', postController.show);
app.post('/posts', postController.store);
app.put('/posts/:id', postController.update);
app.delete('/posts/:id', postController.destroy);

app.get('/', (req, res) => {
    res.send('API is running...');
  });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});