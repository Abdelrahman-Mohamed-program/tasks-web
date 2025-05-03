// Temporary in-memory data because monogo db is not working on my device
let posts = [
  {
  title:"",
  desc:""
  }
];

// Show all posts
function index(req, res) {
  res.status(200).json({
    method: "GET",
    totalResult: posts.length,
    data: posts,
  });
}

// Show one post
function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

// Create a new post
function store(req, res) {
  const post = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.status(201).json(post);
}

// Update post
function update(req, res) {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...req.body };
    res.json(posts[index]);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

// Delete post
function destroy(req, res) {
  const id = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== id);
  res.status(204).send(); // No content
}

module.exports = { index, show, store, update, destroy };