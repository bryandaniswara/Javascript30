const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'hugo', age: 8 },
];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello %s!', 'Bryan');

// Styled
console.log('%c Styled text', 'font-size: 20px; color: blue');

// warning!
console.warn('Warning message!');

// Error :|
console.error('Error message!');

// Info
console.info('Info');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Bryan');
console.count('Bryan');
console.count('Bryan');
console.count('Bryan');
console.count('Bryan');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/bryandaniswara')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	});

// table
console.table(dogs);
