$(document).ready(function(){

	var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
	var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
	var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

	var personList = [person1, person3];

	var sayHello = function() {
		alert('Hello, ' + this.firstName);
	};


	var greetOneAnother = function(personA, personB) {
		alert("{0}, meet {1} and {2}".supplant([this.firstName, personA.firstName, personB.firstName]));
	};
	
///call and apply:

	sayHello.call(person1);

	greetOneAnother.apply(person2, personList);

	var abc = function opensAlert() {
		var grab = $(this).val();
		alert('Here we are: ' + grab );
	};


	var button1 = $('.callApply1');
	var button2 = $('.callApply2');
	var button3 = $('.callApply3');
	abc.call(button1);
	abc.call(button2);
	abc.call(button3);



});
	



