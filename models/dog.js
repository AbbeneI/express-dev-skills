const dogs = [
	{ name: 'Fred', breed: 'Husky', friendly: true },
	{ name: 'Percy', breed: 'Husky', friendly: true },
	{ name: 'Honey', breed: 'Mixed breed', friendly: true },
	{ name: 'George', breed: 'Golden Retriver', friendly: true }
]

// READ - Index get all of data (todos)
function getAll()  {
    return dogs;
}

//READ - show 1 object based on the id
function getBreed(name) {
	// req.params come in as strings always. If we need another data type we need to change that string to the type we need
	
	
	// I want to find the first element/item that matches my check
	// If nothing is found matching that check I want to return -1
	// let dogArr = [];
	//  dogs.forEach(dog => {
	// 	if(dog.breed === breed){
	// 		dogArr.push(dog);
	// 	}
	// });
	// return dogArr;

	return dogs.find(dog => dog.name === name);

}

// exporting to use elsewhere in my app
module.exports = {
    getAll,
	getBreed
}