const arrayImg = document.querySelectorAll("img")

arrayImg.forEach(elem => {
    if(elem.src.includes(".heic") || elem.src.includes(".HEIC")){
        convertHEIC(elem)
    }
})

async function convertHEIC (elem){
    console.log(elem)
    let blobRes = await fetch(elem.src)
    let blob = await blobRes.blob()
    let conversionResult = await heic2any({ blob })
    var url = URL.createObjectURL(conversionResult);
    elem.src = url
}   