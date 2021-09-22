let arr1 = [
  {
    id: 5547107123394,
    email: "sseevara235@gmail.com",
  },
  {
    id: 5547107113394,
    email: "sseevara234@gmail.com",
  },
  {
    id: 554722107123394,
    email: "sseevara233@gmail.com",
  },
  {
    id: 55471071265394,
    email: "sseevara232@gmail.com",
  },
  {
    id: 55471074523394,
    email: "sseevara231@gmail.com",
  },
];

let arr2 = [
  {
    id: 5547107123394,
    email: "sseevara235@gmail.com",
  },
  {
    id: 5547107113394,
    email: "sseevara234@gmail.com",
  },
];

let arr3 = [].concat(
  arr1.filter((obj1) => arr2.every((obj2) => obj1.email !== obj2.email)),
  arr2.filter((obj2) => arr1.every((obj1) => obj2.email !== obj1.email))
);

console.log(arr3);
