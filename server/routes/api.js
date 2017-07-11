const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var users = [{
    id: '123',
    name: 'Parag'
  },
  {
    id: '124',
    name: 'Parag1'
  },
  {
    id: '125',
    name: 'Parag2'
  },
  {
    id: '126',
    name: 'Parag3'
  },
  {
    id: '127',
    name: 'Jignesh'
  },
    {
    id: '128',
    name: 'Sanket'
  },
];
/* GET api listing. */
router.get('/', (req, res) => {
  res.json(users);
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
