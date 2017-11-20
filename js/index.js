//create src array
var foodArr = [];
var currInd = 0;
for (i=0; i<8; i++){
  picNum = i+1;
  foodArr[i]= "images/food"+picNum+".jpg";
  console.log(foodArr[i]);
}
var src = foodArr[0];

//get click  to buttons

$(".btn").on('click',function(){
  //move array when clicked
  if (this.value == "Back"){
    if(currInd==0){
      currInd = foodArr.length-1;
    } else{
      currInd -=1;
    }
    //Assig sources
    $("#image-to-vote-on").attr("src",foodArr[currInd]);
  } else{
    if(currInd==foodArr.length){
      currInd = 0;
    }else{
      currInd +=1;
    }
    //Assig sources
    $("#image-to-vote-on").attr("src",foodArr[currInd]);
  }

  console.log(currInd);
});



//edge cases. Reset array
