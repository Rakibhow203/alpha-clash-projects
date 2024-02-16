// hidden এর জন্ন function decleyer:-

function hideElemntById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

// show the section 
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}


function setBackgroundClorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}






// একটা রেন্দম alphabet banaite hobe 
function getARandomAlphabet() {
  //get or create an alphabet array
  
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // array হয়ে গেল -
  // console.log(alphabets);
// এবার কাজ একটা random  সংখা জেনারেট করবা ০ থেকা ২৫ এর মদ্দে-
  // get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // console.log(index);

  const alphabet = alphabets[index];
  // console.log(index, alphabet);
  return alphabet;
}