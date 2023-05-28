let name ='Tajudeen';
console.log(name);

let firstlName='TAJUDEEN';
let lastName='JIMOH';

console.log(firstlName);
console.log(lastName);

let myName= 'Tajudeen';
let fullName = 'JIMOH' +" "+ myName +" "+ 'Olarewaju';


console.log(fullName);

var myStr= 'awesome';
var ourStr = 'Teejay';
myStr+=ourStr;
console.log(myStr);

var bestNamelenght=0;
var bestName='Sadiq';
bestNamelenght=bestName.length;

console.log(bestNamelenght);

var firstLetterOfFirstName="";
var firstName="Tajudeen";

firstLetterOfFirstName=firstName[0];
console.log(firstLetterOfFirstName);
firstLetterOfFirstName=firstName[firstName.length-1];

console.log(firstLetterOfFirstName);

firstLetterOfFirstName=firstName[firstName.length-4];
console.log(firstLetterOfFirstName);

function worldBlank(myNoun, myAdjective, myVerb, myAdverb){
    var result ="";
    result+= "The" +" " + myAdjective + " " + myNoun +" " + myVerb + " to the store " + myAdverb

    return result;

    console.log(worldBlank("dog", "big", "ran", "quickly"));
}
worldBlank();

var ourArray = ["Tajudeen", 30];
var myData= ourArray[0];
console.log(myData);
//nested array
var myArray= [["the universe", 23], ["everything", 101010]];
var myData = myArray[1];
console.log(myData);
var myData = myData[0];
console.log(myData);

var yourArray=["ibrahim", 30];
var myData =yourArray[1];
console.log(myData);

var ourArray=[45,17,19];
ourArray[1]=45;
console.log(ourArray);

var myArray = [[1,2,4], [3,8,0], [4,6,9], [[4,19,8], 16,14]];
var myData = myArray[3][1];
console.log(myData);

var ourArray=["Tajudeen", "Yusuf", "Ahmed"];
ourArray.push(["Pedro", "Taiwo"]);
console.log(ourArray);

var myArray=[["John", 2,3],["cat", 2,4]];
myArray.push(["Tajudeen",4,3]);
console.log(myArray);

var ourArray = [1,2,3]
var removedFromOurArray = ourArray.pop([1]);
console.log(removedFromOurArray);
console.log(ourArray);

var myArray=[["John", 2,3],["cat", 2,4]];
var removedFromOurArray = myArray.pop();
console.log(myArray);
console.log(removedFromOurArray);

var ourArray= ["John", 2, 5];
var removedFromOurArray= ourArray.shift();
console.log(ourArray);
console.log(removedFromOurArray);

var ourArray =[["cat", 3,5], ["Ibrahim", 3,6,7]];
ourArray.shift();
console.log(ourArray);
ourArray.unshift("Tajudeen",3,6);
console.log(ourArray);

//SHOPPING LIST

var myList =[["Bread",3], ["milk", 5], ["bananas",4],["juice",5], ["eggs",9]];
myList.push("jug",8);
console.log(myList);
myList.pop();
console.log(myList);
myList.shift();
console.log(myList);
myList.unshift("COKE",8);
console.log(myList);

//FUNCTION

function ourReusableFunction(){
    console.log("Heyya, world");
}
ourReusableFunction();

function reusableFunction(){
    console.log("Hi TAJUDEEN");
}
reusableFunction();

function ourFunctionWithArgs(a,b){
    console.log(a*b);
}
ourFunctionWithArgs(10,8);

function ourFunctionWithArgs(a,b){
    console.log(a+b);
}
ourFunctionWithArgs(15,7);

var myGlobal= 10;

function fun1(){
    oopsGlobal=5;
}

function fun2(){
    var outPut="";
    if (typeof myGlobal != "undefined"){
        outPut += " myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined"){
        outPut += "oopsGlobal: "  + oopsGlobal;
    }

    console.log(outPut);
}

fun1();
fun2();

function myLocalScope(){
    var myVar=5;
    console.log(myVar);
}

