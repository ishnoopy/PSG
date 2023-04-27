const router = require('express').Router();

/*DOCU: Declare controllers and instantiate it.*/
const Controller = require('../system/core/Controllers');

/*DOCU: Home page route. */
router.get('/', (request, response)=>{
    response.render('index');
})

/*DOCU: Declare route here and the corresponding Controller['controllerName']->Method. */
router.get('/greet/:id', Controller['Users'].greet);


module.exports = router;
