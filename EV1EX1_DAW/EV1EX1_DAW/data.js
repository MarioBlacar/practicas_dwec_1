const results =  [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,
    },
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: null,
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: null,
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    // hair_color: null,
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: null,
    homeworld: {
      name: "Naboo",
      rotation_period: 26,
      orbital_period: 312,
      diameter: 12120,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: 12,
      population: 4500000000,
    },
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    homeworld: {
      name: "Alderaan",
      rotation_period: 24,
      orbital_period: 364,
      diameter: 12500,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: 2000000000,
    },
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: null,
    skin_color: "white, red",
    eye_color: "red",
    birth_year: null,
    gender: null,
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "57BBY",
    gender: "male",
    homeworld: {
      name: "Stewjon",
      // rotation_period: null,
      // orbital_period: null,
      diameter: 0,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grass",
      // surface_water: null,
      // population: null,
    },
  },

  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      diameter: 10465,
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: 1,
      population: 200000,

    },
  },
  {
    name: "Wilhuff Tarkin",
    height: 180,
    mass: null,
    hair_color: "auburn",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "64BBY",
    gender: "male",
    homeworld: {
      name: "Eriadu",
      rotation_period: 24,
      orbital_period: 360,
      diameter: 13490,
      climate: "polluted",
      gravity: "1 standard",
      terrain: "cityscape",
      surface_water: null,
      population: 22000000000,
    }
  },
  {
    name: "Chewbacca",
    height: 228,
    mass: 112,
    hair_color: "brown",
    skin_color: null,
    eye_color: "blue",
    birth_year: "200BBY",
    gender: "male",
    homeworld: {
      name: "Kashyyyk",
      rotation_period: 26,
      orbital_period: 381,
      diameter: 12765,
      climate: "tropical",
      gravity: "1 standard",
      terrain: "jungle, forests, lakes, rivers",
      surface_water: 60,
      population: 45000000,
    }
  },
  {
    name: "Han Solo",
    height: 180,
    mass: 80,
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "29BBY",
    gender: "male",
    homeworld: {
      name: "Corellia",
      rotation_period: 25,
      orbital_period: 329,
      diameter: 11000,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "plains, urban, hills, forests",
      surface_water: 70,
      population: 3000000000,
    }
  },
  {
    name: "Greedo",
    height: 173,
    mass: 74,
    hair_color: null,
    skin_color: "green",
    eye_color: "black",
    birth_year: "44BBY",
    gender: "male",
    homeworld: {
      name: "Rodia",
      rotation_period: 29,
      orbital_period: 305,
      diameter: 7549,
      climate: "hot",
      gravity: "1 standard",
      terrain: "jungles, oceans, urban, swamps",
      surface_water: 60,
      population: 1300000000,
    }
  },
  {
    name: "Jabba Desilijic Tiure",
    height: 175,
    mass: 1358,
    hair_color: null,
    skin_color: "green-tan, brown",
    eye_color: "orange",
    birth_year: "600BBY",
    gender: "hermaphrodite",
    homeworld: {
      name: "Nal Hutta",
      rotation_period: 87,
      orbital_period: 413,
      diameter: 12150,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "urban, oceans, swamps, bogs",
      surface_water: null,
      population: 7000000000,
    }
  },
  {
    name: "Wedge Antilles",
    height: 170,
    mass: 77,
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "hazel",
    birth_year: "21BBY",
    gender: "male",
    homeworld: {
      name: "Corellia",
      rotation_period: 25,
      orbital_period: 329,
      diameter: 11000,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "plains, urban, hills, forests",
      surface_water: 70,
      population: 3000000000,
    }
  },
  {
    name: "Jek Tono Porkins",
    height: 180,
    mass: 110,
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: null,
    gender: "male",
    homeworld: {
      name: "Bestine IV",
      rotation_period: 26,
      orbital_period: 680,
      diameter: 6400,
      climate: "temperate",
      gravity: null,
      terrain: "rocky islands, oceans",
      surface_water: 98,
      population: 62000000,
    }
  },
  {
    name: "Yoda",
    height: 66,
    mass: 17,
    hair_color: "white",
    skin_color: "green",
    eye_color: "brown",
    birth_year: "896BBY",
    gender: "male",
    homeworld: {
      name: null,
      rotation_period: "0",
      orbital_period: "0",
      diameter: "0",
      climate: null,
      gravity: null,
      terrain: null,
      surface_water: null,
      population: null,
    }
  },
  {
    name: "Palpatine",
    height: 170,
    mass: 75,
    hair_color: "grey",
    skin_color: "pale",
    eye_color: "yellow",
    birth_year: "82BBY",
    gender: "male",
    homeworld: {
      name: "Naboo",
      rotation_period: 26,
      orbital_period: 312,
      diameter: 12120,
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: 12,
      population: 4500000000,
    }
  }
]

