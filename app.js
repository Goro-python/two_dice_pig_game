/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundscore,activeplayer,dice,play_on,dice_sum;
play_on=true;
scores=[0,0];
roundscore=0;
activeplayer=0;
dice_sum=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#dice-0').style.display='none';
document.querySelector('#dice-1').style.display='none';



function btn_roll_dice()
{
    // a dice has to be thrown 
    if (play_on)
        {
            // two dice rolling 
    var dice_1=Math.floor(6*Math.random()+1);
    var dice_2=Math.floor(6*Math.random()+1);
    var dice_sum=dice_1+dice_2;
    
    // display the result
    
    // document.querySelector('#current-'+activeplayer).textContent = roundscore;
    document.querySelector('#dice-0').style.display='block';
    var diceobj1=document.querySelector('#dice-0');
    diceobj1.src='dice-'+dice_1+'.png';        
    document.querySelector('#dice-1').style.display='block';
    var diceobj2=document.querySelector('#dice-1');
    diceobj2.src='dice-'+dice_2+'.png';
            
    // display the result
    
            
            
            
        
   
    
    // round score to be added until 1 is faced , then round score will be zero
    
    if (dice_1 === 1 || dice_2 === 1 )  // no type coercion
        
        {
            console.log('got both 1');
            roundscore=0;
            scores[activeplayer]=scores[activeplayer]+roundscore;
            document.querySelector('#current-'+activeplayer).textContent=roundscore;
            if (activeplayer === 1) 
                activeplayer=0;
            else 
                activeplayer =1;
            document.querySelector('#current-'+activeplayer).textContent=roundscore;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            //document.querySelector('#dice-0').style.display='none';
            //document.querySelector('#dice-1').style.display='none';
        }
    else
        {
        roundscore = roundscore + dice_sum;
        document.querySelector('#current-'+ activeplayer).textContent=roundscore;
        
        }
        }
}

function btn_hold()
{
    if (play_on)
        {
    //update the score
    scores[activeplayer]=scores[activeplayer]+roundscore;
    // UI update
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    document.querySelector('#current-'+activeplayer).textContent=0;
    // check for the winner 
    if (scores[activeplayer]>=30)
    {
        document.querySelector('#name-'+activeplayer).textContent = 'WINNER';
        play_on=false;
        
    }
    else
    {
    roundscore=0;
            if (activeplayer === 1) 
                activeplayer=0;
            else 
                activeplayer =1;
    document.querySelector('#current-'+activeplayer).textContent=roundscore;
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#dice-0').style.display='none';
        document.querySelector('#dice-1').style.display='none';
    }   
    }
}

function btn_new()
{
    
    //set up a new screen
    play_on=true;
    activeplayer=0;
    scores=[0,0];
    roundscore=0;
    dice_sum=0;
    document.querySelector('#dice-0').style.display='none';
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#score-0').textContent=0; 
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    
}

document.querySelector('.btn-roll').addEventListener('click',btn_roll_dice);
document.querySelector('.btn-hold').addEventListener('click',btn_hold);
document.querySelector('.btn-new').addEventListener('click',btn_new);


