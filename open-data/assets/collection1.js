const dropdown = document.querySelector('#borough') // Get the dropdown menu
const dropdown_year = document.querySelector('#movieyear') // Get the dropdown menu

// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	collectionList.innerHTML = "";

	// Loop through each item in the collection array
	collection.forEach((item) => {
		const listItem = document.createElement('li') // Make the `li`


		// You can make each element inside of that…
		const itemAnimalName = document.createElement('h2') // Make an `h2`
		itemAnimalName.innerHTML = item.animalname // Put the JSON title inside
		listItem.appendChild(itemAnimalName) // And add it to the `li`!

		// const itemImage = document.createElement('img') // And an image
		// itemImage.src = item.posterImage // Set the `src` attribute from the JSON
		// listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
        `
            <p>Released in <time>${item.year}</time></p>
            <p>${item.director}</p>
            <p><em>${item.location}</em></p>
            <a href="${item.imdbLink}">
                <p>${item.title}→</p>
            </a>
    `
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.alsoWriter) { // If this is `false`
		// 	listItem.classList.add('faded') // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}

// collection.forEach(dog => {
// 	if (dog.breedname == 'Beagle') beagleCount = beagleCount + 1 // Increment the counter
// 	// if (squirrel.breedname == 'Beagle') beagleCount++ // Shorthand for incrementing
// 	else pugcount = pugcount + 1
// })


// 	console.log('Beagle: ' + beagleCount)
// 	console.log('Pug: ' + pugcount)


let localData = [] // Set up an empty object for our local data (`let` because it will change)


dropdown_breed.onchange = () => {
	// const all = localData.filter(dog => dog.breedname == '');
	const breed = localData.filter(dog => dog.breedname == 'Labrador Retriever');
	const Mbreed = localData.filter(dog => dog.breedname == 'Maltese');
	const Cbreed = localData.filter(dog => dog.breedname == 'Chihuahua');
	const Pbreed = localData.filter(dog => dog.breedname == 'Poodle');
	const Ybreed = localData.filter(dog => dog.breedname == 'Yorkshire Terrier');
	const Ubreed = localData.filter(dog => dog.breedname == 'Unknown');


	if (dropdown_breed.value == 'Labrador Retriever'){
		renderItems(breed);
		console.log(localData);
	}
	else if (dropdown_breed.value == 'Maltese') {
		renderItems(Mbreed)
	
	}
	else if (dropdown_breed.value == 'Chihuahua') {
		renderItems(Cbreed)
	
	}
	else if (dropdown_breed.value == 'Poodle') {
		renderItems(Pbreed)
	
	}
	else if (dropdown_breed.value == 'Yorkshire Terrier') {
		renderItems(Ybreed)
	
	}
	else if (dropdown_breed.value == 'Unknown') {
		renderItems(Ubreed)
	
	}
	else  {
		renderItems(localData) ;
	
	}
	// console.log(breed)
}






// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		localData = collection
		// parseData(localData)
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})



