// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;
  }


  return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
}

wrapGifts(writeCards);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
  return number;
}