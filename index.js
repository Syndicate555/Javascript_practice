const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// Interates through the whole array
// companies.forEach((company) => {
//   console.log(company.name);
// });

// filter Finance companies
// companies.filter((company) => {
//   if (company.category == "Finance") {
//     console.log(company);
//   }
// });

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

// Companies that started in the 80s
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);
// console.log(eightiesCompanies);

// get 21 and older
const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// Map  -> Creates a new array from the current array
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap);

// sort -> changes the original array
const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

// same code with implicit return
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

const sortAges = ages.sort((a, b) => a - b); // ascending order
// const sortAges2 = ages.sort((a, b) => b - a); //descending order

console.log(sortAges);
console.log(ages);
// console.log(sortAges2);

// console.log(sortedCompanies);
// console.log(sortedCompanies2);
