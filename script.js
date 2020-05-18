var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var timeEl = document.getElementById("time");
var wordEl = document.getElementById("word");
var split_word = poem.split(" ");
var seconds_left = 5;
var secondsLeft = 60;
var count = 0;

function prepareRead() {
  // Create the countdown timer.
  wordEl.style.display = "none";
  var timer_interval = setInterval(function(){
    seconds_left--;
    console.log(seconds_left);
    timeEl.innerHTML = "<h1>"+seconds_left+"</h1>";
    if (seconds_left === 0){
      clearInterval(timer_interval);
      speedRead();
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  var speed_timer = setInterval(function(){
    timeEl.style.display = "none";
    wordEl.style.display = "block";
      count++;
      secondsLeft--;
      if(split_word[count] === undefined ) {
        clearInterval(speed_timer);
      }
      else {
      wordEl.innerHTML = "<h1>"+split_word[count]+ "</h1>";
      console.log(split_word[count]);
      console.log(count);
      }
    
  }, 1000);
}

prepareRead();