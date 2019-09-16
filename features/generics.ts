class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T) {}

	get(index: number): T {
		return this.collection[index];
	}
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions
function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: string[]) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// Add types to generic function calls to ensure type errors are caught
printAnything(['a', 'b', 'c']);
printAnything([2, 3, 4, 5, 6, 7]);

class Car {
	print(): void {
		console.log('car');
	}
}

interface Printable {
	print(): void;
}

function printHouseOfCars<T extends Printable>(arr: T[]): void {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		element.print();
	}
}
