function Person(first, last, age, gender, interest) {
	this.name = {
		first,
		last
	};
	this.age = age;
	this.gender = gender;
	this.interest = interest;
}

// Person.prototype.greeting = function() {
// 	// body...
// 	alert('just fine');
// }

let person1 = new Person('Tom', 'Nyone', 34, 'male', 'Soccer');

let para = document.querySelector('.cont');
para.textContent = person1.name.first;

console.log(person1.name.first);


