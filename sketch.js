const celdas = []; // Almacena informacion de cada celda
const RETICULA = 15; //Numero de filas y columncas de la reticula
let ancho; // Anchura de cada celda
let alto; // Altura de cada celda

const azulejos = []; // Alamacena imagenes de los azulejos

let opcionesI = []; //Almacena opcioens de los azulejos

const reglas = [
  //Reglas de los bordes de cada azulejo
  //Las propiedades UP, RIGHT, DOWN, y LEFT indican qué tipo de borde tiene el azulejo en esa dirección
  {
    // tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    // tile 1
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },

  {
    // tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },

  {
    // tile 3
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 4
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 5
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },

  {
    // tile 6
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 7
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    // tile 8
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },

  {
    // tile 9
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },

  {
    // tile 10
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    // tile 11
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 12
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },

  {
    // tile 13
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    // tile 14
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 15
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    //tile 16
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },

  {
    // tile 17
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 18
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    //tile 19
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 20
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },

  {
    // tile 21
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },

  {
    // tile 22
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
];

const NA = reglas.length; // Numero total de azulejos

function preload() {
  // Cargar imágenes de azulejos antes de iniciar la aplicación
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`tiles/tile${i}.png`);
    // Considera manejar situaciones en las que las imágenes no se cargan correctamente
    if (!azulejos[i]) {
      console.error(`Error cargando la imagen para el azulejo ${i}`);
    }
  }
}

function setup() {
  createCanvas(1080, 1080); //Tamaño del lienzo

  ancho = width / RETICULA; //Calcular el ancho de cada celda
  alto = height / RETICULA; //Calcular el alto de cada celda

  // Inicializar opciones de azulejos
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  // Inicializar información de celdas
  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
}

function draw() {
  //desactivar background(111); // Color de fondo

  // Filtrar celdas con opciones disponibles y no colapsadas
  const celdasConOpciones = celdas.filter((celda) => celda.opciones.length > 0);
  const celdasDisponibles = celdasConOpciones.filter(
    (celda) => !celda.colapsada
  );

  if (celdasDisponibles.length > 0) {
    // Ordenar celdas por la cantidad de opciones disponibles
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    // Filtrar celdas con la misma cantidad de opciones que la primera celda ordenada
    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    // Seleccionar una celda al azar de las celdas por colapsar y colapsarla
    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    //print(celdaSeleccionada);

    // Dibujar el diseño en el lienzo
    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];

        if (celdaActual.opciones.length < 1) {
          // Si no hay opciones disponibles para la celda, dibujar un rectángulo rojo transparente
          fill(255, 0, 0, 100);
          rect(x * ancho, y * alto, ancho, alto);
        }

        if (celdaActual.colapsada) {
          // Si la celda está colapsada, dibujar el azulejo correspondiente
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceDeAzulejo];
          //print(reglasActuales);
          image(azulejos[indiceDeAzulejo], x * ancho, y * alto, ancho, alto);

          //Cambiar entropia  UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {
              cambiarEntropia(celdaUP, reglasActuales["UP"], "DOWN");
            }
          }
          //Cambiar entropia RIGHT
          if (x < RETICULA - 1) {
            const indiceRIGHT = x + 1 + y * RETICULA;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarEntropia(celdaRIGHT, reglasActuales["RIGHT"], "LEFT");
            }
          }
          //Cambiar entropia DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarEntropia(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }
          //Cambiar entropia LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarEntropia(celdaLEFT, reglasActuales["LEFT"], "RIGHT");
            }
          }
        } else {
          //strokeWeight(6);
          // Dibujar contorno para celdas no colapsadas
          //rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
    //noLoop();
  } else {
    // desactivar Restablecer información de celdas si no hay celdas disponibles
    for (let i = 0; i < RETICULA * RETICULA; i++) {
      celdas[i] = {
        colapsada: false,
        opciones: opcionesI,
      };
    }
  }
}

function cambiarEntropia(_celda, _regla, _opuesta) {
  // Cambiar las opciones disponibles para una celda según una regla específica y su opuesta
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    const celdaOpcion = _celda.opciones[i];
    if (reglas[celdaOpcion][_opuesta] === _regla) {
      nuevasOpciones.push(celdaOpcion);
    }
  }
  _celda.opciones = nuevasOpciones;
  console.log(nuevasOpciones);
}
