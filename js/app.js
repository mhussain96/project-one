document.addEventListener("DOMContentLoaded", function() {

  class WhackATroll {
    constructor() {
      // this.trollImgSrc = "images\troll.jpg";
      this.trollImg = new Image();
      this.playerChoices = [];
      this.randomTrollChoices = [];
      this.score = 0;
      this.startBtn = document.getElementById('start');
      this.boxes = document.getElementsByClassName('grid-item');
      this.trolls = document.getElementsByClassName('troll');
      this.random;
      this.timerUp = 10;
    }
    // random troll generator
    randomTrollGenerator() {
      let randomNumber = Math.floor(Math.random() * 9);          // random sequence created by math.random with amount of boxes on screen
      this.trolls[randomNumber].classList.add('trollsprite');    // added image of troll and named it trollsprite
      console.log(randomNumber);
    }
    // timer of game 
    setTime() {
      this.startBtn.addEventListener('click', e => {
        setInterval(e => {                                      // set interval so every sec the timer counts down
          if (this.timerUp <= 10) {
            //console.log(this.timerUp);
            this.timerUp--;
            document.getElementById('timer').innerHTML = this.timerUp;
          }
          if (this.timerUp === -1) {
            alert('Time is up!');
          }
        }, 1000);
      });
    }

    //remove trolls
    removeTroll() {
      for (let i = 0; i < this.trolls.length; i++) {
        this.trolls[i].classList.remove("trollsprite"); // removes trolls
      }
    }
    // adding eventlistener to boxes
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
  newGame.setTime();  
    newGame.startBtn.addEventListener('click', function(e) {
        newGame.addListenersToBoxes();
        setInterval(function() {
          newGame.randomTrollGenerator();
        }, 1100);
        setInterval(function() {
          newGame.randomTrollGenerator();
        }, 800);
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

