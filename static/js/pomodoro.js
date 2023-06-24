timer = document.getElementById("timer");
state = document.getElementById("state");

function DisplayTimer(){
  const now = new Date();
  seconds = String(59-now.getSeconds()).padStart(2,"0");
  if (now.getMinutes()<30){
    nowMinutes = now.getMinutes();
  }
  else{
    nowMinutes = now.getMinutes()-30;
  }
  
  if (nowMinutes<25){
    timer.textContent = String(24-nowMinutes).padStart(2,"0")+":"+seconds;
    state.textContent = "作業中";
    document.getElementById("timer").style.color = "black";
  }
  else{
    timer.textContent = String(29-nowMinutes).padStart(2,"0")+":"+seconds;
    state.textContent = "休憩中";
    document.getElementById("timer").style.color = "green";
  }

  if ((nowMinutes==25 && now.getSeconds()==0) || (nowMinutes==0 && now.getSeconds()==0)){
    document.getElementById("audio").play();
    setTimeout(() => audio.pause(), 5000);
  }
  // フルスクリーンかどうかを判定しCSSを変更
  if (document.fullscreenElement){
    document.getElementById("timer").style.fontSize = "2000%";
  }
  else{
    document.getElementById("timer").style.fontSize = "1000%";
  }
}

setInterval(DisplayTimer,1);

fullscreen_button = document.getElementById("fullscreen_button");

function FullScreen(){
  document.getElementById("timer").requestFullscreen();
}

fullscreen_button.addEventListener("click", FullScreen);