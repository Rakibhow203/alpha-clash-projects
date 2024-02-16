
/* function play() {
  // step-1: hide the home screen. to hide the screen add the class hidden to the home section. যখন আমরা home screen এ play button এ click করব তখন home screen hide হয়ে যাবে playGround section open হয়ে যাবে।

  const homeSection = document.getElementById('home_screen');
  homeSection.classList.add('hidden');
  // console.log(homeSection.classList);

  // show the playground
  const playGroundSection = document.getElementById('play_ground');
  // console.log(playGroundSection.classList);
  playGroundSection.classList.remove('hidden');
  
} */

// সেইম কাজটাকে যদি একটা funtion দিয়ে করতে ছাই তাহলে কেমন হয় দেখ ঃ-------

function continueGame() {
  // step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log('your random alphabet', alphabet);

  //set randomly generated  alphabet to the screen(show or display it)
  // কোন একটা উপাদান এর মদ্ধে কোন একটা জিনিস দেখাইতে চাই তাহলে - উপাদান টা যদি paragraph div span হয় তাহলে innerTex হিসাবে set করি-
  const currentAlphabetElement = document.getElementById('current_alphabet');
  currentAlphabetElement.innerText = alphabet;
  // set background color
  setBackgroundClorById(alphabet);


}


function play() {
  hideElemntById('home_screen');
  showElementById('play_ground');
  continueGame()
}

