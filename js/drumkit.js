/***************************** Drumkit App ******************************
  
  https://www.toptal.com/developers/keycode/for/l 
  Attach an audio sound to the 'keydown' event for each sound it represents.
  On 'keydown', add a class of 'playing' to the span that plays the sound it represents.
  Also on 'keydown' add an animation on the .key class that changes the styling of the div to make its border color change and pop out and back very quickly. 

  Pseudocode:
  When a user presses a key on the keyboard corresponding to one depicted on the Drumkit page, e.g., the key representing the letter 'A', then play the sound associated with that key (as named on-screen) and animate the square element transform effect (scale border and box-shadow) from the .key values to the .playing values that makes it pop out a little and change color. The element transform should pop out very quickly and pop back to its original state very quickly. Like, pop-pop! very fast. 

  IOW, add the sound on the 'keydown' and add the class '.playing' (which 'transforms' the border and box-shadow styles) and then remove the added styles using methods and properties of the appropriate DOM interface. 

  Listen for a 'keydown' event on window interface.
  Pass in the event object into the listener.
  If there's an audio element on the page that has the keycode corresponding to the 'keydown' event? 
    Get the keyCode property (from passed event) and append a class called 'playing' that:
      1.  plays the audio element's sound (using the appropriate DOM interface)
      2.  changes the color of the border
      3.  gives a slight box-shadow of '0 0 1rem #ffc600'
      4.  transforms the scale by 1.1

  How can I select it to make sure each key's unique data-key code is passed to the selector that will then play the correct sound?
    Ea key's keycode is a property of the event which can be accessed using dot notation on the event that gets passed into the function. 

  Be sure to account for users pressing keys that aren't represented on the page so that the function stops (instead of returning null) if they're pressed. See HTMLMediaElement interface for dealing with audio elements.

  Be sure to have the sound play over and over at each 'keydown' for a rapid fire effect.

  Loop through all the .key divs in order to remove the transform (a property on all the .key elements) using a function called removeTransform()
    and set an event listener for Window.transitionend
    transform is a property on the event (I think) and 'transitionend' is def an event which can be found by logging the event.
  
  Coding it:
  Had trouble following the video and ended up searching for a solution which was to not place calling function in addEventListener() but to just use a callback function.

  What is being transformed? Check the CSS 'transform' property for details.
    Bump up the size of the box just slightly, e.g., make it slightly bigger. 
    Change the border color and add some box shadow.

  What am I trying to select and what do I want to do with it?
  I want to access the div using its unique keyCode, associated with the kbd element, so I can add the .playing class to it when the playSound function runs (and the key is pressed). 
    It's returning null... of course.

  OH RIGHT! I have to select ALL then loop through since it's a NodeList. 
  Ok, I think I'm back in business. Now I need to add the .playing class.
    Turns out this works but is unnecessary.
*/
function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // Exit if there's no audio/keyCode pair on a key.
  audio.currentTime = 0;
  audio.play();
  /*
    Was initially confused about needing to loop through the key elements mostly because I had a hard time selecting them with the persnickity variable inside a template literal and thought I must be doing it wrong.
    Thing is that looping also works; it's just unnecessary.
    And it does beg the Q that if I can do it here, why can't I remove the class without looping?
    So, I guess trying to remove it inside the play function would remove it too soon and cause the function to break?
    Or, I could set a timeOut or whatever (not that I know how to do that) but Wes says those cause syncing issues, so prop not a good idea.
  */
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // Add .playing class to key element.
  key.classList.add('playing');
  // console.log('the playing target: ', e.target)
  // console.log('this is undefined', e.propertyName) 
}
/*
I don't remember where the remove function goes and keys isn't in scope inside it to remove playing from the selector.
BOOM! I remember Wes talked about using 'this' keyword.
Ok so I should try putting it in the event listener function callback itself.
Yeah, that's not working. I really don't remember what Wes did.
*/
/*
Remove the transition
Where is transition EVENT located? 
  Web APIs > TransitionEvent > .propertyName 
What am I looking for? 
  Ans: a CSS transition creates a 'transitionend' event, maybe?
Does transition only show on the exact selector that a transition is used on or will it show on the element? keys is an object and 'key' the var in the loop is 'undefined'
*/
function removeTransition(e) {
  // console.log(e.propertyName)
  // console.log('remove target is:' , e.target)
  // If there's no transform property... not sure about this. It was correct!
  if (e.propertyName !== 'transform') return; 
  e.target.classList.remove('playing');
  // this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => addEventListener('transitionend', removeTransition));

// keys.forEach(key => addEventListener('transitionend', findProperty));
// function findProperty(e) {
//   // console.log('findProperty: ', e.propertyName, 'typeof keys is ', typeof keys)
// }

// function removeTransform(event) {
//   this.classList.remove('playing');
// }
// window.addEventListener('transitionend', (e) => {
//   this.classList.remove('playing');
// });
window.addEventListener('keydown', playSound);




 



