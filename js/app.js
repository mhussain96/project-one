document.addEventListener("DOMContentLoaded", function() {

  class WhackATroll {
    constructor() {
      // this.trollImgSrc = "images\troll.jpg";
      this.trollImg = new Image();
      this.playerChoices = [];
      this.randomTrollChoices = [];
      this.score = document.getElementById('finalscore');
      this.startGame = document.getElementsByTagName('button');
      this.boxes = document.getElementsByClassName('grid-item');
      this.trolls = document.getElementsByClassName('troll');
      
    }
    // random troll generator
    randomTrollGenerator() {
      for (let i = 0; i < this.boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * this.boxes.length);
        this.trolls[randomNumber].setAttribute('src', 'images\troll.jpg') ;
        // let randomTroll = document.getElementsByClassName('troll');
        this.randomTrollChoices.push(this.boxes[randomNumber]);
        console.log(randomNumber);
      }
    }

    flashColor() {
      for (let i = 0; i < this.randomTrollChoices.length; i++) {
        const box = this.randomTrollChoices[i];
        console.log(box);
        setTimeout(function() {
          box.style.backgroundColor = 'red';   // 2 timeouts to flash trolls
          box.style.clear = 'red';
        }, 1000 * i);
        setTimeout(function() {
          box.style.backgroundColor = 'rgb(255, 255, 255)';
          box.style.clear = 'white'
        }, 1000 * i + 500);
      }
    }
    // adding eventlistener to boxes
    addListenersToBoxes() {
      for (let i = 0; i < this.boxes.length; i++) {
        this.trolls[i].addEventListener('click', e => {
          // console.log(e.target.className);
          this.playerChoices.push(e.target.className); 
          if (this.trolls[i].hasAttribute('src')) {
            console.log('hit');
            
          }
        });
      }
    }
  }
  const newGame = new WhackATroll();
  newGame.addListenersToBoxes();
  newGame.randomTrollGenerator();
  newGame.flashColor();


}); // DOMContentLoaded

// PSEUDOCODE

// Click start
// trolls will pop up in a sequence one by one 
// timer of 30secs to hit as many trolls as possible
// if the player hits the troll, player gains a point. 
// if player misses troll loses 3 points.
// setTimeout for every time troll appears. 
// reset game button 