myLocalScope();

//GLOBAL VS LOCAL SCOPE IN FUNCTION

var outerWear= "T-shirt";

function myOutFit(){
    var outerWear = "short";
    
    return outerWear;
}
console.log(myOutFit());
console.log(outerWear);


// Return a value from a function with return

function minusSevenNum(num){

    return num-7;
}
console.log(minusSevenNum(10));


function timesFive(num){

    return num*5;
}

console.log(timesFive(5));

//understanding undefined value returned from a function

var sum = 0;

function addThree(){
    sum+=3;
}
console.log(addThree());

//the result is gonna be undefined 

function addFive(){
    sum+=5;
}

console.log(addFive());

//Assignment with a returned value 

var changed=0;

function change(num){
    return (num+5)/3;
}
changed= change(10);
console.log(changed);


function processArg(num){
    return (num+5)/4;
}
changed=processArg(15);
console.log(changed);

//stand in line

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//Boolean values
function ourTrueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "yes is true";
    }
    return "No is false";
}
console.log(ourTrueOrFalse(true));

//comaprison with the equality operators

function testEqual(val){
    if (val==12){
        return "YES IS TRUE";
    }
    return "NOP";
}
console.log(testEqual(12));

// comparsion with strict equality sign

function testEquality(val){
    if (val===4){
        return "YES IS EQUAL";
    }
    return "No is not equal";
}
console.log(testEquality('4'));


//practice more example on comparing of value
function equalValue(a, b){
    if (a==b){
        return "THEY ARE EQUAL";
    }
    return "NO THEY ARE NOT EQUAL";
}
console.log(equalValue(10,10));

function textValueFUNCTION(a,b,c){
    if (a===b){
        return "YOU ARE LEGIT";
    }
    return "YOU ARE A SCAMMER";
}
console.log(textValueFUNCTION(3,"3"));

function testEquality(val){
    if (val!=4){
        return "NOT EQUAL";
    }
    return "IS EQUAL";
}
console.log(testEquality(10));

function testGreaterThan(val){
    if (val > 100){
        return "Over 100";
    }
    if ( val > 10){
        return "Over 10";
    }
    return "10 or under";
}

console.log(testGreaterThan(101));

function testGreaterThanOrEqualTo(val){
    if (val >= 100){
        return "100 OR OVER";
    }
    if ( val <= 10){
        return "BELOW OR 10";
    }
    return "ABOVE 10";
}

console.log(testGreaterThanOrEqualTo(11));

function testLogicalAnd(val){
    if (val >= 25 && val <=50){
        return "YES";
    }
    return "NO";
}
console.log(testLogicalAnd(200));

function testLogicalOr(val){
    if (val<10 || val>20){
        return "OUTSIDE";
    }
    return "INSIDE";
}
console.log(testLogicalOr(16));


function ifStatement(val){
    var result ="";
    if (val>5){
        result = "Bigger than 5";
    }else {
        result ="smaller than 5";

    }

    return result;
}
console.log(ifStatement(7));


function marksGrade(CGPA){
    if (CGPA >=4.50){
        return "FIRST CLASS";
    }else
    if (CGPA >=4.49){
        return "SECOND CLASS LOWER";
    }else
    if (CGPA>=3.49){
        return "SECOND CLASS LOWER";
    }else 
    if (CGPA>=2.49){
        return "THIRD CLASS";
    }else{
        return "NOT GRADUATING";
    }
        
}
console.log(marksGrade(1.50));

function testSize(num){
    if (num<5){
        return "TINY";
    }else 
    if (num<10){
        return "BIGGER";
    }else 
    if (num<15){
        return "MEDUIM";
    }else 
    if (num<20){
        return "LARGE";
    }else 
    if (num<25) {
        return "HUGE";
    }else{
        return "CHANGE ME";
    }
}
console.log(testSize(67));


var myArrName =["Hole-in-one!", "Eagle", "Bride", "par","Bogey","Double Bogey", "Go Home"];

