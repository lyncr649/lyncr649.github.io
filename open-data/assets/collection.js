// // Your data URL
// const url = './col'

// const graph = document.querySelector('#graph') // Get out graph element (`const`, does not change)
// const dropdown = document.querySelector('#shift') // Get the dropdown menu



// // Do something with the data!
// const parseData = (data) => {
// 	// Set up variables for the counts
// 	let year = 0 // These are `let` because they will change
// 	let cinnamonCount = 0
// 	let blackCount = 0
// 	let undefinedCount = 0

// 	// Go through each item in the object
// 	data.forEach(squirrel => {
// 		if (squirrel.primary_fur_color == 'Gray') year = year + 1 // Increment the counter
// 		// if (squirrel.primary_fur_color == 'Gray') grayCount++ // Shorthand for incrementing
// 		else if (squirrel.primary_fur_color == 'Cinnamon') cinnamonCount = cinnamonCount + 1
// 		else if (squirrel.primary_fur_color == 'Black') blackCount = blackCount + 1
// 		else undefinedCount = undefinedCount + 1
// 	})

// 	// Some telemetry!
// 	console.log('Gray: ' + grayCount)
// 	console.log('Cinnamon: ' + cinnamonCount)
// 	console.log('Black: ' + blackCount)
// 	console.log('Undefined: ' + undefinedCount)

// 	// Add CSS variables (custom properties) on the graph, with the counts
// 	graph.style.setProperty('--gray', grayCount)
// 	graph.style.setProperty('--cinnamon', cinnamonCount)
// 	graph.style.setProperty('--black', blackCount)
// 	graph.style.setProperty('--undefined', undefinedCount)
// }



// // Watch for any change on the dropdown
// dropdown.oninput = () => {
// 	// Filter the locally-copied data
// 	const dataAm = localData.filter(squirrel => squirrel.shift == 'AM')
// 	const dataPm = localData.filter(squirrel => squirrel.shift == 'PM')

// 	// Parse either set depending on the dropdown value
// 	if (dropdown.value == 'Morning') parseData(dataAm)
// 	else if (dropdown.value == 'Afternoon') parseData(dataPm)
// 	else parseData(localData) // Send the whole, unfiltered dataset
// }



// // This got pretty complicated, but it should make the API less annoying! 🤞
// caches.open('cachedData') // Set up a cache for our data
// 	.then(cache => {
// 		// See if there is already a cached response for our dataset
// 		cache.match(url)
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log('Loading data from cache…')
// 				localData = data // Save the data out to our local, global variable
// 				parseData(localData) // And parse it!
// 			})
// 			// If there is not a cache, let’s get and make one
// 			.catch(error => {
// 				fetch(url + '?$select=count(*)') // First, go get the total number of rows (entries)
// 					.then(response => response.json())
// 					.then(data => {
// 						let rowCount = data[0].count // Get the count out of this response
// 						// Use the count as the limit for the API request, to get the full dataset
// 						fetch(url + '?$limit=' + rowCount)
// 							.then(response => {
// 								cache.put(url, response.clone()) // Cache a copy for next time
// 								return response.json()
// 							})
// 							.then(data => {
// 								console.log('Loading data from API…')
// 								localData = data // Same as above!
// 								parseData(localData)
// 							})
// 					})
// 			})
// 	})










// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`


		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.posterImage // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Released in <time>${item.year}</time></p>
                <p>${item.director}</p>
				<p><em>${item.location}</em></p>
				<a href="${item.imdbLink}">
					<p>${item.imdbLink}→</p>
				</a>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// // You can build logic from your data, too
		// if (!item.alsoWriter) { // If this is `false`
		// 	listItem.classList.add('faded') // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})



	// wrapCarousel({
	// 	container: '#collection',
	// 	dataFileURI: './collection.json',
	// 	imgsDirURI: 'poster'
	//   });

	//   let spaceBetweenSlides = 15,
    // containerPadding = 16,
    // startSlideOutDuration = 1, seconds
    // transitionDuration = .4, seconds
    // pauseDuration = 3, seconds
    // onloadHoldDuration = 1.5, seconds
    // interruptAutoInt = true,
    // slideHeight = 250,
    // onSlideWidth = 340,
    // onSlideHeight = 300

 // Fetch the JSON data
 fetch('data.json')
 .then(response => response.json())
 .then(data => {
   // Sort the data by year
   data.sort((a, b) => a.year - b.year);

   // Display the sorted data in HTML
   let output = '';
   data.forEach(item => {
	 output += `<div>${item.name} - ${item.year}</div>`;
   });
   document.getElementById('output').innerHTML = output;
 });






 let localData = [] // Set up an empty object for our local data (`let` because it will change)


dropdown.oninput = () => {
	// Filter the locally-copied data
	const year = localData.filter(movie => movie.year == 'F')
	const borough = localData.filter(movie => movie.borough == 'M')

	// Parse either set depending on the dropdown value
	if (dropdown.value == 'year') renderItems(year)
	else if (dropdown.value == 'borough') renderItems(borough)
	else renderItems(localData) // Send the whole, unfiltered dataset

	console.log('F' + title + year + director)
}


// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		localData = collection
		parseData(localData)
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})
