// exo 1


Array.from(document.querySelectorAll(".hoverme")).forEach(element => { 

   element.addEventListener('mouseover', (e)=> { 
   console.log(element)
        element.style.opacity= 0; 
   })})


   //exo 2

   let resetshow = document.getElementById("reset");
   
   Array.from(document.querySelectorAll(".hoverme")).forEach(element => { 
 
    resetshow.addEventListener('click', (e) => { 
  
    element.style.opacity= 1;
    
        
    })
 

  })
 
   //exo 3

   document.addEventListener("mousemove", (e) => {
     document.getElementById("axe-x").innerText = "Position x : " + e.clientX; 
     
     document.getElementById("axe-y").innerText = "Position y : " + e.clientY;


   })