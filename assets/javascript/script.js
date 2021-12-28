// Create a requests var and give new XMLHttpRequest object to it.
var request = new XMLHttpRequest ()

// Open connection to API (ACNHApi) using GET erquest on URL endpoint.
request.open('GET', 'https://acnhapi.com/v1a/fish/', true)
request.onload = function () {
    // Access JSON data here
   var data = JSON.parse(this.response)

   if (request.status >= 200 && request.status < 400) {
    data.forEach(fish => {
        // Log each fish
        console.log(fish.name)   
    })
   }  else {
       console.log('error')
   }
}

// Send request
request.send()


