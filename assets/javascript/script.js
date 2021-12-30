const infoInput = document.querySelector('.info-input');

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = '';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Create a requests var and give new XMLHttpRequest object to it.
var request = new XMLHttpRequest ();

// Open connection to API (ACNHApi) using GET erquest on URL endpoint.
request.open('GET', 'https://acnhapi.com/v1a/fish/', true);
request.onload = function () {
    // Access JSON data here
   var data = JSON.parse(this.response);

   if (request.status >= 200 && request.status < 400) {
        console.log("test");
        console.log(infoInput.value);

        data.forEach(fish => {
       
        if (infoInput.value == fish.name["name-EUen"]) {
            // Card  
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Fish name
            const h1 = document.createElement('h1');
            h1.textContent = fish.name["name-EUen"];
            
            // Information
            const p = document.createElement('p');
            fish['catch-phrase'] =  fish['catch-phrase'].substring(0, 300);
            p.textContent  = `${ fish['catch-phrase']}...`;


            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);
            infoInput.value = "";
        }
    });
    } else {
       const errorMessage = document.createElement('marquee');
       errorMessage.textContent = `Error!`;
       app.appendChild(errorMessage);
   }
};

// Send request
request.send();


