

window.onload =  function() {

$("#more").hide();
$("#stop").hide();
$("#double").hide(); 



/*
$( function() {
   
    $( "#chip" ).draggable({
      helper: "clone",connectToSortable: "#totalChips" 
    });


    $( "#totalChips" ).sortable({
      revert: false
    });
    

  } ); */

  $("#chip").click(function(){

  //var thisChip = $(this).attr('src');
 $("#totalChips").append( "<img src='images/chip.png' width='20' height='20' class='ui-draggable ui-draggable-handle' style='width: 20px; height: 20px;'>" );

});

$("#totalChips").click(function(){

  //var thisChip = $(this).attr('src');
  //$(thisChip).remove();
  //$("#totalChips img").first().remove();

});




$('body').on('click','#totalChips',function(){

var image = $('.ui-draggable').attr('src'); 

if ( image == "images/chip.png" ){

$("#totalChips img").first().remove();
//$( "div" ).first().remove();



}

})

/*
$('#removeChips').droppable({ drop: Drop });

function Drop(event, ui) {

  //console.log( event.target.id );
  $(".ui-draggable-handle").remove();
  //$(this).attr('src').remove();

}
*/

var myResult = 0;
var motherResult = 0;

var myBet = 0;
var chips = 100;

var motherFlag = 0;

var hiddenCard;
var hiddenCardValue;

var myScoreSum = 2500;
var motherScoreSum = 10000;

cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;

var index = 0;

var cardArray = new Array();

var cardValueArray = new Array();


$("#newGame").click(function(){

  $("#newGame").hide();
  $("#more").show();
  $("#stop").show(); 
  $("#myChips").hide(); 
  $("#double").show();

  $("#message").hide(); 

  $("#motherHand").replaceWith("<input type='text' name='motherHand' id='motherHand'  disabled>");
  $("#motherCards").replaceWith( "<div id='motherCards'></div>" );
  $("#myHand").replaceWith( "<input type='text' name='myHand' id='myHand'  disabled>" );
  $("#myCards").replaceWith( "<div id='myCards'></div>" );

  myResult = 0;
  motherResult = 0;
  var asses = 0;

$("#totalChips").css("pointer-events","none");

chips = $("#totalChips > img").length

if(chips !== 0){

myBet = 100 * chips;

}else{

myBet = 100;
$("#totalChips").append( "<img src='images/chip.png' width='20' height='20' class='ui-draggable ui-draggable-handle' style='width: 20px; height: 20px;'>" );

}
$("#myChips").hide();

if(myScoreSum < myBet){

alert("You dont have enough funds...Bet a smaller value or refresh to play again!");
 $("#newGame").show();
  $("#more").hide();
  $("#stop").hide(); 
  $("#myChips").show(); 
  $("#double").hide(); 
  $("#totalChips").empty();

return;

  }else{


  cardForm.myBetValue.value = myBet;

  
  cardArray = ["10_of_clubs.png",
"10_of_diamonds.png",
"10_of_hearts.png",
"10_of_spades.png",
"2_of_clubs.png",
"2_of_diamonds.png",
"2_of_hearts.png",
"2_of_spades.png",
"3_of_clubs.png",
"3_of_diamonds.png",
"3_of_hearts.png",
"3_of_spades.png",
"4_of_clubs.png",
"4_of_diamonds.png",
"4_of_hearts.png",
"4_of_spades.png",
"5_of_clubs.png",
"5_of_diamonds.png",
"5_of_hearts.png",
"5_of_spades.png",
"6_of_clubs.png",
"6_of_diamonds.png",
"6_of_hearts.png",
"6_of_spades.png",
"7_of_clubs.png",
"7_of_diamonds.png",
"7_of_hearts.png",
"7_of_spades.png",
"8_of_clubs.png",
"8_of_diamonds.png",
"8_of_hearts.png",
"8_of_spades.png",
"9_of_clubs.png",
"9_of_diamonds.png",
"9_of_hearts.png",
"9_of_spades.png",
"ace_of_clubs.png",
"ace_of_diamonds.png",
"ace_of_hearts.png",
"ace_of_spades.png",
"jack_of_clubs2.png",
"jack_of_diamonds2.png",
"jack_of_hearts2.png",
"jack_of_spades2.png",
"king_of_clubs2.png",
"king_of_diamonds2.png",
"king_of_hearts2.png",
"king_of_spades2.png",
"queen_of_clubs2.png",
"queen_of_diamonds2.png",
"queen_of_hearts2.png",
"queen_of_spades2.png"];

  cardValueArray = [10,10,10,10,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,1,1,1,1,10,10,10,10,10,10,10,10,10,10,10,10];

  //var card = cardArray[Math.floor(Math.random() * cardArray.length)];
  //cardArray.splice($.inArray(card, cardArray),1);

  index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

  motherResult = motherResult + value;

  if (value==1) {
    motherFlag++;
  }

  if ((motherResult < 11) && (value==1)) {

    motherResult = motherResult + 10;

}
  cardForm.motherHand.value = motherResult;

  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);

  $("#motherCards").append( "<img src='images/cards/"+ card +"' id='motherCard' width='150' height='217' class='motherCard' />" );


  index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

  hiddenCard = card; 
  hiddenCardValue = value;

if (hiddenCardValue==1) {
    motherFlag++;
}

if ((motherResult < 11) && (hiddenCardValue==1)) {

motherResult = motherResult + 10;
}

  //alert(hiddenCard);
  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);

  $("#motherCards").append( "<img src='images/cards/back_side.jpg' id='hiddenCard' width='150' height='217' class='hiddenCard' />" );




  index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

  if (value==1){
    asses = 1;
  }

  myResult = myResult + value;

  cardForm.myHand.value = myResult;
  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);

  $("#myCards").append( "<img src='images/cards/"+ card +"' id='myCard' width='150' height='217' class='myCard inactive' />" );

  index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

if ((value==1) && (asses==1)){
    asses = asses ++;
  }


  myResult = myResult + value;
  
  cardForm.myHand.value = myResult;
  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);

  $("#myCards").append( "<img src='images/cards/"+ card +"' id='myCard' width='150' height='217' class='myCard inactive' />" );

