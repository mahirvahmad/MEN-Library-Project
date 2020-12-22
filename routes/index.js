const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index')
})

module.exports = router;