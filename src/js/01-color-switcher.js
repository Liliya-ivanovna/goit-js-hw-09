const btnStart=document.querySelector('button[data-start]');
const btnStop=document.querySelector('button[data-stop]');
if(btnStart){
    getRandomHexColor()
}

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