//blackjack
if (asses==2){ 
    
$("#newGame").show();
$("#more").hide();
$("#stop").hide();
$("#myChips").show(); 
$("#double").hide();

setTimeout(function()
    {
        alert("BlackJack !");
    }, 
    1000);

motherScoreSum = motherScoreSum - parseInt(myBet);
myScoreSum = myScoreSum + parseInt(myBet);
cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;


$("#totalChips").attr("style","");
$("#totalChips").empty();

}else if ((myResult==11) && (asses==1)){ 
    
$("#newGame").show();
$("#more").hide();
$("#stop").hide();
$("#myChips").show(); 
$("#double").hide();

setTimeout(function()
    {
        alert("BlackJack !");
    }, 
    1000);

motherScoreSum = motherScoreSum - parseInt(myBet);
myScoreSum = myScoreSum + parseInt(myBet);
cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;


$("#totalChips").attr("style","");
$("#totalChips").empty();

}
//end blackjack



}



});


$("#double").click(function(){

$("#more").hide();



myBet = myBet * 2;

if(myScoreSum < myBet){

alert("You dont have enough funds...");
 $("#newGame").hide();
  $("#more").show();
  $("#stop").show(); 
  $("#myChips").hide(); 
  $("#double").hide(); 
myBet = myBet / 2;
return;

  }else{

$("#more").hide();
$("#double").hide();
cardForm.myBetValue.value = myBet;
index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

var helper = myBet/200;
for (var i = 0; i < helper; i++) {

$("#totalChips").append( "<img src='images/chip.png' width='20' height='20' class='ui-draggable ui-draggable-handle' style='width: 20px; height: 20px;'>" );

}

  myResult = myResult + value;
  cardForm.myHand.value = myResult;
  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);

  $("#myCards").append( "<img src='images/cards/"+ card +"' id='myCard' width='150' height='217' class='myCard inactive' />" );

  if(myResult > 21){

    $(".fire").css("display","block");


     setTimeout(function()
    {
$(".fire").css("display","none"); 
    }, 
    1000);

setTimeout(function()
    {
alert("You Were Burnt...")
}, 
    1000);

$("#newGame").show(); 
$("#myChips").show(); 
$("#stop").hide(); 
$("#totalChips").empty();


motherScoreSum = motherScoreSum + parseInt(myBet);
myScoreSum = myScoreSum - parseInt(myBet);
cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;

}



}
});


