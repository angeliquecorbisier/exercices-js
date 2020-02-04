function draw () {
let canevas= document.getElementById('piou'); 
if (canevas.getContext) {
    let ctx = canevas.getContext('2d');


    //drapeau (tissu)
        ctx.beginPath();
        ctx.moveTo(0, 75);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.lineTo(0,25);
        ctx.fill();  

   // drapeau triangle (tissu)
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.moveTo(270, 25);
        ctx.lineTo(270, 200);
        ctx.lineTo(470, 200);
        ctx.fill();

//bâton du drapeau
        ctx.beginPath();
        ctx.moveTo(100,25);
        ctx.lineTo(100,250);
        ctx.stroke();

//structure du bâteau
        ctx.beginPath();
        ctx.moveTo(0, 250);
        ctx.lineTo(500, 250);
        ctx.lineTo(450, 350);
        ctx.lineTo(70, 350)
        ctx.fillStyle = "gray";
        ctx.fill();

    //hublot
        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(190,300,15,0,Math.PI*2,false)
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(250,300,15,0,Math.PI*2,false)
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(310,300,15,0,Math.PI*2,false)
        ctx.fill();

        //deuxième mât

        ctx.beginPath();
        ctx.moveTo(250,25);
        ctx.lineTo(250,250);
        ctx.stroke();
}
}
draw();

let ctx = canvas.getContext('2d');

