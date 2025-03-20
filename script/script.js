let obj1 = {
  name: "koko",
  age: 24,

  title: "deveolper",
  company: "DA",
};
console.log("to return key und value");
console.log(obj1);
console.log("===========================================");
console.log("\n=======Object.values(obj1)=============");

let valuesObj1 = Object.values(obj1);
console.log("Only values  " + valuesObj1);

console.log("===========================================\n");
console.log("\n======Object.keys(obj1=================");
let keyObj1 = Object.keys(obj1);

console.log("Only Keys  " + keyObj1);

let arrDB = [];
console.log("===========================================");

console.log("\nto do itirition an elements of object");
for (let i = 0; i < keyObj1.length; i++) {
  const element = keyObj1[i];
  arrDB.push(obj1[element]); // it is same = arrDB.push(obj1[keyObj1[i]])

  console.log(obj1[keyObj1[i]]);
}
console.log("===========================================");
console.log("\n========= findIndex-Methode ==============");

let myArrOfObject = [
  {
    name: "Max",
    is_a_good_guy: true,
  },
  {
    name: "Peter",
    is_a_good_guy: false,
  },
  {
    name: "Arnold",
    is_a_good_guy: true,
  },
  {
    name: "Justus",
    is_a_good_guy: true,
  },
  {
    name: "Bombur",
    is_a_good_guy: false,
  },
];

JustusIndex("Justus");
function JustusIndex(nam) {
  let namIndex = myArrOfObject.findIndex((person) => person.name === nam);
  if (namIndex !== -1) {
    console.log(`index of ${nam} is : ${namIndex}`);
    let info = myArrOfObject.splice(namIndex, 1)[0];
    // let info = myArrOfObject.splice(namIndex, 1);
    console.log("\n========= getInfo(info) ==============");
    getInfo(info);
  }
}

// getInfo(info);
function getInfo(obj) {
  let objKeys = Object.keys(obj);
  console.log("getInfo()");

  objKeys.forEach((key) => {
    // console.log("----------------");
    // console.log(key);
    console.log(obj[key]);
    console.log("----------------");
  });

  console.log("----------------- end -----------------");
  // Object.values(info).forEach((value) => console.log("short : " + value));
}
console.clear();
console.log("===========================================");

console.log("\n========= library ==============");
let library = {
  info: {
    name: "Stadtbibliothek",
    location: {
      city: "Musterstadt",
      coordinates: { lat: 48.1351, lon: 11.582 },
    },
  },
  sections: {
    fiction: [
      {
        shelf: 1,
        book: {
          title: "Die Verwandlung",
          author: {
            name: "Franz Kafka",
            born: "1883-07-03",
            died: "1924-06-03",
          },
          year: 1915,
          status: "ausgeliehen",
        },
      },
      {
        shelf: 2,
        book: {
          title: "1984",
          author: {
            name: "George Orwell",
            born: "1903-06-25",
            died: "1950-01-21",
          },
          year: 1949,
          status: "verfügbar",
        },
      },
    ],
    nonFiction: [
      {
        shelf: 3,
        book: {
          title: "Eine kurze Geschichte der Zeit",
          author: {
            name: "Stephen Hawking",
            born: "1942-01-08",
            died: "2018-03-14",
          },
          year: 1988,
          status: "verfügbar",
        },
      },
    ],
  },
};
console.log("\n========= Standort der Bibliothek ==============");
console.log(library.info.location);
console.log(library.info.location.coordinates);
console.log("----------------- end -----------------");

console.log("\n========= status des Buches 1984 ==============");
console.log(library.sections.fiction[1].book.status);
console.log("----------------- end -----------------");

console.log("\n========= fiktionalen Büchernamen ==============");

function getBooksName(bookType) {

  let keyBook = Object.keys(bookType);
  keyBook.forEach((key) => {
    console.log(bookType[key].book.title);
    if (bookType[key].book.title === "1984") {
      console.log("Verfügbarkeit von '1984':", bookType[key].book.status);
    }
  });

  console.log("----------------- end -----------------");
}
getBooksName(library.sections.fiction);
// console.log(books);

// objLibrary
//    objInfo
//        name
//        objlocation
//            city
//            objCoordinates
//                lat
//                lon

//    objSection
//        arrFiction
//             shelf
//             objBook
//               title
//               objAuthor
//                 name
//                 born
//                 died
//               year
//               status

//        arrNonFiction
//             shelf
//             objBook
//               title
//               objAuthor
//                 name
//                 born
//                 died
//               year
//               status