$("#more").click(function(){

  index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

  myResult = myResult + value;

  cardForm.myHand.value = myResult;


  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);

  $("#myCards").append( "<img src='images/cards/"+ card +"' id='myCard' width='150' height='217' class='myCard inactive' />" );

  if(myResult > 21){

    $(".fire").css("display","block"); 

     setTimeout(function()
    {
$(".fire").css("display","none"); 
    }, 
    1000);

setTimeout(function()
    {
alert("You Were Burnt...")
}, 
    1000);

$("#newGame").show();
$("#more").hide();
$("#stop").hide(); 
$("#myChips").show();
$("#double").hide();

$("#totalChips").empty();
$("#totalChips").attr("style","");

motherScoreSum = motherScoreSum + parseInt(myBet);
myScoreSum = myScoreSum - parseInt(myBet);
cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;

  }

});



$("#stop").click(function(){

$("#newGame").show();
$("#more").hide();
$("#stop").hide();
$("#myChips").show(); 
$("#double").hide();

$("#hiddenCard").replaceWith( "<img src='images/cards/"+ hiddenCard +"' id='hiddenCard' width='150' height='217' class='hiddenCard' />" );

motherResult = motherResult + hiddenCardValue;

if ((motherResult <= 11) && (value==1)) {

motherResult = motherResult + 10;

}

cardForm.motherHand.value = motherResult;

while(( motherResult < 17) && (motherResult < myResult)){

 


index = Math.floor(Math.random() * cardArray.length);
  var card = cardArray[index];
  var value = cardValueArray[index];

  motherResult = motherResult + value;

  if ((motherResult <= 11) && (value==1)) {
motherResult = motherResult + 10;

}

if (value==1) {
    motherFlag++;
    
if ((motherFlag > 1) && (motherResult > 21)){
    motherResult = motherResult - (motherFlag * 10);
}


  }

  
  cardForm.motherHand.value = motherResult;

  cardArray.splice($.inArray(card, cardArray),1);
  cardValueArray.splice(index,1);


$("#motherCards").append( "<img src='images/cards/"+ card +"' id='motherCard' width='150' height='217' class='motherCard' />" );

if (motherResult >= myResult){

break;

}

}


if ((motherResult < myResult) && (myResult <= 21 ) || ( motherResult > 21 )) {



setTimeout(function()
    {
        alert("You Win!");
    }, 
    1000);

motherScoreSum = motherScoreSum - parseInt(myBet);
myScoreSum = myScoreSum + parseInt(myBet);
cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;

$("#totalChips").attr("style","");
$("#totalChips").empty();


}else if ((motherResult >= myResult) && (motherResult <= 21 ) || (motherResult <= 21 )) {

setTimeout(function()
    {
        alert("You Loose :(");
    }, 
    1000);

motherScoreSum = motherScoreSum + parseInt(myBet);
myScoreSum = myScoreSum - parseInt(myBet);
cardForm.displayMotherScore.value = motherScoreSum;
cardForm.displayMyScore.value = myScoreSum;

$("#totalChips").attr("style","");
$("#totalChips").empty();

}

});



$('body').on('click','.inactive',function(){

var image = $(this).attr('src'); 

if((image == "images/cards/ace_of_clubs.png") || (image == "images/cards/ace_of_diamonds.png") || (image == "images/cards/ace_of_hearts.png") || (image == "images/cards/ace_of_spades.png")){

$(this).addClass("active");
$(this).removeClass("inactive");

//debugger;
myResult = myResult + 10;
cardForm.myHand.value = myResult;


}

})

$('body').on('click','.active',function(){

var image = $(this).attr('src'); 

if((image == "images/cards/ace_of_clubs.png") || (image == "images/cards/ace_of_diamonds.png") || (image == "images/cards/ace_of_hearts.png") || (image == "images/cards/ace_of_spades.png")){

$(this).removeClass("active");
$(this).addClass("inactive");

//debugger;
myResult = myResult - 10;
cardForm.myHand.value = myResult;


}

})










//end
}

