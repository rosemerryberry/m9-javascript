// Main JavaScript File

// Array to work with
var arr1 = [1,2,3,4,5];

// Write a function to subtract one from a value
var minusOne = function(num) {
	var solution = num--;
	return solution;
};

// Pass each value to the subtractOne function by using the map functionality
var subtraction = arr1.map(minusOne);

// Create a array equal to arr1 times two by using the inline "map" funcitonality
var arr2 = arr1.map(function(num) { 
	return num*2;
 });

// Array of strings
var names = ['Tim', 'Nick', 'Grant'];

// Write an introduction function that takes an argument and returns "hello, I'm " + argument
var intro = function(phrase) {
	var intro = "hello, I'm ";
	return intro.concat(phrase);
};

// Create an array of introductions for each name
var introductions = names.map(intro);

// Array of objects
var people = [
	{name:'Tim', age:22},
	{name:'Jan', age:12},
	{name:'Isabel', age:43}
];

// Use the `.forEach` method to create a new property `intro` for each object in your people array
// The property should say "My name is NAME and I'm AGE years old"
