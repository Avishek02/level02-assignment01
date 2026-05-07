function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}





function reverseString(str: string): string {
    return str.split('').reverse().join('');
}





type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}








function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}








interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}








class Person {
    constructor(public name: string, public age: number) {}
}

class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}









function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(num => arr2.includes(num));
}