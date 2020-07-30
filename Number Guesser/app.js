let min = 1,
    max = 10,
    winningNum = getWinningNum(min , max),
    guessessLeft = 3;


    const gameWrapper = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInpt = document.querySelector('.guesss-input'),
          message = document.querySelector('.message');

          console.log(guessInpt);
          
          minNum.textContent = min;
          maxNum.textContent = max;


            gameWrapper.addEventListener('mousedown', function(e){
                if(e.target.className === 'play-again')
                {
                    window.location.reload();
                }
            });          

          guessBtn.addEventListener('click', function(){
            let guess = parseInt(guessInpt.value);
            //console.log(guessInpt);

            if(isNaN(guess) || guess < min || guess > max)
            {
                setMessage(`Please enter a valid number between ${min} and ${max}`, 'red');
              }

              if(guess === winningNum){

                gameOver(true, `${winningNum} is correct!, you win!`);
              }
              else{

                guessessLeft -=1;
                if(guessessLeft === 0){
                    
                    gameOver(false, `Game Over, you lost. The winning number was ${winningNum}`);
                }
                else{
                    guessInpt.style.borderColor = 'orange';
                    guessInpt.value = "";

                    setMessage(`${guess} is not correct. ${guessessLeft} remaining guesses left!`, 'orange');
                }

              }
          });


          function gameOver(won, msg)
          {
            let color;
            won === true ? color = 'green' : color = 'red';
            guessInpt.disabled = true;
            guessInpt.style.borderColor = color;
            setMessage(msg, color);

            guessBtn.value = 'Play Again?';
            guessBtn.className += 'play-again';
          }

          function setMessage(msg, color)
          {
              message.style.color = color;
              message.textContent = msg;
          }

          function getWinningNum(min,max)
          {
              //basically a random number generator in range min and max

              return Math.floor(Math.random()*((max-min+1)+min));
          }