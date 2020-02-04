
// (async()=>{
 
   // let response = await fetch ('https://thatsthespir.it/api')
    // let data = await response.json (); console.log(data);


// document.getElementById("quote").innerHTML = 

  // `
    
            //<blockquote id=${data.id}>
             
              //      <img class="photo" src="${data.photo}">
                    
                //      <span class="citation">${data.quote}</span>
             
                  //          <p class="auteur">${data.author}</p>
               
            // </div>
  //</blockquote> `

//})()

let ourRequest = new XMLHttpRequest ();
ourRequest.open('GET', 'https://thatsthespir.it/api')
ourRequest.onload = function() {
let ourData = JSON.parse (ourRequest.responseText); console.log(ourData);

}; 

ourRequest.send(); 

// document.getElementById("quote").innerHTML = 

  // `
    
            //<blockquote id=${data.id}>
             
              //      <img class="photo" src="${data.photo}">
                    
                //      <span class="citation">${data.quote}</span>
             
                  //          <p class="auteur">${data.author}</p>
               
            // </div>
  //</blockquote> `
