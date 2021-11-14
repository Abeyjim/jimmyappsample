// FUNCTION DECLARATIONS

function greet(firstName = 'James', lastName = 'Sambo'){
  // if(typeof firstName === 'undefined'){firstName = 'James'}
  // if(typeof lastName === 'undefined'){lastName = 'Sambo'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('James');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();