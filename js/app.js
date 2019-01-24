document.addEventListener("DOMContentLoaded", function() {


  class WhackATroll {  // class contructor
    constructor() {
      this.trollImg = new Image();
      this.score = 0;
      this.startBtn = document.getElementById('start');
      this.boxes = document.getElementsByClassName('grid-item');
      this.trolls = document.getElementsByClassName('troll');
      this.random;
      this.timerUp = 0;
      this.gameOver = document.getElementsByClassName('grid-container');
      this.sound = document.createElement('audio');
      this.sound.src = 'sounds/Payout.wav';
      this.sound1 = document.createElement('audio');
      this.sound1.src = 'sounds/8d82b5_Evil_Laugh_Sound_FX.mp3';
  
    }

    // animateCircle() {
    //   let cursor = document.createElement('div');
    //   document.addEventListener('mousemove', e => {
    //     console.log('yeah');
        
    //     cursor.classList.add('follow');
    //     cursor.style.left = e.clientX + 'px';
    //     cursor.style.top = e.clientY + 'px';
    //     cursor.style.transition = "all 0.5s linear 0s";
    //     cursor.style.left = cursor.offsetLeft - 20 + 'px';
    //     cursor.style.top = cursor.offsetTop - 20 + 'px';
    //     document.body.appendChild(cursor);
    
    //     cursor.style.width = "50px";
    //     cursor.style.height = "50px";
    //     cursor.style.borderWidth = "5px";
    //     cursor.style.opacity = 1;
    //   });
    // }

    // random troll generator
    randomTrollGenerator() {
      let randomNumber = Math.floor(Math.random() * 9);          // random sequence created by math.random with amount of boxes on screen
      this.trolls[randomNumber].classList.add('trollsprite');    // added image of troll and named it classname trollsprite
      console.log(randomNumber);
    }
    // timer of game 
    setTime() {
      this.startBtn.addEventListener('click', e => {
        var interval = setInterval(e => {           // set interval so every sec the timer counts down
          if (this.timerUp <= 15) {
            //console.log(this.timerUp);
            this.timerUp ++;
            document.getElementById('timer').innerHTML = this.timerUp;
          }
          if (this.timerUp === 15) { 
            // document.getElementsByClassName('grid-item').style.display = 'none';
            document.getElementById('gameover').style.display = "block";
            document.getElementById('reset1').style.display = "block";
            clearInterval(interval);
          }
        }, 1000);
      });
    }

    //remove trolls
    removeTroll() {
      for (let i = 0; i < this.trolls.length; i++) {
        this.trolls[i].classList.remove("trollsprite"); 
      }
    }
    // adding onclick to boxes
    addListenersToBoxes() {
      for (let i = 0; i < this.trolls.length; i++) {
        this.trolls[i].addEventListener('click', e => { // onclick function when you click on troll adds 1 point. 
          if (e.target.className === 'troll trollsprite') {   
            // console.log('hit');
            this.score++; 
            document.getElementById('finalscore').innerHTML = this.score;
            this.sound.load();                          // loads sound again
            this.sound.play();                          // plays sound
          } else if (this.timerUp === 15) {
            e.target.disabled = true;
            document.getElementById('reset1').style.display = "block";
          } else {
            this.score--;                               // hitting the wrong box will make the user lose 1 point
            document.getElementById('finalscore').innerHTML = this.score;
            this.sound1.load();                        
            this.sound1.play();
          }
        });
      }
    }
  }
  const newGame = new WhackATroll(); // newGame is out instance of our object
  // newGame.animateCircle(); 
  newGame.setTime();  
    newGame.startBtn.addEventListener('click', function(e) {
        newGame.addListenersToBoxes();
        var timesRun = 0;
        var stop1 = setInterval(function() {
          newGame.randomTrollGenerator();
          timesRun += 1;                            // 15000/1000 = 10 times it runs to generate troll
          if (timesRun === 15) {
            clearInterval(stop1);
          }            // generates random trolls at different times
        }, 1000);
        var timesRun2 = 0;
        var stop2 = setInterval(function() {
          newGame.randomTrollGenerator();
          timesRun2 += 1;                         // 15000/750 = 13.333 times it runs second troll generator
          if (timesRun2 === 20) {
            clearInterval(stop2);
          }
        }, 750);
        setInterval(function(){
          newGame.removeTroll();
        }, 1800);
        e.target.disabled = true;
    });
}); // DOMContentLoaded

// PSEUDOCODE

// Click start
// trolls will pop up in a sequence one by one 
// timer of 30secs to hit as many trolls as possible
// if the player hits the troll, player gains a point. 
// if player misses troll loses 3 points.
// setTimeout for every time troll appears. 
// reset game button 

