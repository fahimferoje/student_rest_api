const express = require('express');
const router = express.Router();
const students = require('./students.js');

router.use('/students', students);

//export this router to use in our index.js
module.exports = router;