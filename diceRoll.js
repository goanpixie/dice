var dice_images =[
"https://www.wpclipart.com/recreation/games/dice/die_face_1.jpg",
"https://www.wpclipart.com/recreation/games/dice/die_face_2.jpg",
"https://www.wpclipart.com/recreation/games/dice/die_face_3.jpg",
"https://www.wpclipart.com/recreation/games/dice/die_face_4.jpg",
"https://www.wpclipart.com/recreation/games/dice/die_face_5.jpg",
"https://www.wpclipart.com/recreation/games/dice/die_face_6.jpg"
];

/*
* Math.floor(Math.random()*5)=formula for random number btw 0-5
access array of images using the formula above
*/
function roll_dice(){
  var dice1=Math.floor(Math.random()*5);
  var dice2=Math.floor(Math.random()*5);


  return {
    first_roll : dice1,
    second_roll : dice2,
    total: dice1+dice2,
  };
}


function initDice() {
  console.log('I am initializing');
  var dice_1 = document.getElementById('dice_1');
  var dice_2 = document.getElementById('dice_2');
  var roll = roll_dice();
  dice_1.src = dice_images[roll.first_roll];
  dice_1.className += ' animated tada';
  dice_2.src = dice_images[roll.second_roll];
  dice_2.className += ' animated tada';
  document.getElementById('sum').innerHTML = roll.total+2;
};



 

        
    




