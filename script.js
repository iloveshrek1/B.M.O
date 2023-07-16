// script.js
let input_value; 

function getRandomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  const options = [
    
    ' I am B.M.O! a simple AI i can help you with ur chocies with ur consoles to insure that you have a great time gaming(: i can help you with these consoles as of right now: ,xbox ,playstiaion ,pc ,vr choose if you want to fix  or buy new consoles then you can select your console  (if you made a mistake writing it may not work)',
  
  
    ' I am B.M.O! your virtual assistant i will be happy to help you with these things as of the time:xbox , playstation ,pc , vr but first you need to select your operation (fix or buy) if you wirte a word incorrectly i may not work',


    ' I am B.M.O! now am here to help you i aint really smart but i can help you with some gaming stuff like xbox, playstation , pc, vr, before selecting your console you need to select if you want to fix or buy yeah any mistake and i may not work(:', 
  

    ' I am B.M.O! your assistant i can help you with these things as of right now xbox, playstation ,pc ,vr before selecting your console you need to select your operation (fix or buy)! if you make a mistake in typing i may not work :D'


];
  
  const randomChoice = getRandomChoice(options);
  


document.getElementById('submit-button').addEventListener("click", function greeting() {
    let input_value = document.getElementById('input-text').value;
    
    
        document.getElementById('B.M.O').innerHTML = "hello " +input_value+ randomChoice
        
        document.getElementById('submit-button').removeEventListener("click", greeting);
   
  });

 

 
  let currentState = 'selection';

  document.getElementById('submit-button').addEventListener("click", function Fixhelping() {
    let input_value = document.getElementById('input-text').value;
    console.log("sucsses");
    //current state for fix selection
    let currentState = "Fixselection";
    if (currentState === 'Fixselection') {
      if (input_value === "xbox") {
        document.getElementById('B.M.O').innerHTML = "Do you want to fix one or buy one?";
    
        // Dispatch custom event signaling the selection of "xbox"
        const event = new CustomEvent('FixxboxSelected');
        
        document.dispatchEvent(event);
      } else if (input_value === "playstation") {
        document.getElementById('B.M.O').innerHTML = "Do you want to fix one or buy one?";
        // Dispatch custom event signaling the selection of "playstation"
        const event = new CustomEvent('FixplaystationSelected');
        document.dispatchEvent(event);
      } else if (input_value === "pc") {
        document.getElementById('B.M.O').innerHTML = "Do you want to fix one or buy one?";
        // Dispatch custom event signaling the selection of "pc"
        const event = new CustomEvent('FixpcSelected');
        document.dispatchEvent(event);
      } else if (input_value === "vr") {
        document.getElementById('B.M.O').innerHTML = "Do you want to fix one or buy one?";
        // Dispatch custom event signaling the selection of "vr"
        const event = new CustomEvent('FixvrSelected');
        document.dispatchEvent(event);
      }
    }
    
    // Reset the input value
    input_value = '';
  });
  //xbox functions
  document.addEventListener('FixxboxSelected', function handleConsoleSelected(event) {
    
    currentState = 'fixSelection';
  });
  
  document.addEventListener('FixplaystationSelected', function handleConsoleSelected(event) {
    currentState = 'fixSelection';
  });
  
  document.addEventListener('FixpcSelected', function handleConsoleSelected(event) {
    currentState = 'fixSelection';
  });
  
  document.addEventListener('FixvrSelected', function handleConsoleSelected(event) {
    currentState = 'fixSelection';
  });
  
  document.getElementById('submit-button').addEventListener("click", function handleFixAction(event) {
    let input_value = document.getElementById('input-text').value;
     
    if (currentState === 'fixSelection' && input_value === "fix") {
      document.getElementById('B.M.O').innerHTML = "Go to the nearest repair store or repair it yourself! (be careful!)";
    }
  });
  
