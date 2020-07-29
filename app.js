console.log("Hello World");
console.time("Hello");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Hello"); // it will show how long it took for the set of commands to run

//start a variable name with $ only if the variable is used in jQuery object



let name = 'rohit sarkar'; //modern way of declaring variables
console.log(name);


const name1 = 'sean';//cannot reassign the name1 variable as it is now a constant and has to be initialize with a value

//however a constant objects/arrays are mutable

const person = {
    name: 'Rohit',
    age: '28'
}

person.name = 'Rohit S'

console.log(person);

let val;

val = Number('5');

console.log(val.toFixed());

val = Math.floor(Math.random() *20 + 1); //for random numbers in between 1 - 20 warpping math.floor to remove the decimal places

val = "Rohit"

//slice is similar to substring however it can have -ve values which means it will start from back

console.log(val.slice(-2)); // will print "it"

let numbers = [1,2,2,4,6,8];
numbers.push(10); //adding the value in the end
numbers.unshift(0); // adding the value in the front

console.log(numbers);

numbers.pop(); //take out the last element from an array
numbers.shift(); //take out the first number from an array
numbers.splice(1,1); // take out a value at particular index

numbers.reverse(); //reverse an array

numbers.sort(); //sorting an array

// if we want to specify an ascending / descending sort

//Ascending
numbers.sort(function(x,y){
    return x-y;
});

//Descending
numbers.sort(function(x,y){
    return y-x;
});

let val1;

const today = new Date();

val1 = today;
console.log(val1);

val1 =today.getMonth(); //similar to that of array zero based index

//function declarations

function sqrt1(x)
{
    return x*x;
}

//function expression

const sqrt = function(x){
return x*x;
}

//IIFEs - Immidiately invokable function expressions

var result = (function () {
    var aName = "Barry";
    return name; 
})();


result;


//const input = prompt();
//alert(input);

let val2;
val2 = window.location;

val2 = window.location.href;

console.log(val2);

val2 = window.navigator.appName;

console.log(val2);

let val3;

val3 = document.all[0];

val3 = document.scripts[0].getAttribute('src');;


console.log(val3);

console.log(document.querySelector('h1'));


const li = document.createElement('li');
li.className = 'collection-item';
li.setAttribute('title','New Item');
li.appendChild(document.createTextNode('Hello There'));

const link = document.createElement('a');
link.innerHTML = '< i class= "fa fa-remove"></i>';


document.querySelector('h1').appendChild(li);

console.log(li);

document.querySelector('.btn-primary').addEventListener('click',function(e){
    console.log("Hi There");
    e.preventDefault(); // we can prevent the default behaviour by restricting it
}); 


document.querySelector('.btn-primary').addEventListener('click',onClick);

function onClick(e)
{
    console.log(e);
    e.target.innerText = 'Clicked!'
}


document.querySelector('.input-primary').addEventListener('keypress',runevent);

function runevent(e)
{
    console.log(e.target.value);
}


document.querySelector('select').addEventListener('change',runevent2);

function runevent2(e){ console.log(e.target.value);
}


//local storage needs to be cleared manually


localStorage.setItem('name','Rohit');

//either use localStorage.clear() or localStorage.removeItem(keyname)

sessionStorage.setItem('name','Shreyasee');


