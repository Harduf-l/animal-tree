var arrayWeight = []; 

var myform = document.getElementById("my_form"); 
body = document.getElementById("body"); 

var headerTree = document.createElement("h1"); 
headerTree.id = "headingtreeText";
headerTree.innerText = "My animal tree";
headerTree.className = "col-sm-10 col-md-8 col-lg-5 mt-3";

document.getElementById("header").appendChild(headerTree); 

var modalText = document.getElementById("MyModalContent"); 
var weightButton = document.getElementById("newAnimalWeightBtn"); 
var closeButtonForm = document.getElementById("closeButtonForm"); 
var inputs = document.getElementsByTagName('input');


var closeButton2Form = document.getElementById("closeButton2Form"); 

closeButtonForm.addEventListener('click', cleanForm);
closeButtonForm.addEventListener('click', cleanForm);

function cleanForm() {
  
  var inputArray = Object.assign([], inputs);

  inputArray.forEach(function (curInput) {
      curInput.value = ""; 
    });

}


document.getElementById("mammalsRadio").onclick = function() {
  document.getElementById("mammalsQuestion").style.display = "inline"; 
  document.getElementById("birdsQuestion").style.display = "none"; 
  document.getElementById("reptilesQuestion").style.display = "none"; 
}

document.getElementById("birdsRadio").onclick = function() {
  document.getElementById("birdsQuestion").style.display = "inline"; 
  document.getElementById("reptilesQuestion").style.display = "none"; 
  document.getElementById("mammalsQuestion").style.display = "none"; 
 
}

document.getElementById("reptilesRadio").onclick = function() {
  document.getElementById("reptilesQuestion").style.display = "inline"; 
  document.getElementById("mammalsQuestion").style.display = "none"; 
  document.getElementById("birdsQuestion").style.display = "none"; 
}






myform.onsubmit = function (event){

  var newAnimalUser = [];

  event.preventDefault();


  console.log("submitted");
  // var inputs = document.getElementsByTagName('input');

  let newAnimal = {}
  let myKey;
  let myVal; 

  for (let i=0; i<inputs.length; i++) {
    myKey = inputs[i].id
    myVal = inputs[i].value
    inputs[i].value = ""
    
    if (inputs[i].checked) {
      newAnimal[myKey] = true
      inputs[i].checked = false
    } else if (myVal && myVal!=="on" ){
      newAnimal[myKey] = myVal
    } 
  }



  if (newAnimal.reptilesRadio) {
    
    var userAnimal = new Reptile(0, newAnimal.myname, newAnimal.weight, newAnimal.color, newAnimal.legs, newAnimal.picture, newAnimal.reptilesQuestion) 
    newUserAnimal("div3")
  
  }

  if (newAnimal.birdsRadio) {
    var userAnimal = new Bird(0, newAnimal.myname, newAnimal.weight, newAnimal.color, newAnimal.legs, newAnimal.picture, newAnimal.birdsQuestion) 
    newUserAnimal("div2")
  
  }

  if (newAnimal.mammalsRadio) {
    console.log(newAnimal)
    var userAnimal = new Mammale(0, newAnimal.myname, newAnimal.weight, newAnimal.color, newAnimal.legs, newAnimal.picture, newAnimal.mammalsQuestion) 
    newUserAnimal("div1")
  }

  allAnimalsOnPage.push(userAnimal); 

  function newUserAnimal(div) {
    placeToappend = document.getElementById(div); 
    var animalImage = document.createElement("IMG");
    animalImage.setAttribute("src", userAnimal.picture); 
    animalImage.setAttribute("id", userAnimal.name); 
    placeToappend.appendChild(animalImage);
    var pEl=document.createElement("p");
    pEl.innerText= userAnimal.toString();
    pEl.className="animal-text";
    placeToappend.appendChild(pEl);
    var whatIeat = document.createElement("p");
    whatIeat.setAttribute("class", "foodsanimalsEat")
    whatIeat.innerText = "discover what i eat"
    placeToappend.appendChild(whatIeat)
  
  }
}





var mammalsHeader = document.createElement("h1"); 
mammalsHeader.innerText = "mammals"
mammalsHeader.setAttribute("class","headingstyle")
document.getElementById("div1").appendChild(mammalsHeader); 

var reptilesHeader = document.createElement("h1"); 
reptilesHeader.innerText = "birds"
reptilesHeader.setAttribute("class","headingstyle")
document.getElementById("div2").appendChild(reptilesHeader); 

var birdsHeader = document.createElement("h1"); 
birdsHeader.innerText = "reptiles"
birdsHeader.setAttribute("class","headingstyle")
document.getElementById("div3").appendChild(birdsHeader); 



