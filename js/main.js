// 1. Створити сутність "Людина".
/*
    - Властивості:
        * імʼя;
        * вік.
    - Методи:
        * конструктор, який приймає два параметри: імʼя та вік;
        * метод, який виводить у консоль інформацію про людину.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    infoAboutPerson() {
        console.log(`Імʼя: ${this.name}, вік: ${this.age}`);
    }
}

// В якості демонстрації створити:
// декілька екземплярів класу Людина;
let person1 = new Person('Maria', 28);
person1.infoAboutPerson();

let person2 = new Person('Ivan', 33);
person2.infoAboutPerson();

let person3 = new Person('Marta', 16);
person3.infoAboutPerson();
console.log(' ');


// 2. Створити сутність "Автомобіль".
/*
    - Властивості:
        * марка, модель, рік випуску, номерний знак (або на Ваш розсуд);
        * власник.
    - Методи:
        * конструктор, який приймає чотири параметри (тобто, всі окрім власника):
          марка, модель, рік випуску, номерний знак
        * присвоїти власника - метод повинен приймати екземпляр класу Людина,
          та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
          інакше виводити у консоль відповідне повідомлення
        * метод, який виводить у консоль інформацію про автомобіль
          та викликає метод виводу інформації класу Людина для виведення інформації про власника
*/

class Car {
    personCarOwner;
    constructor(brand, model, manufactureYear, registrationPlate) {
        this.brand = brand;
        this.model = model;
        this.manufactureYear = manufactureYear;
        this.registrationPlate = registrationPlate;
    }
    carOwner(person) {
        if (person.age >= 18) {
            this.personCarOwner = person;
        }
        else {
            console.log('Вам ще не виповнилося 18 років');
        }
    }
    infoAboutCar() {
        console.log(`Марка: ${this.brand}, модель: ${this.model}, рік випуску: ${this.manufactureYear}, номерний знак: ${this.registrationPlate}`);
        this.personCarOwner.infoAboutPerson();
    }
}

// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
let car1 = new Car('Audi', 'A1', 2010, 'AA5153KA');
car1.carOwner(person1);
car1.infoAboutCar();
console.log('car1', car1);
console.log(' ');

let car2 = new Car('Honda', 'Civic', 2016, 'AP8895KE');
car2.carOwner(person2);
car2.infoAboutCar();
console.log('car2', car2);
console.log(' ');

let car3 = new Car('Ford', 'Puma', 2020, 'BH6040EE');
car3.carOwner(person3);
// car3.infoAboutCar(); // цей рядок вже не виконується
console.log('car3', car3);