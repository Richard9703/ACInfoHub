var results = [];
var searchField = "fish";
var searchVal = "fish name"
for (var i=0 ; i < fish.name.length ; i++)
{
    if (fish.name[searchField] == searchVal) {
        results.push(fish.name);
    }
}

// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = '';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

// // Create a requests var and give new XMLHttpRequest object to it.
// var request = new XMLHttpRequest ();

// // Open connection to API (ACNHApi) using GET erquest on URL endpoint.
// request.open('GET', 'https://acnhapi.com/v1a/fish/', true);
// request.onload = function () {
//     // Access JSON data here
//    var data = JSON.parse(this.response);

//    if (request.status >= 200 && request.status < 400) {
//     data.forEach(fish => {
       

//        // Card  
//        const card = document.createElement('div');
//        card.setAttribute('class', 'card');

//        // Fish name
//        const h1 = document.createElement('h1');
//        h1.textContent = fish.name["name-EUen"];
       
//        // Information
//        const p = document.createElement('p');
//        fish['catch-phrase'] =  fish['catch-phrase'].substring(0, 300);
//        p.textContent  = `${ fish['catch-phrase']}...`;


//         container.appendChild(card);

//         card.appendChild(h1);
//         card.appendChild(p);
    
//     });
//    }  else {
//        const errorMessage = document.createElement('marquee');
//        errorMessage.textContent = `Error!`;
//        app.appendChild(errorMessage);
//    }
// };

// // Send request
// request.send();

