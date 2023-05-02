

const dogData = require('../models/dog');

//renders the index
function index(req, res) {

    res.render('dogs/index', {
        dog: dogData.getAll()
    })

}

function show(req, res) {
    // console.log(req.params)
    res.render('dogs/getBreed', {
        // this line defines an object with the key of todo and value of the id??
        dog: dogData.getBreed(req.params.name)
    })
}


module.exports = {
    index,
    show
}