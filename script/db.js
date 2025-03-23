const links = [
  { href: "./index.html", text: "Start" },
  { href: "#", text: "Kontakt" },
  { href: "#", text: "Impressum" },
  { href: "#", text: "Datenschutzerklärung" },
];

const categories = [
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
        name: "Chicken Sandwich",
        info: "Gegrilltes Hähnchen, Salat",
        preis: "5.99€",
      },
      {
        name: "Veggie Sandwich",
        info: "Tomaten, Gurken, Salat",
        preis: "4.99€",
      },
    ],
  },
  {
    category: "Pizza",
    dishes: [
      {
        name: "Margherita",
        info: "Tomatensoße, Mozzarella",
        preis: "7.99€",
      },
      {
        name: "Salami Pizza",
        info: "Tomatensoße, Salami, Käse",
        preis: "8.99€",
      },
    ],
  },
  {
    category: "Noodle",
    dishes: [
      {
        name: "Spaghetti Bolognese",
        info: "Hackfleischsoße, Parmesan",
        preis: "9.99€",
      },
      {
        name: "Penne Arrabiata",
        info: "Tomatensoße, Chili",
        preis: "8.49€",
      },
    ],
  },
  {
    category: "Salat",
    dishes: [
      {
        name: "Caesar Salad",
        info: "Hähnchen, Parmesan, Dressing",
        preis: "6.99€",
      },
      {
        name: "Griechischer Salad",
        info: "Feta, Oliven, Tomaten",
        preis: "5.99€",
      },
    ],
  },
];
