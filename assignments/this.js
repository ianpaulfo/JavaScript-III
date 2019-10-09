/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - The first principle explains that when "this" in the global scope its value will be the window/console Object.
* 2. Implicit Binding - when using a dot to call a function, the object before the dot would be considered "this"
* 3. New binding - when using constructor functions, the object being created would be the "this"
* 4. Explicit binding - when using .call or .apply to invoke a function you are specifying what the "this" keyword is referencing. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Ian Fragoso");

// Principle 2

// code example for Implicit Binding

var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
 
  obj.doStuff('awesome');

// Principle 3

// code example for New Binding

function SayHi(person) {
    this.greeting = 'Hello ';
    this.person = person;
    this.speak = function() {
      console.log(this.greeting + this.person);
      console.log(this);
    };
  }
  
  const ian = new SayHi('Ian');
  const diva = new SayHi('Diva');
  
  ian.speak();
  diva.speak();

// Principle 4

// code example for Explicit Binding

function greet (c1, c2, c3) {
    console.log(
      `Hello, my name is ${this.name} and I understand ${c1}, ${c2}, and ${c3}`
    )
  }
  
  const user = {
    name: 'Ian',
  }
  
  const concept = ['Arrays', 'Callbacks', 'THIS']
  
  greet.call(user, concept[0], concept[1], concept[2]);