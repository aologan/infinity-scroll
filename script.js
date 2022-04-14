const button = document.getElementById('btn');
const audioElement = document.getElementById('audio');
const apikey = '13d03bb0ea144502a06aca9a0e896f88';
// Disable & Enable Button
function toggleButton(){
    button.disabled = !button.disabled;
}


var apiJokes = [];
// get  jokes from api
async function getJokes() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(apiUrl);
    apiJokes = await response.json();
    console.log(apiJokes.value);


  } catch (error) {
    alert(error);
  }
  //Run text to speech
  tellJoke(apiJokes.value);
  //Disable Button
  toggleButton();
}




//function to pull random joke from list
function tellJoke(joke){
    VoiceRSS.speech({
        key: apikey,
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}



//button event listener
button.addEventListener('click', getJokes); 
audioElement.addEventListener('ended', toggleButton)