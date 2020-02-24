var data = [
  {
    nonbre: "Juan",
    categoria1: 12,
    categoria2: 1,
    clase: "A"
  },
  {
    nonbre: "Sebastian",
    categoria1: 4,
    categoria2: 3,
    clase: "A"
  },
  {
    nonbre: "Murillo",
    categoria1: 2,
    categoria2: 9,
    clase: "A"
  },
  {
    nonbre: "Villalobos",
    categoria1: 12,
    categoria2: 13,
    clase: "B"
  },
  {
    nonbre: "Zarraga",
    categoria1: 21,
    categoria2: 2,
    clase: "B"
  },
  {
    nonbre: "Torrico",
    categoria1: 14,
    categoria2: 3,
    clase: "B"
  }
];

// var nombre = null; // Nombre de la Persona u Objeto
var distanciaArray = new Array(); // distancia de los nodos
var k = 3; // k vecinos document.getElementById();
var xA = 7; //document.getElementById();
var yB = 8; //document.getElementById();
function setup() {
  noCanvas();

  var x = null; //Categoria 1 CORDENADAS
  var y = null; //Categoria 2 CORDENADAS
  var clase = null; // Clase a que pertenece

  for (let j in data) {
    x = data[j].categoria1;
    y = data[j].categoria2;
    clase = data[j].clase;
    console.log(x);
    console.log(y);
    console.log(clase);

    distancia(x, y, xA, yB, clase);
    
  }
  console.log(distanciaArray);
}

// CALCULO DE LA DISTANCIA ENTRE LOS VALORES YA ASIGANDOS Y EL NUEVO K
function distancia(categoria1, categoria2, categoria1K, categoria2K, clase) {
  let distXa = categoria1;
  let distYa = categoria2;
  let distXb = categoria1K;
  let distYb = categoria2K;
  let distanciaTotal;

  for(let i = 0; i < k; i++){
    distanciaTotal = Math.sqrt(
      Math.pow(distXa - distXb, 2) + Math.pow(distYa - distYb, 2)
    );
    console.log("j")
    distanciaArray = (distanciaTotal);
  }
  console.log(distanciaTotal);
}


// function clasification(titulo, categoria1, categoria2, clasificacion) {

// }

