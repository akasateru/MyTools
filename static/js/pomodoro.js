let whileWorking = true;
let time=1500;
minits = document.getElementById("minits");
seconds = document.getElementById("seconds");
state = document.getElementById("state");
startButton = document.getElementById("start");
stopButton = document.getElementById("stop");
resetButton = document.getElementById("reset");
startButton.disabled = false;
stopButton.disabled = true;
resetButton.disabled = true;

function DisplayTimer(){
  if (time<=1){
    document.getElementById("audio").play();
    setTimeout(() => audio.pause(), 4000);
    if (whileWorking){
      time=300;
      whileWorking=false;
      state.textContent = "休憩中";
    }
    else{
      time=1501;
      whileWorking=true;
      state.textContent = "作業中";
    }
  }
  time--;
  minits.textContent = String(Math.floor(time/60)).padStart(2,"0");
  seconds.textContent = String(Math.floor(time%60)).padStart(2,"0");
}

function StartTimer(){
  timerInterval = setInterval(DisplayTimer,1000);
  state.textContent = "作業中";
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function StopTimer(){
  clearInterval(timerInterval)
  state.textContent = "停止中";
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function ResetTimer(){
  time=1500;
  whileWorking=true;
  state.textContent = "停止中";
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  clearInterval(timerInterval)
  minits.textContent = String(Math.floor(time/60)).padStart(2,"0");
  seconds.textContent = String(Math.floor(time%60)).padStart(2,"0");
}

startButton.addEventListener("click",StartTimer)
stopButton.addEventListener("click",StopTimer)
resetButton.addEventListener("click",ResetTimer)