function Animal(foodId = "", name, weight, color, legs, picture, audio) {
    this.foodId = foodId; 
    this.name = name; 
    this.weight = weight;
    this.color = color;
    this.legs = legs;
    this.picture = picture; 
    this.audio = audio; 
  }
  
  Animal.prototype.toString = function () {
    return "name: " + this.name  + "\n" + " weight: "+ this.weight + "kg" + "\n" + " color: " + this.color + "\n" + "number of legs: " + this.legs ; 
  }; 
  
  function Mammale(foodId, name, weight, color, legs, picture, furtype , audio) {
    Animal.call(this, foodId, name, weight, color, legs, picture, audio);
    this.furtype = furtype;
  }

  function Bird(foodId, name, weight, color, legs, picture, flySpeed, audio) {
    Animal.call(this,foodId, name, weight, color, legs, picture, audio);
    this.flySpeed = flySpeed;
  }

  function Reptile(foodId, name, weight, color, legs, picture, amIdangerous, audio) {
    Animal.call(this,foodId, name, weight, color, legs, picture, audio);
    this.dangerous = amIdangerous; 
  }


  Mammale.prototype = Object.create(Animal.prototype);
  Mammale.prototype.constructor = Mammale; 

  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Bird; 

  Reptile.prototype = Object.create(Animal.prototype);
  Reptile.prototype.constructor = Reptile; 



  var differentMammalsArray = [new Mammale("lionfood", "lion", 160, "orange", 4, "images/lion2.jpg", "golden", "./sounds/lion.mp3"),
  new Mammale("pandafood", "panda", 70, "black&white", 4, "images/panda2.jpg", "soft", "./sounds/bear.mp3") ]                 

  var differentBirdsArray = [new Bird ("owlfood", "owl", 1.5, "brown-grey", 2, "images/owl2.jpg", "20 kph", "./sounds/owlsound.mp3"),
  new Bird ("eaglefood", "eagle", 8, "grey", 2, "images/nesher2.jpg", "50 kph", "./sounds/nesher.mp3") ]

  var differentReptilesArray = [new Reptile("snakefood", "snake", 4, "brown", 0, "images/snake.jpg", "yes", "./sounds/snakesound.mp3"),
  new Reptile("lizardfood", "lizard", 0.5, "green", 4, "images/lizard2.jpg", "no", "./sounds/lizardsound.mp3",) ]

  var allAnimalsOnPage = differentMammalsArray.concat(differentBirdsArray).concat(differentReptilesArray);

  var moreMammalsArray = [
  new Mammale("tigerfood", "tiger", 150, "black and oragne", 4, "images/tiger.jpg", "rough", "./sounds/tiger.mp3"), 
  new Mammale("humanfood", "human", 70, "skin color", 2, "images/person.jpg", "none", "./sounds/human.mp3"), 
  new Mammale("wolfood", "wolf", 150, "white and grey", 4, "images/wolg.jpg", "cold", "./sounds/wolf.mp3"), 
  new Mammale("dogfood", "dog", 30, "light golden", 4, "./images/dog.jpg", "sweet", "./sounds/dog.mp3") ]; 

  var moreBirdsArray = [
    new Bird ("colorfulfood", "colorful bird", 0.2, "yellow", 2, "images/bird.jpg", "10 kph", "./sounds/bird.mp3"),
    new Bird ("orangefood", "orange bird", 0.3, "grey", 2, "images/bird2.jpg", "8 kph", "./sounds/bird.mp3"),
    new Bird ("strongfood", "strong eagle", 8, "black and white", 2, "images/bird3.jpg", "110 kph", "./sounds/nesher.mp3"),
    new Bird ("nicefood", "nice bird", 4, "grey", 2, "images/bird4.jpg", "50 kph", "./sounds/bird.mp3")
  ]

  var moreReptilesArray = [
    new Reptile("spacielfood", "special snake", 0.9, "green", 0, "images/snake2.jpg", "yes", "./sounds/snakesound.mp3"),
    new Reptile("awsomefood", "awsome snake", 1.5, "exotic", 0, "images/snake3.jpg", "yes", "./sounds/snakesound.mp3"),
    new Reptile("weirdfood", "weird lizard", 2.3, "green spots", 4, "images/lizard.jpg", "no", "./sounds/lizardsound.mp3"),
    new Reptile("exoticfood", "exotic lizard", 1.5, "grey and green", 4, "images/lizard3.jpg", "no", "./sounds/lizardsound.mp3"),

  ]

  Mammale.prototype.toString = function () {
    return "name: " + this.name  + "\n" + " weight: "+ this.weight + "kg" + "\n" + " color: " + this.color + "\n" + "number of legs: " + this.legs +  "\n" + "fur type: " + this.furtype;
  }; 

  Reptile.prototype.toString = function () {
    return "name: " + this.name  + "\n" + "weight: "+ this.weight + "kg" +"\n" +  "color: " + this.color + "\n" + "number of legs: " + this.legs + "\n" + "am I dangerous? " + this.dangerous;
  }; 
    
  Bird.prototype.toString = function () {
    return "name: " + this.name  + "\n" + "weight: "+  this.weight + "kg" + "\n" +  "color: " + this.color + "\n" + "number of legs: " + this.legs + "\n" + "flying speed: " + this.flySpeed;
  }; 
  

  addAnimal(differentMammalsArray, "div1")
  addAnimal(differentBirdsArray, "div2")
  addAnimal(differentReptilesArray, "div3")


  function addAnimal(typeOfAnimal, placeToaddID) {

      var placeToappend = document.getElementById(placeToaddID); 
       
      for (var i=0; i< typeOfAnimal.length; i++) {
      var miniDiv  = document.createElement("DIV");
      var animalImage = document.createElement("IMG");
      animalImage.src = typeOfAnimal[i].picture; 
      animalImage.id = typeOfAnimal[i].name; 
      animalImage.className = "col-lg-6 col-md-12 animalpictures";
      miniDiv.appendChild(animalImage);
      var pEl=document.createElement("p");
      pEl.innerText= typeOfAnimal[i].toString();
      pEl.className="animal-text";
      miniDiv.appendChild(pEl);
      var whatIeat = document.createElement("p");
      whatIeat.setAttribute("id", typeOfAnimal[i].foodId);
      whatIeat.setAttribute("class", "foodsanimalsEat mb-sm-4");
      whatIeat.innerText = "discover what i eat";
      pEl.appendChild(whatIeat); 
     placeToappend.appendChild(miniDiv); 
     
     addSoundtoDom(animalImage.id, typeOfAnimal[i]); 
     
  }

}

