const API_URL = `https://sophisticated-humane-dandelion.glitch.me`
const form = document.getElementById("form")
const price = document.getElementById("price")
const title = document.getElementById("title")
const image = document.getElementById("image")

fetch(API_URL, {
    method: "GET"
})
    .then(resp => resp.json())
    .then(data => {
        const table = document.getElementById("dataTable")
        data.forEach(x => {
            const newProduct = document.createElement("div")
            newProduct.classList.add("Product")
            newProduct.innerHTML =
            `
            <img src="${x.image}" alt="" class="photo">
            <h3>${x.title}</h1>
            <h2>€${x.price}</h2>
            <button>Istrinti</button>
            `
            table.append(newProduct)
        })
    })
    .catch(error => console.error('Error fetching data:', error))

const submitData = (e) => {
    e.preventDefault()

    if (!price.value || !title.value || !image.value) {
        alert("Uzpildykite laukelius!");
    } else {
        alert("Duomenis sekmingai issaugoti");
    }

    const product = {
        image: image.value,
        title: title.value,
        price: price.value
    }
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
        .then(resp => resp.json())
        .then(data => {
            image.value = ''
            title.value = ''
            price.value = ''
        })
}

form.addEventListener("submit", submitData)
