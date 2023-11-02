const customName = document.getElementById('customname'); //enter custom name//
const randomize = document.querySelector('.randomize'); //generate random story//
const story = document.querySelector('.story'); 

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Whale", "Big Bear", "Father Fawn"];
const insertY = ["the woods", "6 Flags", "the Purple House"];
const insertZ = ["spontaneously danced", "evaporated into vapor in the air", "turned into a cat and ran away"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    newStory = newStory.replace("300 pounds", weight);
    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}