function golfScore(par, stroke){
    if (stroke==1){
        return myArrName[0];
    }else 
    if (stroke<=par-2){
        return myArrName[1];
    }else 
    if (stroke==par-1){
        return myArrName[2];
    }else
    if (stroke==par){
        return myArrName[3];
    }else if (stroke==par+1){
        return myArrName[4];
    }else if (stroke>=par+2){
        return myArrName[5];
    }else if (stroke>=par+3){
        return myArrName[6]
    }
}

console.log(golfScore(5,4));

//swicth statement 
 function caseInSwitch(val){
    var answer ="";
    switch(val){
        case 1: 
            answer ="alpha";
            break;

        case 2: 
            answer ="beta";
            break;
        case 3:
            answer ="gamma";
            break;
        case 4:
            answer ="delta";
            break;
    }
    return answer;
 }

 console.log(caseInSwitch(2));

 //default option in switch statement

 function defaultCaseInSwitch(val){
    var answer="";
    switch(val){
        case "a": 
            answer="apple";
            break;
        case "b": 
            answer="banana";
            break;
         case "c": 
            answer="cat";
            break;
        default: 
        answer= "stuff";
        break;
    }
    return answer;
 }

 console.log(defaultCaseInSwitch("b"));

 //Multiple identical options in swicth statement 

 function sequentialSize(val){
    var answer ="";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;

        default:
            answer = "out of courage";
            break;
    }

    return answer;
 }

 console.log(sequentialSize(15));


 function gradeWithSwitch(val){
    var grade="";

    switch(val){
        case "4.50 above":
            grade= "first class";
            break;
        case "4.00  to 4.49":
             grade= "second class";
            break;

    }
    return grade;
 }
 console.log(gradeWithSwitch("4.50 above")); 

  var myAAr=[1,2,4];
  myAAr.shift();
  myAAr.unshift(3);
  console.log(myAAr);


  function isLess(a, b){
    if (a<b){
        return true;
    }else {
        return false;
    }
  }
  console.log(isLess(3,5));
  // CONSOLE IS TRUE

  //RETURN BOOLEAN VALUES FROM FUNCTION

  function isLessTrick(a, b){
    return a<b;
  }
  console.log(isLessTrick(6,5));

  //RETURN EARLY PATTERN FROM FUNCTIONS

  function abTest(a, b){
    if (a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
  }

  console.log(abTest(3,2));


  var count="";

  function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    
    var holdbet="Hold";
    if (count>0){
        holdbet="bet";
    }
    return count + " " + holdbet;
  }
  cc(2); cc("K"); cc(7); cc("K"); cc("A");

  console.log(cc("J"));

  //jAVASCRIPT OBJECTIVES

  var ourDog={
    "name": "champer",
    "leg": 4,
    "tails":1,
    "friends": ["everything!"]
  };

  var myStudent ={
    "studentName": "Yusuf Agbomabini",
    "Matric No": "U16/FNS/MTH/1017",
    "Age": 25,
    "friends":["AHMED", "GBOLAHAN"]
  };

  console.log(myStudent);
//access objext properties with Dot Notation
  var testObject={
    "hat": "ballcap",
    "shirt": "jersey",
    "shoe": "cleats"
  };

  var hatValue = testObject.hat;
  var shirtValue = testObject.shirt;

  console.log(shirtValue);

  //access objext properties with DBracket Notation

  var testObject1 = {
    "an entree": "MackbookPro",
    "my code": "javascript",
    "the drink": "COCOLA"
  };

  var entreeValue = testObject1["an entree"];
  var codeValue = testObject1["my code"];

  console.log(entreeValue);
  console.log(codeValue);

  //access object properties with Variable

  var testObjectNotation = {
    12: "Namath",
    6: "Montana",
    19: "unitas"
  };
  

  var playerNumber = 19;
  var player = testObjectNotation[playerNumber];

  console.log(player);

  var updatingName={
    "name": "Tajudeen",
    "age": "34 years",
    "level": "400 Level"
  };

  updatingName.name= "Oluwashina";
  updatingName.MatricNo ="U16/FNS/MTH/1017";

  //TO DELETE PRORPERTIES FROM AN OBJECT
  // To delete age from the object we use the keyword "delete"
  delete updatingName.age;
  console.log(updatingName);

  //Using the object for lookup

  function phoneticLookUp(val){
    var result= "";

    //creating an object 

    var lookUp = {
        "alpha": "Adam",
        "omega": "Teejay",
        "delta": "Bynalab",
        "beta": "Endurance"
    };
    result = lookUp[val];
    return result;
  }

  console.log(phoneticLookUp("beta"));

