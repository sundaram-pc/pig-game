var activePlayer,roundScore,score,gameOn;
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameOn){
          var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    document.querySelector('.dice').style.display='block';
        
        
    if(((dice2===6)&&(dice1===6)))
        {  
         score[activePlayer]=0;
         document.querySelector('#score-'+activePlayer).textContent=0;
         nextPlayer();
        }
        
    else if(dice1!==1 && dice2!==1){
            roundScore+=dice1 + dice2;
            
            document.getElementById('current-'+activePlayer).textContent=roundScore;
           
    }else nextPlayer();
    }

});
function setDie(){
  document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
}
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameOn){
        
    score[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
        var input=document.querySelector('.winning-score').value;
        if(input){
            winningScore=input;
        }else winningScore=100;
        
    if(score[activePlayer]>=winningScore){
        document.querySelector('#name-'+activePlayer).textContent='WINNER!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        setDie();
        document.querySelector('.player-0-panel').classList.remove('active');
       document.querySelector('.player-1-panel').classList.remove('active');
        gameOn=false;
    }
        else{
            nextPlayer();
        }
    
        
}});
document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    gameOn=true;
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    activePlayer=0;
    roundScore=0;
    score=[0,0];
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-1').textContent='0';
  
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

}
function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
   setDie();
        roundScore=0;
}
