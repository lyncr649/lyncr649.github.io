let fries = [
    {name:"uc", url:"assets/uc.jpg"},
    {name:"7th street", url:"./assets/7thstreet.jpg"},
    {name:"duckfat", url:"./assets/duckfat.PNG"},
    {name:"beckys", url:"./assets/beckys.PNG"},

]

function generateImages(fries) {

    const img = document.createElement('img')
    img.src = fries.url 
    img.classList.add('gallery-img')
    const galleryItem = document.createElement("div")
    galleryItem.appendChild(img)

    document.querySelector('.gallery').appendChild(galleryItem)

}

signs.forEach(generateImages)