//  Testing object for properties

  var myObj={
    gift: "pony",
    pet: "kitten",
    bed:"sleign"
  };

  function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not found";
    }
  }

  console.log(checkObj("gift"));

  var myMusic =[
    {
        "artistName":"Dagrin",
        "title": "Pon Pon Pon",
        "release_year": 2010,
        "format":[
            "Yotube video",
            "Apple music",
            "Spotify"
        ],
        "Award": true
    },
//add another album


    {
        "artistName":"Dagrin",
        "title": "Pina 4",
        "release_year": 2010,
        "format":[
            "Yotube video",
            "Apple music",
            "Spotify"
        ],
        "Award": true
    },
  ]

  console.log(myMusic);


  //accessing nested Objects

  var myStorage={
    "car":{
        "inside":{
            "glove box ":"maps",
            "passenger seat": "crumbs",
        },
        "outside":{
            "trunk": "jacks",
            "counter": "jugs"

        }
    }
  };

  var gloveBoxContents = myStorage.car.inside['glove box '];
  var trunkBoxContents = myStorage.car.outside["counter"];

  console.log(gloveBoxContents);
  console.log(trunkBoxContents);


  var myPlants=[
    {
        type : "flower",
        list :[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
        {
            type : "trees",
            list:[
                "pine",
                "fir",
                "birch"
            ]
        }
    ];

    var flowerList = myPlants[0].list[1];
    var treeList = myPlants[1].list[0];
    console.log(flowerList);
    console.log(treeList);

    //record collection

    var collection ={
        "2548": {
            "album": "Made in Lagos",
            "artist": "Wizkid",
            "tracks":[
                "ginger",
                "longtime",
                "mighty wine",
                "blessed"
            ]
        },

        "2468":{
            "album": "Love Damini",
            "artist": "Burna Boy",
            "tracks":[
                "common person",
                "last last",
                "kilometer",
                "science"
            ]
        },

        "1245":{
            "album": "Tee Cash",
            "artist": " GODIGER",
            "tracks":[]
        },

        "5439":{
            "album": "Billion dollar Baby",
            "artist": "seyi Vibez",
            "tracks":[
                "Billion Dollar",
                "Bullion Van",
                "+234"
            ]

        }
    }
    //keep the copy of original data before any update
    var collectionCopy = JSON.parse(JSON.stringify(collection));
    function updateRecord(id, prop, value){
        if (value === ""){
            delete collection[id][prop];
        }else if (prop==='tracks'){
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);

        }else {
            collection[id][prop]= value;
        }
        return collection;
    }

    console.log(updateRecord(5439, "artist", "ABBA"));
    console.log(updateRecord(1245, "artist", "Tajudeen"));// 
// while loop
    var myArray=[];

    var i=0;
    while(i <= 6){
        myArray.push(i);
        i++;
    }

    console.log(myArray);

    // for loop

    var myARR= [];

    for (i=0; i<=10; i++){
        myARR.push(i);
    }
    console.log(myARR);

    // ITERATION OF EVEN NUMBER

    var myList =[];

    for( i=2; i<=20; i+=2){
        myList.push(i);
    }

    console.log(myList);

    //iteration of odd number

    var myList=[];

    for (i=1; i<=19; i+=2){
        myList.push(i);
    }

    console.log(myList);

    //count backward with for loop

    var myList=[];

    for (i=20; i > 0; i-=1){
        myList.push(i);
    }
    console.log(myList);
// count odd number Backward
    var myList=[];

    for (i=19; i > 0; i-=2){
        myList.push(i);
    }
    console.log(myList);

    // iterate through an array with for loop
    //how to add number in an array using for loop
    var myArray=[9,8,10,11];
    var myVar =0;

    for (i=0; i < myArray.length; i++){
        myVar+= myArray[i];
    }
    console.log(myVar);

    function multiplyAall (val){

        var product =1;
        
        for(var i=0; i <val.length; i++){
            for(var j=0; j<val[i].lenght; j++){
                product *= val[i][j];
            }
        }
        return product;
    }

    const  product=multiplyAall([[2,3,4], [1,2], [1,2,5]]); 
    console.log(product);

    //profile lookup

    const contacts =[
        {
            "firstName": "Yusuf",
            "lastName": "Agbomabini",
            "number": 08030418388,
            "likes": ["pizza", "football", "Gaming"]
        },

        {
            "firstName": "Tajudeen",
            "lastName": "Olarewaju",
            "number": 08144669906,
            "likes": ["pizza", "football"]  
        },

        {
            "firstName": "Abdusalam",
            "lastName": "Olajide",
            "number": 08145363763,
            "likes": ["Javascript", "flutter"]  
        },

        {
            "firstName": "Habib",
            "lastName": "Endurance",
            "number": 081056383638,
            "likes": ["pizza", "football", "movie"]  
        }

    ];

    function lookupProfile(name, prop){
        for (i=0; i < contacts.lenght; i++){
            if (contacts[i].firstName === name) {
                return contacts[i][prop] || "No such Property";
            }
        }
        return "No such contact"; 
    }

    const data = lookupProfile("Tajudeen","   number");
    console.log(data);

    // to generate random function using math.random()

    function randomFunction(){

        return Math.random();
    }

    console.log(randomFunction());

    //generating random whole number using math.floor
    const randomNumberBetween0and10 = Math.floor(Math.random()*20);

    function randomWholeNumber(){

        return Math.floor(Math.random()*80);
    }

    console.log(randomWholeNumber());

    //generate random number within the range

    function ourRandomRange(myMax, myMin){

        return Math.floor(Math.random() * (myMax- myMin + 1)) + myMin;
     }

     var myRandom = ourRandomRange(5,15)
     console.log(myRandom);


     function convertToInteger(str){

        return parseInt(str);
        
     }

     console.log(convertToInteger("Tajudeen"));
     console.log(convertToInteger("78"));

     //use the parseInt function with a radix

     function convertToInteger(str){

        return parseInt(str, 2);
     }
     
     var myNumberBase= convertToInteger("10011");
     console.log(myNumberBase);

     //use the condition the (tenary number)

     function checkEqual(a, b){

        return a===b ? true: false ;

        return a==b;
     }

     console.log(checkEqual(12,12));
     console.log(checkEqual(12,5));

     //use multiple conditional (ternary) ooperator

     function checkTenary(num){

        return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
     }

    console.log(checkTenary(-9));

    // prevent object with mutation

    function freezeObj() {
        "use strict";
        const MATH_CONSTANTS ={
            PI : 3.142
        };
         try {
            MATH_CONSTANTS.PI = 99;
         } catch( ex ) {
            console.log(ex);
         }
    
         return MATH_CONSTANTS.PI;
    }
    
    const PI = freezeObj();

    console.log(PI);

    //write an arrow function with parameter

    const myConcat = (arr1, arr2) => arr1.concat(arr2);

    console.log(myConcat[1,2], [3,4,5]);

    //write higher order arrow function

    const realNumberArray = [4, 5.6, -9.8, 3.14, -2];

    const squareList =  (arr) => {
        const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0 ). map(x => x*x);
        return squaredIntegers;
    };
 
    const squaredIntegers =squareList(realNumberArray);

    console.log(squaredIntegers); 

    //Write higher order arrow functions
    const increment = (function (){
        return function increment(number , value = 1) {
            return number + value ;

        };
    })();

    console.log(increment(5,2));
    console.log(increment(5));

    //use the rest operator with function parameter

    const Sum = (function(){
        return function sum (x, y, z) {
            const args = [x, y, z];
            return args.reduce((a, b) => a + b, 0);
        };
    })();

    console.log(Sum(1,8,4));

    //WE CAN CHANGE THE ABOVE CODE TO USE REST OPERATOR

    const summation = (function(){
        return function sum (...args) {
            return args.reduce((a, b) => a + b, 0);
        };
    })();

    console.log(summation(1,8,4,9,8,7,8));

    //use the spread operator to evaluate array in-place
