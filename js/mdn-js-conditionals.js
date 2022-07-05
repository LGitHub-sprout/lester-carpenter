// Weather App

// select element
const selectWeather = document.querySelector('#selectWeather');

// output paragraph
const weatherOutput = document.querySelector('#weatherOutput');

// bind select element to event method: change
// can also use property: selectWeather.onchange = setWeather;
selectWeather.addEventListener('change', setWeather);

function setWeather() {
  // assign the select element option values to variable, choice
  let choice = selectWeather.value;

  switch (choice) {
    case 'sunny':
      weatherOutput.textContent = 'It\'s nice and sunny outside today. Wear shorts! Go to the park and get some exercise.';
      break;
    case 'rainy':
      weatherOutput.textContent = 'It\'s raining. Put on your wellies and go splash some puddles!';
      break;
    case 'snowy':
      weatherOutput.textContent = 'It\'s snowing! Go build a snowman or take your doggy out for a walk :)';
      break;
    case 'overcast':
      weatherOutput.textContent = 'It isn\'t raining, but the sky is grey and gloomy; there could be a downpour any minute, so wear your wellies and raincoat just in case.';
  }
}
// setWeather(); // removing the call fixed bug: refresh didn't reset default para.

// select element variable
// html element variable 
// function darkMode(bgColor, textColor)
// onchange event handler
// ternary conditional
/*
 when 'Black' is chosen from the select element dropdown
 change the html background color to black and the text color to white, or vice versa.
*/

/*
 What are the selectors I will need?
 What methods and properties are necessary, IOW onclick or addEventListener('click', functionName), etc.
 What conditions are needed to produce outcomes?
 I have the select element variable, 'selectWeather' already
*/
// Get App wrapper element variable for bgColor
const appWrapper = document.querySelector('.weather-app-wrapper');
let choice2;
selectWeather.value = choice2;
// const choice2 = selectWeather.value;

// set function to pass variables as properties that change when event fires
function updateApp(bgColor, cssText, borderBottom) {
  // https://attacomsian.com/blog/javascript-dom-style-property
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
  appWrapper.style.backgroundColor = bgColor;
  // appWrapper.setAttribute('style', 'background-color: yellow;');
  // weatherOutput.style.color = textColor;
  // weatherOutput.style.fontSize = fontSize;
  weatherOutput.style.cssText = cssText;
  appWrapper.style.borderBottom = borderBottom;
}
/*
  Remember that the change happens when an event fires, i.e., bind the event to a function.
  I don't fully understand this unnamed function notation, however.
*/
selectWeather.onchange = function() {
  let choice2 = selectWeather.value;
  switch (choice2) {
    case 'sunny': updateApp('yellow', 'color:blue; font-size: 48px', 'solid 5px black');
      break;

    case 'rainy': updateApp('grey', 'color:darkgrey', 'solid 5px black');
      break;

    case 'snowy': updateApp('lightgrey', 'color:grey', 'solid 5px black');
      break;

    case 'overcast': updateApp('darkgrey', 'color:blue', 'solid 5px black');
      break;
  }
};

/*
  Reset Option and paragraph on page reload (using selectWeather)
  passing in select element ID and the desired option value.

  Gratefully used as a learning tool from
  https://thisinterestsme.com/change-select-option-javascript/
  Resets select default option on refresh.
*/
function resetOption(selectWeather, optionToUse) {
  let selectElement = document.querySelector('#selectWeather');
  let selectOptions = selectElement.options; // options is an object?

  // Using bracket notation, set 'opt' to the select element's option index (thus giving access to the object's properties) (.selectedIndex below) as it loops thru each option.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
  // access to object's properties with [] using 'j' as counter awa a key to the value? 
  for (let opt, j = 0; opt = selectOptions[j]; j++) {
    if (opt.value === optionToUse) {
  // if above condition is true
  // then assign the option value from 'j' to whatever the first parameter is.
      selectElement.selectedIndex = j;
      break;
    }
  }
}
resetOption(selectWeather, 'default');

/*
  MDN Test Your Skills: JS Conditionals 1
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals#conditionals_1
*/
// let season = 'summer';
// let response;

// const sectionC1 = document.getElementById('conditionals1');
// const seasonPara = document.createElement('p');
// let responsePara = document.createElement('p');
// sectionC1.appendChild(seasonPara).setAttribute('class', 'season');
// sectionC1.appendChild(responsePara).setAttribute('class', 'response');
// sectionC1.setAttribute('class', 'conditionals1');

// Let's try a ternary operator with a template literal :)
// (season !== 'summer' && season !== 'winter' && season !== 'fall' && season !== 'spring' ? seasonPara.textContent = `Please enter the current season.` : seasonPara.textContent = `Yay, it's ${season}!`);
// if (season !== 'summer' && season !== 'winter' && season !== 'fall' && season !== 'spring') {
//   seasonPara.textContent = 'Please enter the current season.';
// }
// if (season === 'fall') {
//   responsePara.textContent = 'Rake a bunch of leaves into a huge pile and then jump into it with complete abandon.';
// } if (season === 'winter') {
//   responsePara.textContent = 'do winter shit.';
// } if (season === 'spring') {
//   responsePara.textContent = 'do spring shit.';
// } if (season === 'summer') {
//   responsePara.textContent = 'If it\'s summertime in NYC and it\'s either July or August... the best you can do is to try not to be miserable in the heat.';
// }