weightButton.addEventListener("click", sidurFunction);



function sidurFunction() {

  
  allAnimalsOnPage.sort(function (animal1,animal2) {
  return animal2.weight - animal1.weight; 
  } ); 



  modalText.innerText = ""

  var curLi; 

  var ul = document.createElement("ul"); 

  modalText.appendChild(ul); 

  for (var curAnimal of allAnimalsOnPage) {
      curLi = document.createElement("li"); 
      curLi.innerText = curAnimal.name + ": " + curAnimal.weight + "kg"; 
      ul.appendChild(curLi); 
  }


}

/////// animal sounds /////////


function addSoundtoDom(id, animalObject) {
  document.getElementById(id).addEventListener("click", play.bind(animalObject) ); 
}

function play() {
  var audio = new Audio(this.audio);
  audio.play(); 
}


///////////////////animal sounds end //////


document.getElementById("addRandomAnimal").addEventListener("click", addRandomAnimal);

function addRandomAnimal() {

var random = Math.floor(Math.random() * 3) + 1; 

if (random ==1) {
   addmoreAnimal(moreMammalsArray, "div1") 
}

if (random ==2) {
  addmoreAnimal(moreBirdsArray, "div2") 
}

if (random ==3) {
  addmoreAnimal(moreReptilesArray, "div3") 
}

}

function addmoreAnimal(animalArrayExtra, placeToPlace) {
  

  var placeToappend = document.getElementById(placeToPlace)

  var random = Math.floor(Math.random() * animalArrayExtra.length); 


  allAnimalsOnPage.push(animalArrayExtra[random]); 

  var animalImage = document.createElement("IMG");
  animalImage.setAttribute("src", animalArrayExtra[random].picture); 
  animalImage.setAttribute("id", animalArrayExtra[random].name); 
  animalImage.className = "animalpictures" 
  placeToappend.appendChild(animalImage);
  var pEl=document.createElement("p");
  pEl.innerText= animalArrayExtra[random].toString();
  pEl.className="animal-text";
  placeToappend.appendChild(pEl);
  var whatIeat = document.createElement("p");
  whatIeat.setAttribute("id", animalArrayExtra[random].foodId)
  whatIeat.setAttribute("class", "foodsanimalsEat")
  whatIeat.innerText = "discover what i eat"
  pEl.appendChild(whatIeat)

  // console.log(animalArrayExtra[random].audio)
  addSoundtoDom(animalImage.id, animalArrayExtra[random]); 

  animalArrayExtra.splice(random, 1); 

}





document.getElementById("lionfood").addEventListener("click", function() {
  whoIeat("snake", "lizard");
});

document.getElementById("owlfood").addEventListener("click", function() {
  whoIeat("snake", "panda");
});

document.getElementById("eaglefood").addEventListener("click", function() {
  whoIeat("wolf", "lion");
});

document.getElementById("snakefood").addEventListener("click", function() {
  whoIeat("lion", "lizard");
});

document.getElementById("lizardfood").addEventListener("click", function() {
  whoIeat("owl", "eagle");
});

////

document.getElementById("pandafood").addEventListener("click", foodpanda);


var exist = true; 

function foodpanda() {
  if (exist) {
    
    pandafood.innerText = "i am vegan"; 
    pandafood.style.backgroundColor = "green"
  } else {
    pandafood.innerText = "discover what i eat"; 
    pandafood.style.backgroundColor = "#6f0000"
  }
  
  exist = !exist; 

}


/////


var does = true;

function whoIeat(animal1, animal2 = "") {

  if (does) {
    document.getElementById(animal1).style.cssText = "border: 8px red solid;"
    document.getElementById(animal2).style.cssText = "border: 8px red solid;"
  }
  else {
    document.getElementById(animal1).style.cssText = "border: 0px black solid;"
    document.getElementById(animal2).style.cssText = "border: 0px black solid;"
  }
  does = !does 

}

/////

