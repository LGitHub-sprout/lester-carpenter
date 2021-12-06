// Weather App

// select element
const selectWeather = document.querySelector('#selectWeather');

// output paragraph
const weatherOutput = document.querySelector('#weatherOutput');

// bind select element to event: onchange
selectWeather.onchange = setWeather;

function setWeather() {

  // assign the select element option values to variable, choice
  let choice = selectWeather.value;

  if (choice === '') {
    weatherOutput.textContent = 'Please clap';
  } else if (choice === 'sunny') {
    weatherOutput.textContent = 'It\'s nice and sunny outside today. Wear shorts! Go to the park and get some exercise.';
  } else if (choice === 'rainy') {
    weatherOutput.textContent = 'It\'s raining. Put on your wellies and go splash some puddles!';
  } else if (choice === 'snowy') {
    weatherOutput.textContent = 'It\'s snowing! Go build a snowman or take your doggy out for a walk :)';
  } else if (choice === 'overcast') {
    weatherOutput.textContent = 'It isn\'t raining, but the sky is grey and gloomy; there could be a downpour any minute, so wear your wellies and raincoat just in case.';
  }
}
// setWeather(); // removing the call fixed bug: refresh didn't reset default para.

/*
  Reset Option and paragraph on page reload (using selectWeather)
  passing in select element ID and the desired option value.
*/
function resetOption(selectWeather, optionToUse) {
  let selectElement = document.querySelector('#selectWeather');
  let selectOptions = selectElement.options;

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

// console.log(weatherOptions);