/*
  Array stuff learned from 
  https://stackoverflow.com/questions/58520905/in-a-javascript-ternary-operator-can-you-loop-through-an-array

let seasonArr = ['summer', 'spring', 'fall', 'winter'];
console.log(seasonArr.indexOf('summer'));
if (seasonArr.includes('summer')) {
  season = seasonArr[0];
  seasonPara.textContent = `Yay, it\'s seasonArr ${season}!`;
  responsePara.textContent = 'If it\'s summertime in NYC and it\'s either July or August... the best you can do it trying not to be miserable in the heat.'
}
 if (seasonArr.includes('winter')) {
  season = seasonArr[3];
  seasonPara.textContent = `Yay, it\'s seasonArr ${season}!`;
  responsePara.textContent = 'Do winter shit.'
}
if (seasonArr.includes('spring')) {
  season = seasonArr[1];
  seasonPara.textContent = `Yay, it\'s seasonArr ${season}!`;
  responsePara.textContent = 'Do spring shit.'
}
if (seasonArr.includes('fall')) {
  season = seasonArr[2];
  seasonPara.textContent = `Yay, it\'s seasonArr ${season}!`;
  responsePara.textContent = 'Why Do fall shit.'
}
*/

/*
  MDN Test Your Skills: Conditionals 2
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals#conditionals_2

let response;
// Ensure 'score' is a number and 'machineActive' is boolean.
let score = Number();
let machineActive = Boolean();

// First, ensure machine is on. Reply if score is '666'.
if ( ! machineActive && score === 666) {
  response = 'Very funny, wise guy. Start the machine.';
} else if (score === 666 && machineActive) {
  response = 'Very funny, wise guy. Enter your your REAL score.';
} else {
  response = 'Start the machine.';
} // Test score and reply when condition is true.
if ((machineActive) && (score < 0 || score > 100)) {
  response = 'That score isn\'t possible. Re-enter your score.';
} else if ((machineActive) && (score <= 19)) {
  response = 'This is a terrible score — total fail!';
} else if ((machineActive) && (score >= 20 && score <= 39)) {
  response = 'You know some things, but it\'s still a bad score. Needs improvement.';
} else if ((machineActive) && (score >= 40 && score <= 69)) {
  response = 'You did a passable job — not bad!';
} else if ((machineActive) && (score >= 70 && score <= 89)) {
  response = 'That\'s a great score — you really know your stuff.';
} else if ((machineActive) && (score >= 90 && score <= 100)) {
  response = 'What an amazing score! Are you for real?';
}
*/

/*
  MDN Test Your Skills: Conditionals 3
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals#conditionals_3

  Struggled a bit with this one and found help here:
  https://stackoverflow.com/questions/17145723/how-can-i-use-ranges-in-a-switch-case-statement-using-javascript#17145931
  and
  https://www.programiz.com/javascript/switch-statement
  let response;

// Ensure 'score' is a number and 'machineActive' is boolean.
const score = Number(666);
const machineActive = Boolean(true);

// pseudo-code: if CASE is TRUE, return response; else break.
// What am checking? A: whether a condition is TRUE or FALSE.
switch (true) {
  case score === 666 && machineActive === false:
    response = 'Very funny, wise guy. Start the machine.';
    break;
  case (machineActive === false):
    response = 'Start the machine.';
    break;
  case (machineActive === true && (score === 666)):
    response = 'Very funny, wise guy. Enter your your REAL score.';
    break;
  case (machineActive === true && (score < 0) || (score > 100)):
    response = 'That score isn\'t possible. Re-enter your score.';
    break;
  case (machineActive === true && (score <= 19)):
    response = 'This is a terrible score — total fail!';
    break;
  case (machineActive === true && (score >= 20) && (score <= 39)):
    response = 'You know some things, but it\'s a pretty bad score. Needs improvement.';
    break;
  case (machineActive === true && (score >= 40) && (score <= 69)):
    response = 'You did a passable job, not bad!';
    break;
  case (machineActive === true && (score >= 70) && (score <= 89)):
    response = 'That\'s a great score, you really know your stuff.';
    break;
  case (machineActive === true && (score >= 90) && (score <= 100)):
    response = 'What an amazing score! Did you cheat? Are you for real?';
}
const section = document.getElementById('conditionals2');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
*/

/*
  MDN Test Your Skills: Conditionals 4
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals#conditionals_4
*/
// T or F depending whether login machine is on or off. 
const machineActive = true; // false
// User's login pw.
const pwd = 'cheese';
// Prints to output panel indicating whether machine is on/off.
let machineResult;
// Prints whether login attempt was successful.
let pwdResult;

if (machineActive === true) {
  machineResult = 'The machine is on.';
} else {
  machineResult = 'The machine is off.';
}
(machineActive === true && pwd === 'cheese' ? pwdResult = 'are' : pwdResult = 'are not');

const sectionConditionals4 = document.getElementById('conditionals4');
const para4 = document.createElement('p');
const para5 = document.createElement('p');
para4.textContent = `${machineResult}`;
para5.textContent = `You ${pwdResult} logged in.`;
// sectionConditionals4.appendChild(para4);
// sectionConditionals4.appendChild(para5);





