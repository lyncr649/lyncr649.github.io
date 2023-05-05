// const dropdown = document.querySelector('#borough') // Get the dropdown menu
const dropdown_borough = document.querySelector('#borough-select') // Get the dropdown menu

let localData = [] // Set up an empty object for our local data (`let` because it will change)

// Function to render your items
const renderItems = (collection) => {
	// DELETE EXISTING LI in collectionList


	// console.log(collection)
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`


		// // You can make each element inside of that…
		// const itemTitle = document.createElement('h2') // Make an `h2`
		// itemTitle.innerHTML = item.title // Put the JSON title inside
		// listItem.appendChild(itemTitle) // And add it to the `li`!

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
					<p>${item.title}→</p>
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
		localData = collection
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order

	})


	// scroll feature here:
	function scrollContainer(direction) {
        const container = document.getElementById("collection");
        const scrollDistance = container.offsetWidth;
        const scrollOffset = container.scrollLeft + (direction === "left" ? -scrollDistance : scrollDistance);
        container.scrollTo({
          left: scrollOffset,
          behavior: "smooth"
        });
      }




	  


	  dropdown_borough.onchange = () => {
		// console.log(localData)
			// console.log("changed!")
		  // const all = localData.filter(movie => movie.borough == '');
		  const borough = localData.filter(movie => movie.borough == 'Manhattan');
		  const Bborough = localData.filter(movie => movie.borough == 'Brooklyn');
		  const Cborough = localData.filter(movie => movie.borough == 'Bronx');
		  const Qborough = localData.filter(movie => movie.borough == 'Queens');
		  const Sborough = localData.filter(movie => movie.borough == 'Staten Island');

		//   console.log(borough)

		  if (dropdown_borough.value == 'Manhattan'){
			//   renderItems(borough);
			  console.log(borough);
	
			// console.log("Manhattan!")
		  }
		  else if (dropdown_borough.value == 'Brooklyn') {
			//   renderItems(Bborough)
			  console.log(Bborough);
		  
		  }
		  else if (dropdown_borough.value == 'Bronx') {
			  renderItems(Cborough)
		  
		  }
		  else if (dropdown_borough.value == 'Queens') {
			  renderItems(Qborough)
		  
		  }
		  else if (dropdown_borough.value == 'Staten Island') {
			  renderItems(Sborough)
		  
		  }
		  else  {
			  renderItems(localData);	
		  }
	  }
	  
		  // console.log(localData)
	  
	  
	  // // Fetch gets your JSON file…
	  // fetch('assets/collection.json')
	  // 	.then(response => response.json())
	  // 	.then(collection => {
	  // 		localData = collection
	  // 		// parseData(localData)
	  // 		// And passes the data to the function, above!
	  // 		renderItems(collection.reverse()) // In reverse order
	  // 	})
	  




// 	  function filterByBorough(borough) {
// 		return data.filter(movie => {
// 		  if (borough === "") {
// 			return true; // show all movies
// 		  } else {
// 			return movie.borough === borough;
// 		  }
// 		});
// 	  }

// const select = document.getElementById("borough-select");

// select.addEventListener("change", (event) => {
//   const filteredData = filterByBorough(event.target.value);
//   // update the displayed movies with filteredData
// });

// function displayMovies(movies) {
// 	// clear previous movies
// 	// ...
  
// 	movies.forEach(movie => {
// 	  // create HTML element for each movie
// 	  // ...
// 	});
//   }
  
//   // call displayMovies initially with all movies
//   displayMovies(data);


// const boroughFilter = document.getElementById("borough-filter");
// boroughFilter.addEventListener("change", () => {
//   const selectedBorough = boroughFilter.value;
//   const filteredLocations = selectedBorough ? locations.filter(location => location.borough === selectedBorough) : locations;
//   // Do something with the filtered data, such as display it on the page or update a map
// });




// dropdown.onchange = () => {
// 	// Filter the locally-copied data
// 	// const all = localData.filter(movie)
// 	const manhattan = localData.filter(movie => movie.borough == 'Manhattan');
// 	const brooklyn = localData.filter(movie => movie.borough == 'Brooklyn');
// 	const bronx = localData.filter(movie => movie.borough == 'Bronx');
// 	const queens = localData.filter(movie => movie.borough == 'Queens');
// 	const statenisland = localData.filter(movie => movie.borough == 'Statan Island');
	
	
// 	const all = localData.filter()
	


// 	// Parse either set depending on the dropdown value
// 	if (dropdown.value == 'manhattan'){
// 		renderItems(manhattan);
// 		console.log(localData);
// 	}
// 	else if (dropdown.value == 'brooklyn') {
// 		renderItems(brooklyn) ;
	
// 	}
// 	else if (dropdown.value == 'All') renderItems(all)
// 	else  {
// 		renderItems(localData) ;
	
// 	} // Send the whole, unfiltered dataset

// }




// // Fetch gets your JSON file…
// fetch('assets/collection.json')
// 	.then(response => response.json())
// 	.then(collection => {
// 		localData = collection
// 		// parseData(localData)
// 		// And passes the data to the function, above!
// 		renderItems(collection.reverse()) // In reverse order
// 	})

