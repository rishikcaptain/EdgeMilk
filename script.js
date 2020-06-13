$(document).ready(function () {


alert("are you sure?");
$('#go-button').on('click',function () {


$('#text').html("This is jquery");
$('.my-input').val("This is also jquery");
$('.my-textarea').val("This is also jquery");
});






});


function message(msg) {
 
console.log(msg+"event");
}





/*var btn=document.getElementById("go-button");
btn.addEventListener("click", butttonClicked);
function butttonClicked(){

  console.log("Button-Clicked");
  btn.removeEventListener("click", butttonClicked);


var array=["pool","snooker","golf","tennis"];

console.log(array.pop());

array.push("volleyball");

console.log(array);

console.log(array.shift());

array.unshift("soccer");

console.log(array);

array.forEach(function(item, i) {

  console.log("I like", item, i);
});

if (array.indexOf('golf') >1) {
  console.log("it is item of array");
}
if (array.indexOf('tennis' !==2)){

  console.log("index value is not same");
  }

var customText =  document.getElementsByClassName('my-input');
var textarea = document.getElementsByClassName('my-textarea');

var result = document.getElementById('text');

result.innerHTML = "Hello, " + customText[0].value + "<br>";
result.innerHTML += "Message: " + textarea[0].value + "<br>";

console.log(result);
}*/

/*
var numbers = [8,7,3,5,19,20,12,13,1,6,18,2,9,16,10,14,11,17,15,0];

function missingNumber(numbers) {


 var missing =-1;
for (var i = 0; i < numbers.length; i++) {
  if(numbers.indexOf(i) == -1){
  missing=i;
      }
   }

return missing;

}
console.log(missingNumber(numbers));
*/

/*
class animal {
  constructor(name,age,weight) {
    console.log("Animal Created ",name,age,"years",weight,"kg");
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  namelength(){
    return this.name.length;
  }
}

class monkeys extends animal {
  constructor(name,age,weight,speed) {
    super(name,age,weight);
    this.speed = speed;
  }

  fight(){
    if(this.age > 3){
      console.log(this.name + " is an aggresive monkey....");
    }
    else {
      console.log(this. name + " is not an aggresive monkey...");
    }
  }

}

class snakes extends animal {
  constructor(name,age,weight,speed) {
    super(name,age,weight);
    this.speed = speed;
  }

  aware(){
    if (this.speed > 15) {
      console.log(this.name + " is dangerous...");
    }
    else {
      console.log(this.name + " is not quite dangerous...");
    }
  }
}

animal.planet = "earth";

var monkey = new monkeys("Bob the 'monkey'",'4','25','30');
var snake = new snakes("Cobra the 'snake'",'6','120','5');

 monkey.fight();
 snake.aware();

 console.log(monkey.constructor.planet);
console.log(snake.namelength());
console.log(monkey.namelength());*/
