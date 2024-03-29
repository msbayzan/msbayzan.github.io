let button = document.getElementById("moveButton");
let clicks = 0;
let level = 1;
let timeout = 3000;
let timeoutId = null;

button.addEventListener("click", changePosition);

function moveButton() {
  let x = Math.random() * 300;
  let y = Math.random() * 300;
  button.style.marginLeft = x + "px";
  button.style.marginTop = y + "px";

  
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(moveButton, timeout);
}

function changePosition() {
  clicks++;
  moveButton(); 
  if (clicks === 3) {
    clicks = 0;
    level++;
    if(level!=6){
        alert("You are the winner! You can go next level " + level);

      }
      timeout -= 100;
      if (level == 3) {
          alert("Congrats! ");
          return;
      }
    }
    
  }
  
  
  timeoutId = setTimeout(moveButton, timeout);