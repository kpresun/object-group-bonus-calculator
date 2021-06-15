const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


function employeeFunction( employeeObject ) {
  let additionalBonus = 0;
  let bonus = 0;
    if (employeeObject.reviewRating = 3) {
    bonus = 0.04;
    }
    else if (employeeObject.reviewRating = 4) {
    bonus = 0.06;
    } 
    else if (employeeObject.reviewRating = 5) {
    bonus = 0.10;
    }
    console.log(bonus);
    
    if (employeeObject.employeeNumber.length = 4) {
    additionalBonus = 0.05;
    }
    else if (employeeObject.annualSalary > 65000) {
    additionalBonus -= 0.01;
    }
    console.log(additionalBonus);
  
    let realBonus = bonus + additionalBonus;
  
    if (realBonus > 0.13) {
    realBonus = 0.13;
    }
    else if (realBonus < 0) {
    realBonus = 0;
    }
  console.log(realBonus);
  const object = {
    name: employeeObject.name,
    bonusPercentage: realBonus * 100,
    totalCompensation: employeeObject.annualSalary + (1 + realBonus)*employeeObject.annualSalary,
    totalBonus: (1 + realBonus) *employeeObject.annualSalary
    }
    return object;
  }
console.log(employeeFunction(employees[0]));
console.log(employeeFunction(employees[1]));
console.log(employeeFunction(employees[2]));
console.log(employeeFunction(employees[3]));
console.log(employeeFunction(employees[4]));
  // pass through each array item's object
  // consider if each item matches criteria
  // go to the next item and see if they match criteria
  // 