const dataUrl = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'

fetch(dataUrl)
    .then(response => response.json)
    .then(data => {
        console.log(data)
    })

const parseData = (data) => {
    let colorGray = 0
    let colorCinammon = 0
    let colorBlack = 0
    let colorUnknown = 0

    squirrels.forEach(squirrel => {
        
    })
}