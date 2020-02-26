var data = [
  {
    nombre: "Juan",
    categoria1: 12,
    categoria2: 1,
    clase: "A"
  },
  {
    nombre: "Sebastian",
    categoria1: 4,
    categoria2: 3,
    clase: "A"
  },
  {
    nombre: "Murillo",
    categoria1: 2,
    categoria2: 9,
    clase: "A"
  },
  {
    nombre: "Villalobos",
    categoria1: 12,
    categoria2: 13,
    clase: "B"
  },
  {
    nombre: "Zarraga",
    categoria1: 21,
    categoria2: 2,
    clase: "B"
  },
  {
    nombre: "Torrico",
    categoria1: 14,
    categoria2: 4,
    clase: "B"
  }
];

// var nombre = null; // Nombre de la Persona u Objeto
var distanciaArray = []; // distancia de los nodos
var clasesArray = []; // distancia de los nodos
var k = 4; // k vecinos document.getElementById();
function setup() {
  noCanvas();
  var persona = {
    nombre: "alberto",
    categoria1: 11,
    categoria2: 3,
    clase: ""
  }
  console.log(persona);
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

    distancia(x, y, persona.categoria1, persona.categoria2, clase);
  }
  clasificacion(persona, clasesArray);
  console.log(persona);
}

// CALCULO DE LA DISTANCIA ENTRE LOS VALORES YA ASIGANDOS Y EL NUEVO K
function distancia(categoria1, categoria2, categoria1K, categoria2K, clase) {
  let distXa = categoria1;
  let distYa = categoria2;
  let distXb = categoria1K;
  let distYb = categoria2K;
  let distanciaTotal;
  for (let i = 0; i < k; i++) {
    distanciaTotal = Math.sqrt(
      Math.pow(distXa - distXb, 2) + Math.pow(distYa - distYb, 2)
    );
  }
  distanciaArray.push(distanciaTotal);
  clasesArray.push(clase);
  Ordenar(distanciaArray, clasesArray);
  console.log(distanciaTotal);
  console.log(distanciaArray);
  console.log(clasesArray);
}

function Ordenar(distancia, clase) {
  var menor;
  var aux;
  for (let i = 0; i < distancia.length; i++) {
    for (let j = i + 1; j < distancia.length; j++) {
      if (distancia[i] > distancia[j]) {
        aux = clase[i];
        menor = distancia[i];
        distancia[i] = distancia[j];
        clase[i] = clase[j];
        distancia[j] = menor;
        clase[j] = aux;
      }
    }

  }
}
function clasificacion(persona, clasesArray) {
  var cA = 0;
  var cB = 0;
  for (let i = 0; i < k; i++) {
    if (clasesArray[i] == "A") {
      cA++;
    }
    if (clasesArray[i] == "B") {
      cB++;
    }
  }
  if (cA > cB) {
    persona.clase = "A"
  }
  if (cB > cA) {
    persona.clase = "B"
  }
}

