// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ firstName: "Albert", lastName: "Einstein", birth: 1879, passed: 1955 },
	{ firstName: "Isaac", lastName: "Newton", birth: 1643, passed: 1727 },
	{ firstName: "Galileo", lastName: "Galilei", birth: 1564, passed: 1642 },
	{ firstName: "Marie", lastName: "Curie", birth: 1867, passed: 1934 },
	{ firstName: "Johannes", lastName: "Kepler", birth: 1571, passed: 1630 },
	{ firstName: "Nicolaus", lastName: "Copernicus", birth: 1473, passed: 1543 },
	{ firstName: "Max", lastName: "Planck", birth: 1858, passed: 1947 },
	{ firstName: "Katherine", lastName: "Blodgett", birth: 1898, passed: 1979 },
	{ firstName: "Ada", lastName: "Lovelace", birth: 1815, passed: 1852 },
	{ firstName: "Sarah E.", lastName: "Goode", birth: 1855, passed: 1905 },
	{ firstName: "Lise", lastName: "Meitner", birth: 1878, passed: 1968 },
	{ firstName: "Hanna", lastName: "Hammarström", birth: 1829, passed: 1909 },
];

const people = [
	"Beck, Glenn",
	"Becker, Carl",
	"Beckett, Samuel",
	"Beddoes, Mick",
	"Beecher, Henry",
	"Beethoven, Ludwig",
	"Begin, Menachem",
	"Belloc, Hilaire",
	"Bellow, Saul",
	"Benchley, Robert",
	"Benenson, Peter",
	"Ben-Gurion, David",
	"Benjamin, Walter",
	"Benn, Tony",
	"Bennington, Chester",
	"Benson, Leana",
	"Bent, Silas",
	"Bentsen, Lloyd",
	"Berger, Ric",
	"Bergman, Ingmar",
	"Berio, Luciano",
	"Berle, Milton",
	"Berlin, Irving",
	"Berne, Eric",
	"Bernhard, Sandra",
	"Berra, Yogi",
	"Berry, Halle",
	"Berry, Wendell",
	"Bethea, Erin",
	"Bevan, Aneurin",
	"Bevel, Ken",
	"Biden, Joseph",
	"Bierce, Ambrose",
	"Biko, Steve",
	"Billings, Josh",
	"Biondo, Frank",
	"Birrell, Augustine",
	"Black, Elk",
	"Blair, Robert",
	"Blair, Tony",
	"Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
	if (inventor.birth >= 1500 && inventor.birth < 1600) {
		return true; // keep it!
	}
});
console.log(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.firstName} ${inventor.lastName}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const orderedByAge = inventors.sort((a, b) => (a.birth > b.birth ? 1 : -1));
console.table(orderedByAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.birth);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
	const lastInventor = a.passed - a.birth;
	const nextInventor = b.passed - b.birth;
	return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category-generated");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes("de"));
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by lastName name
const alpha = people.sort((lastOne, nextOne) => {
	const [aFirst, bFirst] = lastOne.split(", ");
	const [aLast, bLast] = nextOne.split(", ");
	return aLast > bLast ? -1 : 1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const transportation = data.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

console.log(transportation);
