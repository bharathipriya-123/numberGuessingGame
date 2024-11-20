let randomNumber=Math.floor(Math.random()*100)+1;
// console.log('hi');
let chancesLeft=5;

 const guessInput=document.getElementById('guess');
 const button=document.getElementById('button');
 const result=document.getElementById('result');
 const chances=document.getElementById('chances');
 const resetButton=document.getElementById('reset');

 button.addEventListener("click",function(){

    const userGuess=guessInput.value;
    console.log(userGuess);

    if(isNaN(userGuess)||userGuess < 1 || userGuess > 100)
    {
        result.textContent="please enter the number between 1 to 100";
    }
  
    chancesLeft--;
    chances.textContent=chancesLeft;
    if(userGuess===randomNumber)
    {
      result.textContent="congratulations you have guess the currect number";
      // chancesLeft=0;
      // chancesLeft--;
      // chances.textContent=chancesLeft;
    }else if(userGuess < randomNumber)
    {
      result.textContent="the number is too low ...try again ";

      // chancesLeft--;
      // chances.textContent=chancesLeft;
    }else if(userGuess > randomNumber)
    {
      result.textContent="the number is too high....try! again";
      // chancesLeft--;
      // chances.textContent=chancesLeft;
    }else{
        result.textContent="try! again";
        // chancesLeft--;
        // chances.textContent=chancesLeft;
    }

   if(chancesLeft === 0)
    {
     result.textContent="game over! the correct answer is"+randomNumber;
    //  setTimeout(resetGame,5000);
    //  guessInput.value='';

    }


});


resetButton.addEventListener('click',function(){

  randomNumber=Math.floor(Math.random() *100 )+1;
  chanceLeft=5;
  chanceLeft.textContent=chancesLeft;
  result.textContent="RESULT";
  guessInput.value='';
});










