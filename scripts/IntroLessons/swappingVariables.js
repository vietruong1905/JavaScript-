
console.log("You made it to the console");

let vietTruong = {
  first: "viet",
  last: "Truong",
  age: 13,
  haircolor: "black",
}

 let luongHoang = {
   first: "Luong",
   last: "Hoang",
   age: 17,
   haircolor:"black",
 }

 console.log(vietTruong);
 console.log(luongHoang);
  let swap= vietTruong.last;
  vietTruong.last =  luongHoang.last;
  luonghoang.lats = swap;
  console.log(vietTruong);
  console.log(luongHOang);
