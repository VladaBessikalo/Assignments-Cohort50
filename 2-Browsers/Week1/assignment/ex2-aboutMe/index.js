/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function fillInYourInfo(nickname, favFood, hometown) {
  const spans = document.querySelectorAll('span');

  spans.forEach((span) => {
    if (span.id === 'nickname') {
      return span.textContent = nickname;
    } 
    if (span.id === 'fav-food') {
      return span.textContent = favFood;
    } 
    if (span.id === 'hometown') {
      return span.textContent = hometown;
    } 
  })

  const listOfLi = document.querySelectorAll('li');

  listOfLi.forEach((li) => {
    li.classList.add('list-item');
  }) 
}

fillInYourInfo('Vlada B', 'Pizza', 'Sevastopol');