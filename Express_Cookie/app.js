// 1.
// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: true }));


// app.get('/step1', (req, res) => {
//   res.send(`<form method="post" action="/step1">
//               Name: <input name="name"/>
//               <button type="submit">Next</button>
//             </form>`);
// });
// app.post('/step1', (req, res) => {
//   req.session.name = req.body.name;
//   res.redirect('/step2');
// });


// app.get('/step2', (req, res) => {
//   res.send(`<form method="post" action="/step2">
//               Email: <input name="email"/>
//               <button type="submit">Next</button>
//             </form>`);
// });
// app.post('/step2', (req, res) => {
//   req.session.email = req.body.email;
//   res.redirect('/summary');
// });



// app.get('/summary', (req, res) => {
//   res.send(`Name: ${req.session.name}, Email: ${req.session.email}`);
// });

// app.listen(3000, () => console.log('Server is running'));




// 2.
// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cookieParser());

// app.get('/set-language/:lang', (req, res) => {
//   res.cookie('lang', req.params.lang, { maxAge: 900000 });
//   res.send(`Language set to ${req.params.lang}`);
// });

// app.get('/greet', (req, res) => {
//   const lang = req.cookies.lang || 'en';
//   const greetings = { en: 'Hello!', fr: 'Bonjour!', es: '¡Hola!' };
//   res.send(greetings[lang] || greetings.en);
// });

// app.listen(3001, () => console.log('Server is running'));






// 3.
// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({ secret: 'adminSecret', resave: false, saveUninitialized: true }));

// const users = {
//   admin: { password: '123', role: 'admin' },
//   user: { password: '123', role: 'user' }
// };

// app.get('/login', (req, res) => {
//   res.send(`<form method="post" action="/login">
//               Username: <input name="username"/>
//               Password: <input name="password" type="password"/>
//               <button type="submit">Login</button>
//             </form>`);
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   if (users[username] && users[username].password === password) {
//     req.session.user = { name: username, role: users[username].role };
//     res.redirect('/admin');
//   } else {
//     res.send('Invalid credentials');
//   }
// });

// function auth(role) {
//   return (req, res, next) => {
//     if (!req.session.user) return res.status(401).send('Not logged in');
//     if (req.session.user.role !== role) return res.status(403).send('Forbidden');
//     next();
//   };
// }

// app.get('/admin', auth('admin'), (req, res) => {
//   res.send('Welcome to the admin panel');
// });

// app.listen(3002, () => console.log('Server is running'));





// 4.
// const express = require('express');
// const session = require('express-session');

// const app = express();
// app.use(session({
//   secret: 'timeoutSecret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

// app.get('/', (req, res) => {
//   const remaining = req.session.cookie.maxAge / 1000;
//   res.send(`Session active. Expires in ${remaining} seconds.`);
// });

// app.listen(3003, () => console.log('Timeout warning at http://localhost:3003'));







// 5.
// const express = require('express');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cookieParser());
// app.use(session({ secret: 'cartSecret', resave: false, saveUninitialized: true }));

// app.get('/add/:item', (req, res) => {
//   if (req.session.user) {
//     req.session.cart = req.session.cart || [];
//     req.session.cart.push(req.params.item);
//     res.send(`Added ${req.params.item} to session cart`);
//   } else {
//     let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
//     cart.push(req.params.item);
//     res.cookie('cart', JSON.stringify(cart));
//     res.send(`Added ${req.params.item} to cookie cart`);
//   }
// });

// app.get('/login', (req, res) => {
//   req.session.user = { name: 'Alice' };
//   if (req.cookies.cart) {
//     req.session.cart = JSON.parse(req.cookies.cart);
//     res.clearCookie('cart');
//   }
//   res.send('Logged in and cart migrated');
// });

// // View cart
// app.get('/cart', (req, res) => {
//   if (req.session.user) {
//     res.json(req.session.cart || []);
//   } 
//   else {
//     res.json(req.cookies.cart ? JSON.parse(req.cookies.cart) : []);
//   }
// });

// app.listen(3004, () => console.log('Server is running'));
