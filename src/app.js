const express = require('express');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('config');
const logger = require('./utils/logger');

require('./passport');

const auth = require('./api/auth/authController');
const user = require('./api/user/userController');
const version = require('./api/version/versionController');
const project = require('./api/vtom/project/projectController');
const consign = require('./api/vtom/consignation/consignController');

const app = express();
const { port, root } = config.get('api');

function logErrors(err, req, res, next) {
  logger.error(err);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something went wrong.' });
  } else {
    next(err);
  }
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(`${root}/auth`, auth);
app.use(`${root}/users`, passport.authenticate('jwt', { session: false }), user);
app.use(`${root}/version`, passport.authenticate('jwt', { session: false }), version);
app.use(`${root}/vtom/project`, passport.authenticate('jwt', { session: false }), project);
app.use(`${root}/vtom/consignation`, passport.authenticate('jwt', { session: false }), consign);
app.use(logErrors);
app.use(clientErrorHandler);

app.get('/', (req, res) => {
  res.send('Hello World! I am the Backend API of our Portal DaD');
});

app.listen(port, '0.0.0.0');

logger.info(`Server start listening port: ${port}`);


/************Push notif to be continued */
// const webpush = require('web-push');
// const { PUBLIC_VAPID, PRIVATE_VAPID } = config.get('pushNotification');
// webpush.setVapidDetails('mailto:fakher.hannafi.prestataire@bpce-it.fr', PUBLIC_VAPID, PRIVATE_VAPID);
// const fakeDatabase = [];
// app.post('/subscription', (req, res) => {
//   const subscription = req.body
//   fakeDatabase.push(subscription)
//   res.status(201).json({})
//   const payload = JSON.stringify({ title: 'Push test' })
//   webpush.sendNotification(subscription, payload)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))
// })

// app.post('/sendNotification', (req, res) => {
//   const notificationPayload = {
//     notification: {
//       title: 'New Notification',
//       body: 'This is the body of the notification',
//       icon: 'assets/icons/icon-512x512.png',
//     },
//   }

//   const promises = []
//   fakeDatabase.forEach(subscription => {
//     promises.push(
//       webpush.sendNotification(
//         subscription,
//         JSON.stringify(notificationPayload)
//       )
//     )
//   })
//   Promise.all(promises).then(() => res.sendStatus(200))
// })