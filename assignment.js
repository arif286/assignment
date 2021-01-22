// https://github.com/arif286/assignment


// kilometerToMeter function start
function kilometerToMeter(km) {
  if (km >= 1) {
    return km * 1000
  } else if (km <= 0) {
    return "Please input positive number"
  }
}

let result = kilometerToMeter(5)
console.log(result);



// budgetCalculator function start
function budgetCalculator(x, y, z) {
  const watch = 50;
  const phone = 100;
  const laptop = 500;
  let sum = 0;
  if ((x >= 0) && (y >= 0) && (z >= 0)) {
    sum = x * watch
    sum = sum + (y * phone);
    sum = sum + (z * laptop);
  } else if ((x < 0) || (y < 0) || (z < 0)) {
    return "Oh! no, please input positive number."
  }
  return sum
}

let result = budgetCalculator(1, 5, 6)
console.log(result);




// hotelCost function start
function hotelCost(day) {
  let totalCost = 0;
  if (day <= 10) {
    totalCost = day * 100;
  } else if (day <= 20) {
    let firstTenDay = 10 * 100;
    let remainingDay = day - 10;
    let secondTenDay = remainingDay * 80;
    totalCost = firstTenDay + secondTenDay;
  } else {
    let firstTenDay = 10 * 100;
    let secondTenDay = 10 * 80;
    let remainingDay = day - 20;
    let thirdTenDay = remainingDay * 50;
    totalCost = firstTenDay + secondTenDay + thirdTenDay;
  }
  return totalCost
}
let result = hotelCost(2);
console.log(result);


//megaFriend function start
function megaFriend(array) {
  let longestWord = "";

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

let word = megaFriend(["Habu", "Hablu", "Kabila", "Sokina", "Montu", "Jorina", ]);
console.log(word);