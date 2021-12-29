const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'https://static.wikia.nocookie.net/animalcrossing/images/9/92/NewHorizons.png/revision/latest?cb=20210123051957'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// Create a requests var and give new XMLHttpRequest object to it.
var request = new XMLHttpRequest ()

// Open connection to API (ACNHApi) using GET erquest on URL endpoint.
request.open('GET', 'https://acnhapi.com/v1a/fish/{fishID}', true)
request.onload = function () {
    // Access JSON data here
   var data = JSON.parse(this.response)

   if (request.status >= 200 && request.status < 400) {
    data.forEach(fish => {
       const card = document.createElement('div')
       card.setAttribute('class', 'card')

       const h1 = document.createElement('h1')
       h1.textContent = fish.price

       const p = document.createElement('p')
       fish.description = fish.availability.substring(0, 300)
       p.textContent  = `${fish.availability}...`

       container.appendChild(card)

       card.appendChild(h1)
       card.appendChild(p)
    })
   }  else {
       const errorMessage = document.createElement('marquee')
       errorMessage.textContent = `Gah, it's not working!`
       app.appendChild(errorMessage)
   }
}

// Send request
request.send()




