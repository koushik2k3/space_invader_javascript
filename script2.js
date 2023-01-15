function moveleft(){
    var left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left-=100;
    if (left>=0){
    character.style.left=left+"px";
    }
}
function moveright(){
    var left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left+=100;
    if (left<500){
    character.style.left=left+"px";
}}
var ct1=0
var score=0
function fire() {
    const div = document.createElement('div');
    div.id = 'bullet'+String(ct1);
    div.className='bullet';
    var left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    a=left+"px";
    div.style.left=a;
    div.style.top=-100+"px";
    parentBody.appendChild(div);
    ct1++;
    const enemy = document.getElementsByClassName("enemy");
    const parent = document.getElementById("game");

    for(var i=0;i<enemy.length;i++){
        
        var x1=window.getComputedStyle(enemy[i]).getPropertyValue('left');

            if (x1<400+'px'&&x1>350+'px' && a==400+'px'){
                parent.removeChild(enemy[i]);
                console.log('5...'+x1);
                score++;
                document.getElementById('score').innerHTML = "Score: " + score;
                
            }
            if (x1<300+'px'&&x1>250+'px' && a==300+'px'){
                parent.removeChild(enemy[i]);
                console.log('4...'+x1);
                score++;
                document.getElementById('score').innerHTML = "Score: " + score;
                
            }
            if (x1<200+'px'&&x1>150+'px' && a==200+'px'){
                parent.removeChild(enemy[i]);
                console.log('3...'+x1);
                score++;
                document.getElementById('score').innerHTML = "Score: " + score;
                
            }
            if (x1<100&& a==100+'px'){
                parent.removeChild(enemy[i]);
                console.log('2...'+x1);
                score++;
                document.getElementById('score').innerHTML = "Score: " + score;
                
            }



        
        


    }

  }
  
document.addEventListener("keydown", event =>{
    if(event.key==="ArrowLeft"){
        moveleft();
    }
    if(event.key==="ArrowRight")
    {
        moveright();
    }
    if(event.key==="ArrowUp")
    {
        fire();


    }

})

var block=document.getElementById("block");
var counter=-1;
block.addEventListener('animationiteration',()=>{
    var random= Math.floor(Math.random()*5);
    left=random*100;
    block.style.left=left+"px";
    counter++;
})

const parentBody = document.getElementById("game");
var ct=0;
function addDiv(){
  const div = document.createElement('div');
  div.id = 'enemy'+String(ct);;
  div.className='enemy'
  //div.style.top = `${Math.random() * 5}px`;
  var randomtop= Math.floor(Math.random()*3);
  var top=randomtop*100;
  div.style.top=top+"px";
  var randomleft= Math.floor(Math.random()*4);
  var left=randomleft*100;
  div.style.left=left+"px";

  parentBody.appendChild(div);
  ct++;

}



setInterval(addDiv, 1000);

/*setInterval(() => {
    const enemy = document.getElementsByClassName("enemy");
    for(var i=0;i<enemy.length;i++){

    var x1=window.getComputedStyle(enemy[i]).getPropertyValue('left');
    console.log(x1);
    }   
}, 0.1);
*/

setInterval(() => {
    const bullet = document.getElementsByClassName("bullet");
    const parent = document.getElementById("game");


    for(var j=0;j<bullet.length;j++){
        parent.removeChild(bullet[j]);
    ct1=0;


}
    
}, 1000);
setInterval(function(){
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterleft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blocktop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));


    if (blockleft==characterleft && blocktop<300 && blocktop>=200)
    {
 
        alert('u ded score: '+score);
        score=0;
        document.getElementById('score').innerHTML = "Score: " + 0;
        const enemy = document.getElementsByClassName("enemy");
        const parent = document.getElementById("game");
    
    
        for(var j=0;j<enemy.length;j++){
            parent.removeChild(enemy[j]);
    
        }
        ct=0;
    
    }

},100)