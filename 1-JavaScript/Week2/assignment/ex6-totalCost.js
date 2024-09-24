/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  chips: 1.39,
  wine: 4.99,
  cheese: 3.59,
  grapes: 3.99,
  olives: 1.99
};

function calculateTotalPrice(listOfProducts) {
  const totalAmount =  Object.values(listOfProducts).reduce((acc, curPrice) => acc + curPrice, 0);
  return `Total: €${totalAmount}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const funcLength = calculateTotalPrice.length;
  if (funcLength === 1) {
    console.log('Passed: Function takes 1 parameter.');
  } else {
    console.log(`Failed: Function takes ${funcLength} parameters instead of 1.`);
  }
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expectedTotal = 'Total: €15.95';
  const result = calculateTotalPrice(cartForParty);
  if (result === expectedTotal) {
    console.log('Passed: Correct total returned.');
  } else {
    console.log(`Failed: Expected "${expectedTotal}", but got "${result}".`);
  }
}

function test() {
  test1();
  test2();
}

test();
