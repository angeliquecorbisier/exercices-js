
//Exercice 1

document.addEventListener('keydown', function (event) {

  switch (event.keyCode) {
    case 97:
      document.querySelector("#character").style.backgroundColor = "blue";
      break;

    case 98:
      document.querySelector("#character").style.backgroundColor = "red";

      break;

    case 99:
      document.querySelector("#character").style.backgroundColor = "yellow";
      break;

    case 100:
      document.querySelector("#character").style.backgroundColor = "grey";
      break;

    case 101:
      document.querySelector("#character").style.backgroundColor = "pink";
      break;

    case 102:
      document.querySelector("#character").style.backgroundColor = "orange";
      break;

    case 103:
      document.querySelector("#character").style.backgroundColor = "green";
      break;

    case 104:
      document.querySelector("#character").style.backgroundColor = "purple";
      break;
  }
});

//Exercice 2

document.addEventListener('keydown', function (e) {
  console.log(e);

  switch (event.keyCode) {
    case 38:
      document.querySelector("#up").style.opacity = 0.8;
      break;

    case 40:
      document.querySelector("#down").style.opacity = 0.8;
      break;

    case 37:
      document.querySelector("#left").style.opacity = 0.8;
      break;

    case 39:
      document.querySelector("#right").style.opacity = 0.8;
      break;
  }
});

document.addEventListener('keyup', function (e) {
  console.log(e);

  switch (event.keyCode) {
    case 38:
      document.querySelector("#up").style.opacity = "";
      break;

    case 40:
      document.querySelector("#down").style.opacity = "";
      break;

    case 37:
      document.querySelector("#left").style.opacity = "";
      break;

    case 39:
      document.querySelector("#right").style.opacity = "";
      break;
  }
});