/* the spread operator look like the rest operator three dots but it deoend on the already
  on existing array or it spread out on array so it take an array to spread out into its individualparts

*/

const arr1  = ["JAN", 'FEB', "MAR", "APR", "MAY"];
let arr2;
(function(){
    arr2 =arr1;
    arr1[0] ="potatos";

})();

console.log(arr2);

//lets use spread operator for this above code

const Arr1  = ["JAN", 'FEB', "MAR", "APR", "MAY"];
let Arr2;
(function(){
    Arr2 =[...Arr1];
    Arr1[0] ="potatos";

})();

console.log(Arr2);

//Use the destructuring Assignment to assign variable from objects.

//old ways of assigning it to another variable
var voxel ={x:3.6, y: 7.4, z: 6.54};
/*
var x = voxel.x; //x =3.6
var y = voxel.y;// y=7.4
var z = voxel.z;// z=6.54
*/
//the new way of assigning it to other variable
//we are creating the variable and assigning it to x,y and z

const { x:a, y:b, z:c} = voxel; //x =3.6,y=7.4,z=6.54
const AVG_TEMPERATURE={
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperature){
    "use strict";

    const { tomorrow : getTempOfTmrw } = avgTemperature;

    return getTempOfTmrw;
}

console.log(getTempOfTmrw(AVG_TEMPERATURE)); //should be 79

