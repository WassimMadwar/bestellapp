let withDelivery = false;
const opert = "plus";


// i should leater intgretion object categories in allMeals !!!!
const iconSvg = {
  iconKasse: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.87 274.78">
              <defs>
                <style>
                  .d {
                    fill: #fff;
                  }
                  .e {
                    fill: currentColor;
                  }
                </style>
              </defs>
              <g id="a" />
              <g id="b">
                <g id="c">
                  <circle class="e" cx="361.74" cy="221.84" r="21.29" />
                  <path
                    class="e"
                    d="M110.2,99.53l84.48,132.08c2.92,4.57,8.55,6.61,13.72,4.98l167.07-52.61c5-1.57,8.4-6.21,8.4-11.45v-10.83c0-8.02-7.72-13.79-15.41-11.51l-143.07,42.29c-5.28,1.56-10.94-.67-13.74-5.41l-4.33-7.32c-3.93-6.65-.64-15.24,6.73-17.56l161.41-50.83c5-1.57,8.4-6.21,8.4-11.45v-16.58c0-8.12-7.89-13.9-15.63-11.45l-179.51,56.87c-7.2,2.28-15.03-.71-18.87-7.21l-2.56-4.33c-3.92-6.63-.66-15.19,6.67-17.54L375.53,35.12c4.97-1.59,8.34-6.21,8.34-11.43V12.01c0-8.14-7.94-13.92-15.69-11.43L116.63,81.63c-7.49,2.41-10.67,11.27-6.43,17.9Z"
                  />
                  <path
                    class="e"
                    d="M107.17,73.23l8.48-3.16c8.14-3.04,11.29-12.91,6.4-20.1L93.02,7.27c-3.27-4.82-9.28-6.97-14.87-5.32L9.62,22.11C2.98,24.06-1.08,30.75,.25,37.54l2.51,12.84c1.58,8.06,9.97,12.82,17.7,10.04l41.49-14.94c5.46-1.96,11.56-.2,15.12,4.38l14.83,19.05c3.6,4.62,9.78,6.37,15.27,4.32Z"
                  />
                  <circle class="e" cx="252.03" cy="253.49" r="21.29" />
                  <circle class="d" cx="252.03" cy="253.49" r="10.37" />
                  <circle class="d" cx="361.74" cy="221.84" r="10.37" />
                </g>
              </g>
            </svg>
  `,
  iconBasket: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M6 6h15l-1.5 8.5h-12L6 6zm-1-2a1 1 0 0 0 0 2h1l1.5 9a2 2 0 0 0 2 1.5h10a2 2 0 0 0 2-1.5l1.5-9h1a1 1 0 1 0 0-2h-16zm5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                />
</svg>
  `,
  iconDelete: `
  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path
                          d="M3 6h18v2H3V6zm2 3h14v12H5V9zm3 2v8h2v-8H8zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zM9 3h6v2H9V3z"
                        />
                      </svg>`,
};

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
      {
        Id: 3,
        imgSrc: "../assets/img/ChickenSandwich.webp",
        name: "Chicken Sandwich",
        info: "Gegrilltes Hähnchen, Salat",
        preis: 5.99,
      },
    ],
  },
  {
    category: "Pizza",
    dishes: [
      {
        Id: 4,
        imgSrc: "../assets/img/MargheritaPizza.jpg",
        name: "Margherita",
        info: "Tomatensoße, Mozzarella",
        preis: 7.99,
      },
      {
        Id: 5,
        imgSrc: "../assets/img/SalamiPizza.jpg",
        name: "Salami Pizza",
        info: "Tomatensoße, Salami, Käse",
        preis: 8.99,
      },
      {
        Id: 6,
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
        Id: 7,
        imgSrc: "../assets/img/SpaghettiBolognese.jpg",
        name: "Spaghetti Bolognese",
        info: "Hackfleischsoße, Parmesan",
        preis: 9.99,
      },
      {
        Id: 8,
        imgSrc: "../assets/img/PenneArrabiata.jpg",
        name: "Penne Arrabiata",
        info: "Tomatensoße, Chili",
        preis: 8.49,
      },
      {
        Id: 9,
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
        Id: 10,
        imgSrc: "../assets/img/CaesarSalad.jpg",
        name: "Caesar Salad",
        info: "Hähnchen, Parmesan, Dressing",
        preis: 6.99,
      },
      {
        Id: 11,
        imgSrc: "../assets/img/GriechischerSalat.jpg",
        name: "Griechischer Salad",
        info: "Feta, Oliven, Tomaten",
        preis: 5.99,
      },
      {
        Id: 12,
        imgSrc: "../assets/img/GriechischerSalat.jpg",
        name: "Griechischer Salad",
        info: "Feta, Oliven, Tomaten",
        preis: 5.99,
      },
    ],
  },
];

const arrOrders = [];

const statu = {
  pickup: { imgSrc: "../assets/img/abholung.png", 
    txt: "Abholung" },
  delivery: {
    imgSrc: "../assets/img/delivery.png",
    txt: "Lieferung",
  },
};
