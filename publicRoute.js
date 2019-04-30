const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('On public route.');
});

//export this router to use in our index.js
module.exports = router;