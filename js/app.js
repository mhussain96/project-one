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
    }

    animateCircle() {
      let circle = document.createElement('div');
      document.addEventListener('mousemove', e => {
        console.log('yeah');
        
        // circle.setAttribute('class', 'circle');
        // circle.style.left = e.clientX + 'px';
        // circle.style.top = e.clientY + 'px';
        // circle.style.transition = "all 0.5s linear 0s";
        // // document.appendChild(circle);
        // circle.style.left = circle.offsetLeft - 20 + 'px';
        // circle.style.top = circle.offsetTop - 20 + 'px';
    
        // circle.style.width = "50px";
        // circle.style.height = "50px";
        // circle.style.borderWidth = "5px";
        // circle.style.opacity = 0;
      });
    }

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
          if (this.timerUp <= 10) {
            //console.log(this.timerUp);
            this.timerUp += 1;
            document.getElementById('timer').innerHTML = this.timerUp;
          }
          if (this.timerUp === 10) {
            // this.boxes.document.getElementsByClassName('grid-item').style.display = "none";
            // document.getElementsByClassName('gameover').style.display = "block";
            console.log('end'); 
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
            console.log('hit');
            this.score++; 
            document.getElementById('finalscore').innerHTML = this.score;
          } else {
            this.score--; // hitting the wrong box will make the user lose 1 point
            document.getElementById('finalscore').innerHTML = this.score;
          }
        });
      }
    }
  }
  const newGame = new WhackATroll(); // newGame is out instance of our object
  newGame.animateCircle(); 
  newGame.setTime();  
    newGame.startBtn.addEventListener('click', function(e) {
        newGame.addListenersToBoxes();
        var timesRun = 0;
        var stop1 = setInterval(function() {
          newGame.randomTrollGenerator();
          timesRun += 1;                            // 10000/1000 = 10 times it runs to generate troll
          if (timesRun === 10) {
            clearInterval(stop1);
          }            // generates random trolls at different times
        }, 1000);
        var timesRun2 = 0;
        var stop2 = setInterval(function() {
          newGame.randomTrollGenerator();
          timesRun2 += 1;                         // 10000/750 = 13.333 times it runs second troll generator
          if (timesRun2 === 13) {
            clearInterval(stop2);
          }
        }, 750);
        setInterval(function(){
          newGame.removeTroll();
        }, 1800);
        document.getElementsByClassName('grid-item').style.display = 'none';
        document.getElementById('gameover').style.display = 'block';
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

