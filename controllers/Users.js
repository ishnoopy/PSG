
const psgController = require('../system/core/psgController')

class Users extends psgController{

    constructor(){
        super();
        this.loadModel('User');
    }

    greet(request, response){
        console.log(request.params.id)
        const userId = request.params.id; /*DOCU: This is the GET Data. */

        /*DOCU: This works because JS looks for the User property object in Users object.
        but when it doesn't find it, it looks up the prototype chain and finds it on
        this.model object defined in psgController. */
        const user = User.getUser(userId);
        
        response.json(user)
    }

    
}


module.exports = new Users();