const translate_colors = {
  yellow: {
    name: 'Amarillo',
    code: '#FFFF99'
  },
  blue: {
    name: 'Azul',
    code: '#4FB1E9'
  },
  red: {
    name: 'Rojo',
    code: '#DC4242'
  },
  brown: {
    name: 'Marrón',
    code: '#676F62'
  },
  white: {
    name: 'Blanco',
    code: '#BDB5BB'
  },
  hazel: {
    name: 'Avellana',
    code: '#F16F40'
  },
  orange: {
    name: 'Naranja',
    code: '#A54818'
  },
  black: {
    name: 'Negro',
    code: '#000100'
  },
  auburn: {
    name: 'Castaño',
    code: '#623A24'
  },
  blond: {
    name: 'Rubio',
    code: '#D5C19F'
  },
  grey: {
    name: 'Gris',
    code: '#BAB4AC'
  },
  none: {
    name: 'Ninguno',
    code: '#000000'
  },

}


//Codigo de caracteristicas principales
let peopleListCharacters = document.getElementById("people-list-characters");
results.forEach(element => {
let PrimerNombre = element.name.split(" ");
console.log(PrimerNombre[0]);

  let character = document.createElement("div");
  character.classList.add("character");

  let characterName = document.createElement("div");
  characterName.classList.add("character-name");
  characterName.textContent = element.name;

  let characterBirthYear = document.createElement("div");
  characterBirthYear.classList.add("character-birth-year");
  characterBirthYear.textContent = element.birth_year;

  let characterHomeworld = document.createElement("div");
  characterHomeworld.classList.add("character-homeworld");
  characterHomeworld.textContent = element.homeworld.name;

  let characterBtn = document.createElement("div");
  characterBtn.classList.add("btn");
  characterBtn.classList.add("btn-char");
  characterBtn.setAttribute("data-product",element.name);
  characterBtn.addEventListener("click",detallar);
  characterBtn.textContent = "Detalle";

  character.append(characterName);
  character.append(characterBirthYear);
  character.append(characterHomeworld);
  character.append(characterBtn);

  peopleListCharacters.append(character);
});

//----------------------------------------------------------------------------------------------------------
console.log(translate_colors.blond);
//Codigo de Detalles del personaje
function detallar( event ) {
  console.log(event.target.dataset.product);

  let characterNombre = event.target.dataset.product;
  let datosPersonaje = results.find( (item) => item.name == characterNombre );

  let namePersonaje = document.getElementById("detail-name");
  namePersonaje.textContent = (datosPersonaje.name);

  let heightPersonaje = document.getElementById("height");
  heightPersonaje.textContent = (datosPersonaje.height);

  let massPersonaje = document.getElementById("mass");
  massPersonaje.textContent = (datosPersonaje.mass);

  let color = datosPersonaje.hair_color;
  console.log(color);

  let hairColorPersonaje = document.getElementById("hair-color");
  //hairColorPersonaje.textContent = (translate_colors.color.name);
  hairColorPersonaje.textContent = (datosPersonaje.hair_color);
  let hairColor2Personaje = document.getElementById("hair-color-filled");
  hairColor2Personaje.textContent = (datosPersonaje.hair_color);
  //hairColor2Personaje.textContent = (translate_colors.color.code);

  let eyeColorPersonaje = document.getElementById("eye-color");
  eyeColorPersonaje.textContent = (datosPersonaje.eye_color);
  //eyeColorPersonaje.textContent = (translate_colors.datosPersonaje.eye_color.name);
  let eyeColor2Personaje = document.getElementById("eye-color-filled");
  //eyeColor2Personaje.textContent = (translate_colors.datosPersonaje.eye_color.code);
  eyeColor2Personaje.textContent = (datosPersonaje.eye_color);

  let birthYearPersonaje = document.getElementById("birth-year");
  birthYearPersonaje.textContent = (datosPersonaje.birth_year);

  let homeworldPersonaje = document.getElementById("homeworld");
  homeworldPersonaje.textContent = (datosPersonaje.homeworld.name);

  let homeworldPopulationPersonaje = document.getElementById("population");
  homeworldPopulationPersonaje.textContent = (datosPersonaje.homeworld.population);
}

//----------------------------------------------------------------------------------------------------------

//Codigo de funcionamiento de las paginas
//No funciona
let pages = document.getElementById("pages");
let first = document.createElement("span");
first.classList.add("first");
first.textContent = "Primera";
let prev = document.createElement("span");
prev.classList.add("prev");
prev.textContent = "Anterior";
let numeroPagina = document.createElement("span");
numeroPagina.textContent = "Página 1 de 7";
let next = document.createElement("span");
next.classList.add("next");
next.textContent = "Siguiente";
let last = document.createElement("span");
last.classList.add("last");
last.textContent = "Última";

first.append(pages);
prev.append(pages);
numeroPagina.append(pages);
next.append(pages);
last.append(pages);
