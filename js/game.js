// Loader
$(window).on('load', function(){
  setTimeout(function(){
    $('.loader').fadeOut();
  }, 1500)
})


var tblnbr = 0;
var pics0 = [];
for (var i = 1; i <= 25; i++) {
  pics0.push("1 ("+i+").png"
    )
}
var pics1 = [];
for (var i = 26; i <= 50; i++) {
  pics1.push("1 ("+i+").png"
    )
}
var pics2 = [];
for (var i = 51; i <= 75; i++) {
  pics2.push("1 ("+i+").png"
    )
}
var pics3 = [];
for (var i = 76; i <= 100; i++) {
  pics3.push("1 ("+i+").png"
    )
}
var pics4 = [];
for (var i = 100; i <= 124; i++) {
  pics4.push("1 ("+i+").png"
    )
}


const allPicsArrays = [pics0, pics1, pics2, pics3, pics4];

// Function to pick a random array from the allPicsArrays array
function getRandomArray(arrays) {
  const randomIndex = Math.floor(Math.random() * arrays.length);
  tblnbr=randomIndex
  return arrays[randomIndex];
}

// Getting a random array and copying its content to a new array named 'pics'
var pics = getRandomArray(allPicsArrays).slice();

console.log(pics);

// Characters
// var pics = ["bellatrix.jpg", "dobby.jpg", "draco.jpg", "dudley.jpg", "dumbledore.jpg", "fred.png", "ginny.jpg", "hagrid.png", "harry.jpg", "hermione.jpg", "luna.jpeg", "lupin.jpg", "madeye.png", "mcgonagall.jpg", "molly.jpg", "arthur.jpg", "myrtle.jpg", "neville.jpg", "petunia.jpg", "ron.jpg", "snape.jpg", "vernon.jpg", "voldemort.jpg", "sirius.jpg", "fatlady.png"];

//My Guess Who Character
function myCharacter(){
  
 
  var myPic = Math.floor(Math.random() * pics.length);

  $("#me").html('<img src="img/' + pics[myPic] + ' ">');

  var name = pics[myPic].substr(0, pics[myPic].lastIndexOf("."))
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $("#name").html('You are \n \n Sync your Table with your opponent \n your number is : ' + tblnbr);
}

myCharacter();


//Game Board
function shuffle() {



  pics.sort(function(a, b){return 0.5 - Math.random()});
  for (var i = 0; i < pics.length; i++) {
    $("#gameboard").append('<div class="card"><img src="img/' + pics[i] + ' "></div>');
  }
}

shuffle();

$("#gameboard").on('click', '.card', function(){
  $(this).toggleClass("flipped");
});

// Game Tracker
var win = 0;
var loss = 0;

$('#score').html(win + ' - ' + loss);

function updateScore(win, loss) {
  $('#score').html(win + ' - ' + loss);
}


$('#win').click(function(){
  win+=1;
  updateScore(win, loss);
  reset();
})

$('#loss').click(function(){
  loss+=1;
  updateScore(win, loss);
  reset();
})

// Reset Game Board

function reset(){
  var play = confirm('Do you want to play again?');
  if (play == true){
    pics = getRandomArray(allPicsArrays).slice();
    $('#gameboard').html('');
    myCharacter();
    shuffle();
  } else {
    alert('Thanks for playing!');
  }
}
