1.
// const express = require('express');
// const app = express();
// const requestLogger = require('./middleware/logger');

// app.use(requestLogger);

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Server running on port 3000'));








2.
// const express = require('express');
// const app = express();
// const mfaMiddleware = require('./middleware/mfa');

// app.get('/sensitive', mfaMiddleware, (req, res) => {
//   res.send('Sensitive operation allowed');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));






// 3. 
// const mongoose = require('mongoose');
// const User = require('./models/User');

// (async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/test');
//     console.log("MongoDB Connected");

//     // Create user
//     const user = new User({ username: 'Alice' });
//     await user.save();
//     console.log('User created:', user);

//     // Login
//     await user.login();
//     console.log('After login:', user);

//     // Logout
//     await user.logout();
//     console.log('After logout:', user);

//     await mongoose.disconnect();
//   } catch (err) {
//     console.error(err);
//   }
// })();








4.
// const mongoose = require('mongoose');
// const Post = require('./models/Post');

// (async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/test');
//     console.log("MongoDB Connected");

//     // Create a new post
//     const post = new Post({
//       title: 'Hello',
//       content: 'World'
//     });

//     await post.save();
//     console.log("Saved Post:", post);

//     // Soft delete the post
//     await post.softDelete();
//     console.log("Post soft deleted");

//     // Find all visible posts
//     const posts = await Post.find();

//     console.log("Visible Posts:", posts);

//     await mongoose.disconnect();
//   } catch (err) {
//     console.error(err);
//   }
// })();








5.
const express = require('express');

const app = express();
app.use(express.json());

// Custom sanitization middleware
app.use((req, res, next) => {
  const sanitize = (obj) => {
    if (!obj) return obj;

    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key]
          .replace(/<script.*?>.*?<\/script>/gi, '')
          .replace(/[<>]/g, '');
      }
    }
    return obj;
  };

  req.body = sanitize(req.body);
  next();
});

// Test route
app.post('/submit', (req, res) => {
  res.json({
    message: 'Sanitized Data Received',
    data: req.body
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});