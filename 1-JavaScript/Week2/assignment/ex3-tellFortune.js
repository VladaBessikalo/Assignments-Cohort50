/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.

function selectRandomly(arr) {
  const randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}

export function tellFortune(kidsOptions, partnerNamesOptions, locationOptions, jobTitlesOptions) {
  const prediction = `You will be a ${selectRandomly(jobTitlesOptions)} in ${selectRandomly(locationOptions)}, married to ${selectRandomly(partnerNamesOptions)} with ${selectRandomly(kidsOptions)} kids.`;
  return prediction;
  // I like this approach more, but it didn't pass automated testing
  // const predictedNumKids = selectRandomly(kidsOptions); 
  // const kidsText = predictedNumKids === 1 ? `1 kid` 
  //                 : predictedNumKids === 0 ? `no kids`
  //                 : `${predictedNumKids} kids`; 
  // const prediction = `You will be a ${selectRandomly(jobTitlesOptions)} in ${selectRandomly(locationOptions)}, married to ${selectRandomly(partnerNamesOptions)} with ${kidsText}.`;
  // return prediction;
}

function main() {
  const numKids = [
    0, 1, 2, 3, 4
  ];

  const partnerNames = [
    'Chad', 'Billy', 'Deryck', 'James', 'Corey'
  ];

  const locations = [
    'Amsterdam', 'Berlin', 'Lille', 'Paris', 'Tilburg'
  ];

  const jobTitles = [
    'Full-stack developer', 'Front-end developer', 'Back-end developer', 'Engineering manager', 'Business analysts'
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
