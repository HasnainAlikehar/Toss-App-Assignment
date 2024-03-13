

let h1 = document.querySelector("h1")
let image = document.querySelector(".image")

function toss(user) {
    let randomNumber = Math.ceil(Math.random() * 2)
    // console.log(click) 
    if (randomNumber === 1) {
        image.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"
    }
    else {
        // console.log("tail")
        image.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
    }
    if (user === "chand" && randomNumber === 1 || user === "masjid" && randomNumber === 2){
        para.innerHTML = "You win The Toss "
    }
    else {
        para.innerHTML = "You loss The Toss"
    }
}