// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function letterGrade(grade) {
  if (grade >= 80) {
    console.log("You did a good job");
  } else if (grade >= 70) {
    console.log("Keep trying!");
  } else if (grade >= 60) {
    console.log("ehhh");
  } else if (grade >= 55) {
    console.log("Not too good");
  } else {
    console.log("Bad grade, but you'll get 'em next time");
  }
}
letterGrade(90);

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

function multiplesOfTen(limit) {
  for (i = 10; i <= limit; i += 10) {
    console.log(i);
  }
}
multiplesOfTen(50);

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

function changeInQuarters(bill, price) {
  let change = bill - price;
  return change / 0.25;
}
console.log(changeInQuarters(20, 12.25));

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paid and amount cost

// function calcChange(amtPaid, cost) {
//   let hundreds = 0;
//   let fifties = 0;
//   let twenties = 0;
//   let tens = 0;
//   let fives = 0;
//   let ones = 0;
//   //   let hundredsOutput;
//   //   let fiftiesOutput;
//   //   let twentiesOutput;
//   //   let tensOutput;
//   //   let fivesOutput;
//   //   let onesOutput;
//   let change = amtPaid - cost;
//   if (change >= 100) {
//     while (change >= 100) {
//       hundreds++;
//       change -= 100;
//     }
//   }
//   while (change >= 50) {
//     fifties++;
//     change -= 50;
//   }
//   while (change >= 20) {
//     twenties++;
//     change -= 20;
//   }
//   while (change >= 10) {
//     tens++;
//     change -= 10;
//   }
//   while (change >= 5) {
//     fives++;
//     change -= 5;
//   }
//   while (change >= 1) {
//     ones++;
//     change--;
//   }
//   console.log(
//     `Your change will be ${hundreds} hundreds, ${fifties} fifties, ${twenties} twenties, ${tens} tens, ${fives} fives, and ${ones} ones.`
//   );
// }
// calcChange(1000, 50);
/////////////////////////////////////////////////////////////////////////////////////////
const changeOutputs = [];

function getNumBills(denomination, amtRemaining) {
  let bills = 0;
  while (amtRemaining - denomination >= denomination) {
    bills++;
    amtRemaining -= denomination;
  }
  if (bills > 1) {
    changeOutputs.push(`${bills} $${denomination} bills`);
  } else if ((bills = 1)) {
    changeOutputs.push(`${bills} $${denomination} bill`);
  }
  change = amtRemaining;
}

// for each bill type: calc how many of them, reduce remainingCost, put into string to be output
// to put into string: put into array -> .join(, )

function calcChange2(amtPaid, cost) {
  let change = amtPaid - cost;
  getNumBills(100, change);
  getNumBills(50, change);
  getNumBills(20, change);
  getNumBills(10, change);
  getNumBills(5, change);
  getNumBills(1, change);
  console.log(`Your change will be ${changeOutputs.join(", ")}`);
}
calcChange2(1000, 36);

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
function fizzbuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("Fizzbuzz");
      } else {
        console.log("Fizz");
      }
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzbuzz();
