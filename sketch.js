const celdas = []; //
const RETICULA = 4;

const azulejoz = [];
const NA = 5; // numero de azulejos

const reglas = [
  //reglas de los bordes de cada azulejo
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
    // tile 15
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },

  {
    // tile 16
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },

  {
    // tile 17
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },

  {
    // tile 18
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },

  {
    // tile 19
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

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejoz[i] = loadImage(`tiles/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);

  const opcionesI = [];
  for (let i = 0; i < azulejoz.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  print(celdas);
}

function draw() {}
