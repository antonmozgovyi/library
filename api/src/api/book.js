const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json([
    {
      author: 'Isaac Asimov',
      title: 'Foundation',
      cover: 'https://www.parkablogs.com/sites/default/files/images/no-cover-image.jpg'
    },
    {
      author: 'Isaac Asimov',
      title: 'Foundation and Empire',
      cover: 'https://www.parkablogs.com/sites/default/files/images/no-cover-image.jpg'
    },
  ])
})

module.exports = router