//destructing assignment with nested object 

const LOCAL_FORCAST ={
    today : { min: 72, max: 83 },
    tomorrow : { min : 73.3, max : 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";

    const { tomorrow: {max : getMaxOfTmrw }} = forecast;
    return getMaxOfTmrw
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));

//use destructing assignment to assign variable from arrays

const [z,x] = [1, 2, 3, 4, 5, 6, 6];
console.log(z,x);


let j=8, q=6;
(() => {
    "use strict";
    //switching the value of j to q (vice -versa)
    [j,q] =[q,j];
})();

console.log(j);
console.log(q);

//use destructing assignment with rest operator 

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwoList(list){
    
    const [, ,...arr] = list;

    return arr;
}

const arr = removeFirstTwoList(source);
console.log(arr);
console.log(source);

//use the destructing assignment to pass an object as a function parameter

const stats ={
    max: 56.78,
    standard_deviation : 4.34,
    median : 34.5,
    mode : 23.87,
    min: -0.75,
    average: 35.85
};

const half =  (function (){

    return function half(stats){

        return(stats.max + stats.min)/2.0;
    };

})();

console.log(stats);
console.log(half(stats));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("good");
console.log(fruits);

function add(num1,num2){
    return num1+num2;
}

function multiply(num1, num2){
    return num1*num2;
}
multiply();

function calculator(num1, num2, operator){
    return operator(num1,num2,);
}

console.log(calculator(2,4,add));


var houseKeeper= {
    name: "Angela",
    age:19,
    Language:["yoruba", "Hausa", "Igbo", "Nupe"],
    workPermit: true,
};

function HouseKeeper (yearsOfExprience, name, cleanReport){
    this.yearsOfExprience=yearsOfExprience;
    this.name=name;
    this.cleanReport=cleanReport;
}

console.log(HouseKeeper());


function sayHi(to){
    console.log("Hello" + " "+ to)
}

sayHi("Tom");

function anotherAddEventListener(typeOfEvent, callbackFunction){
    //detect event code
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeyPress: 2

    }

    if (eventThatHappened.eventType===typeOfEvent){
        callbackFunction(eventThatHappened);
    }
    }
    


     

