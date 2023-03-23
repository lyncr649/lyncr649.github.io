let fries = [
    {name:"uc", url:"./assets/uc.jpg"},
    {name:"7th street", url:"./assets/7thstreet.jpg"},
    {name:"duckfat", url:"./assets/duckfat.PNG"},
    {name:"beckys", url:"./assets/beckys.PNG"},

]

function generateImages(fries) {

    const img = document.createElement('img')
    img.src = fries.url 
    img.classList.add('gallery-img')

    // create a paragraph element 

    const paragraph = document.createElement('p')

    // change the inner html of the paragraph to the sign name 
    paragraph.innerHTML = signs.name


    const galleryItem = document.createElement("div")
    galleryItem.appendChild(img)

    //add the paragraph into the galleryItem div
    galleryItem.appendChild(paragraph)

    document.querySelector('.gallery').appendChild(galleryItem)

}

signs.forEach(generateImages)