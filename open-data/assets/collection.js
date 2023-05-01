
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


	function scrollContainer(direction) {
        const container = document.getElementById("collection");
        const scrollDistance = container.offsetWidth;
        const scrollOffset = container.scrollLeft + (direction === "left" ? -scrollDistance : scrollDistance);
        container.scrollTo({
          left: scrollOffset,
          behavior: "smooth"
        });
      }