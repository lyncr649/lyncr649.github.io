let fries = [
	{
		"resturant": "7th Street Burger",
		"date": "October 29, 2022",
		"rating" : "9.5/10",
		"image": "./assets/fries/7thstreet.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Bare Burger",
		"date": "July 19, 2022",
		"rating" : "8/10",
		"image": "./assets/fries/bareburger.jpg",
		"temp": "medium"
	},

	{
		"resturant": "Beckys",
		"date": "June 28, 2022",
		"rating" : "9/10",
		"image": "./assets/fries/beckys.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Burger King",
		"date": "May 24, 2022",
		"rating" : "7/10",
		"image": "./assets/fries/burgerking.jpg",
		"temp": "medium"
	},

	{
		"resturant": "Apple Fest Fair Fries",
		"date": "October 1, 2022",
		"rating" : "6/10",
		"image": "./assets/fries/cornell.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Louie's Lunch",
		"date": "October 2, 2022",
		"rating" : "9/10",
		"image": "./assets/fries/cornell2.jpeg",
		"temp": "hot"
	},

	{
		"resturant": "Duckfat",
		"date": "June 17, 2022",
		"rating" : "10/10",
		"image": "./assets/fries/duckfat1.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Duckfat 2",
		"date": "June 28, 2022",
		"rating" : "10/10",
		"image": "./assets/fries/duckfat2.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Duckfat 3",
		"date": "March 13, 2023",
		"rating" : "10/10",
		"image": "./assets/fries/duckfat3.jpeg",
		"temp": "hot"
	},

	{
		"resturant": "Lovely Day",
		"date": "October 29, 2022",
		"rating" : "8.5/10",
		"image": "./assets/fries/lovelyday.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Mamouns",
		"date": "October 28, 2022",
		"rating" : "9/10",
		"image": "./assets/fries/mamouns.jpg",
		"temp": "hot"
	},
	
	{
		"resturant": "McDonalds",
		"date": "July 12, 2022",
		"rating" : "6/10",
		"image": "./assets/fries/mcdonalds.jpg",
		"temp": "cold"
	},

	{
		"resturant": "Magnolia Café",
		"date": "July 26, 2022",
		"rating" : "7/10",
		"image": "./assets/fries/nice.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Kalōs",
		"date": "July 30, 2022",
		"rating" : "7/10",
		"image": "./assets/fries/nice2.jpg",
		"temp": "medium"
	},

	{
		"resturant": "Nura",
		"date": "June 28, 2022",
		"rating" : "7.5/10",
		"image": "./assets/fries/nura.jpg",
		"temp": "medium"
	},

	{
		"resturant": "Le Solferino",
		"date": "July 26, 2022",
		"rating" : "7/10",
		"image": "./assets/fries/paris.jpg",
		"temp": "medium"
	},

	{
		"resturant": "Pastis",
		"date": "May 23, 2022",
		"rating" : "8/10",
		"image": "./assets/fries/pastis.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Sarah Lawrence Cafeteria",
		"date": "March 4, 2023",
		"rating" : "9/10",
		"image": "./assets/fries/sarahlawrence.jpeg",
		"temp": "hot"
	},

	{
		"resturant": "Mainly Burgers",
		"date": "July 2, 2022",
		"rating" : "10/10",
		"image": "./assets/fries/scarbeach.jpg",
		"temp": "hot"
	},
	{
		"resturant": "University Center",
		"date": "October 26, 2022",
		"rating" : "3/10",
		"image": "./assets/fries/uc1.jpg",
		"temp": "cold"
	},
	{
		"resturant": "University Center",
		"date": "March 8, 2023",
		"rating" : "7/10",
		"image": "./assets/fries/uc2.jpeg",
		"temp": "medium"
	},

	{
		"resturant": "University Center",
		"date": "May 11, 2022",
		"rating" : "7/10",
		"image": "./assets/fries/uc3.jpg",
		"temp": "medium"
	},

	{
		"resturant": "Vernon Diner",
		"date": "December 22, 2022",
		"rating" : "8/10",
		"image": "./assets/fries/vernon.jpeg",
		"temp": "hot"
	},

	{
		"resturant": "Via Vecchia",
		"date": "March 16, 2023",
		"rating" : "8/10",
		"image": "./assets/fries/viavecchia.jpeg",
		"temp": "hot"
	},

	{
		"resturant": "Figlmüller",
		"date": "August 2, 2022",
		"rating" : "9/10",
		"image": "./assets/fries/vienna.jpg",
		"temp": "hot"
	},

	{
		"resturant": "Washington Square Diner",
		"date": "October 30, 2022",
		"rating" : "8/10",
		"image": "./assets/fries/washdiner.jpg",
		"temp": "medium"
	},

	{
		"resturant": "McDonalds 2",
		"date": "March 17, 2022",
		"rating" : "6/10",
		"image": "./assets/fries/mcdonalds2.jpeg",
		"temp": "medium"
	},

	{
		"resturant": "7th Street Burger 2",
		"date": "March 19, 2023",
		"rating" : "9/10",
		"image": "./assets/fries/7thstreet2.jpeg",
		"temp": "hot"
	}

]

function generateImages(fries) {

    const img = document.createElement('img')
    img.src = fries.image 
    img.classList.add('gallery-img')

    // create a paragraph element 

    const paragraph = document.createElement('p')

    // change the inner html of the paragraph to the sign name 
    paragraph.innerHTML = fries.resturant


    const galleryItem = document.createElement("div")
    galleryItem.appendChild(img)

    //add the paragraph into the galleryItem div
    galleryItem.appendChild(paragraph)

    document.querySelector('.gallery').appendChild(galleryItem)

}

fries.forEach(generateImages)