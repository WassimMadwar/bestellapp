const links = [
  { href: "./index.html", text: "Start" },
  { href: "#", text: "Kontakt" },
  { href: "#", text: "Impressum" },
  { href: "#", text: "Datenschutzerklärung" },
];
// i should leater intgretion object categories in allMeals !!!!
const categories = [
  {
    src: "./assets/img/kategore/alle.webp",
    text: "Alle",
    category: "All",
  },
  {
    src: "./assets/img/kategore/sandwish.webp",
    text: "Sandwish",
    category: "Sandwich",
  },
  {
    src: "./assets/img/kategore/pizza.webp",
    text: "Pizza",
    category: "Pizza",
  },
  {
    src: "./assets/img/kategore/noodel.webp",
    text: "Nudeln",
    category: "Noodle",
  },
  {
    src: "./assets/img/kategore/salat.jpg",
    text: "Salad",
    category: "Salat",
  },
];

const allMeals = [
  {
    category: "Sandwich",
    dishes: [
      {
        Id: 1,
        imgSrc: "../assets/img/ChickenSandwich.webp",
        name: "Chicken Sandwich",
        info: "Gegrilltes Hähnchen, Salat",
        preis: 5.99,
      },
      {
        Id: 2,
        imgSrc: "../assets/img/VeggieSandwich.jpg",
        name: "Veggie Sandwich",
        info: "Tomaten, Gurken, Salat",
        preis: 4.99,
      },
    ],
  },
  {
    category: "Pizza",
    dishes: [
      {
        Id: 3,
        imgSrc: "../assets/img/MargheritaPizza.jpg",
        name: "Margherita",
        info: "Tomatensoße, Mozzarella",
        preis: 7.99,
      },
      {
        Id: 4,
        imgSrc: "../assets/img/SalamiPizza.jpg",
        name: "Salami Pizza",
        info: "Tomatensoße, Salami, Käse",
        preis: 8.99,
      },
    ],
  },
  {
    category: "Noodle",
    dishes: [
      {
        Id: 5,
        imgSrc: "../assets/img/SpaghettiBolognese.jpg",
        name: "Spaghetti Bolognese",
        info: "Hackfleischsoße, Parmesan",
        preis: 9.99,
      },
      {
        Id: 6,
        imgSrc: "../assets/img/PenneArrabiata.jpg",
        name: "Penne Arrabiata",
        info: "Tomatensoße, Chili",
        preis: 8.49,
      },
    ],
  },
  {
    category: "Salat",
    dishes: [
      {
        Id: 7,
        imgSrc: "../assets/img/CaesarSalad.jpg",
        name: "Caesar Salad",
        info: "Hähnchen, Parmesan, Dressing",
        preis: 6.99,
      },
      {
        Id: 8,
        imgSrc: "../assets/img/GriechischerSalat.jpg",
        name: "Griechischer Salad",
        info: "Feta, Oliven, Tomaten",
        preis: 5.99,
      },
    ],
  },
];
