// Object Oriented Programming and Design

/*

Why use OOP? 

OOP allows you to model your software system as real world objects that communicate
and interact with eachother. These objects have data and functionality associated with them. 
This provides a few advantages. 
1. It allows you to easily abstract about your software model -> making it easier to understand and
develop. Abstraction allows you to contain complicated details behind an easy to understand facade. 
2. It provides encapsulation of data and functionality into a co-located class. An object contains data and methods that are specific to a certain responsibility. Separating these responsibilities into objects 
creates a more flexible systems

*/


/*

In Java: class keyword defines a class. A class has properties and methods for instances of that class. 
The class in this case acts as a blueprint for the object. Or the object is an instance of the class. 

In JavaScript: We can implement OOP w/o class. 
This is "Prototype-based programming" -> ES5
- the object encapsulated the proerties (methods and data) instead of the class. 
- you can add new properties to this object whenever you feel like it. 
- objects become first-class citizens. You can create an object, without first defining a class. 
- an object can be an individual instead of an instance of a class. 

Class based OOP: 
- Fewer chances of bugs -> compiler forces a lot. 
- Abstraction Layer is present
- Rigid
- Class blueprint is required. 

Prototype based OOP: 
- Straight-forward
- flexible and transparent
- Higher risk of incorrectness. 

In JavaScript ES6: 
- class keyword is added
- static keyword is added
- extends and super keywords added
- clearer constructor function syntax
- improved syntax for prototype inheritance
- improved getter/setter property syntax

A lot of these are syntactical improvements on top of the prototype based OOP. 
inheritance -> extends and super keywords
static members of an objecg declared with static keyword. 

Object in JS: 
- pretty much everything. Event data types if they are declared with the "new" keyword.
- Map real world objects into your software model 

Shapes. we want to calculate the area for each shape sqpare, circle, rectangle. 
- structural programming / functional programming -> create functions that calculate area for each shape. 
- Object Oriented -> create objects for each shape that encapsulate the data, and expose a useful method to the user -> calculateArea(). 
 */

const rectangle = { 
    length: 1, 
    height: 2, 
    getArea() { return this.length * this.height} 
  }
  console.log(rectangle.getArea());
  
  class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  }
  
  let obj = new Object();
  obj.name = 'Joe';
  obj.age = 99;
  
  console.log(`My name is ${obj.name}`);
  
  const circle = new Circle(4);
  const anotherCircle = Object.create(circle);
  circle.area = '12345';
  console.log(circle);
  
  const employee = { // employee is immutable,
    name: 'Jim',
    pay: 100000,
    getAge() { return 45 }
  }
  employee.age = 45;          //  but adding properties and changing its properties is allowed.
  employee.name = 'NotJim';
  //employee = { name: 'NotJim', age: 88 }    // this will throw an error
  
  console.log(employee);
  
  for (prop in employee) {
    console.log(prop + ': ' + employee[prop]);
  }
  
  console.log(employee.getAge());
  console.log(employee['getAge']())
  
  delete employee.age;
  console.log(employee);
  
  let variable = 5;
  delete variable; // doesnt work on variables in global scope, only on object properties and functions
  console.log(variable);
  
  /*
  this keyword
  for an object referring to itself
  this points to the object of the current scope. 
  
   */
  const car = {
    color: 'red',
    type: 'AMG',
    price: 500000,
    getPrice() { return this.price },
    setPrice(priceToSet) { this.price = priceToSet }
  }
  console.log(car.getPrice());
  car.setPrice(30000);
  console.log(car.getPrice());
  
  // there are get and set keywords to allow you to easily get and set object properties...
  // get and set allow functions to be accessed and changed as data values outside the object.
  const amg = {
    _color: 'red',
    _type: 'AMG',
    _price: 500000,
    get price() { return this._price },
    set price(priceToSet) { this._price = priceToSet }
  }
  
  console.log(amg.price);
  amg.price = 1;
  console.log(amg.price);
  
  const product = {
    name: 'iPhone', 
    _price: 899,
    amount: 4,
    madeIn: 'America',
    set price(discount) { this._price -= this._price * discount },
    get price() { return this._price }
  }
  console.log(product);
  for (props in product) {
    if (props === 'name') {
      product[props] = 'Bottle';
    }
    if (props === 'madeIn') {
      product[props] = 'China';
    }
  }
  console.log(product);
  product.totalBill = function() {
    return this.price * this.amount;
  }
  console.log(product.totalBill());
  product.price = .1;
  console.log(product.price);
  
  /* 
  Functions as Objects
  Functions have their own properties and methods, and thus, are also objects in JavaScript
  
  constructor functions are functions of objects that allow us to define creation of multiple instances of the same object. It acts as the blueprint for the object (this is where class blueprints start to come into javaScript)
  
  In ES5 you needed a constructor function, since the constructor keyword didn't exist. 
   */
  
  function Worker(_name, _age, _type) {
    this.name = _name;
    this.age = _age;
    this.type = _type;
    this.company = 'Foogle';
    this.getCompany = function() {
      return this.company;
    }
  }
  
  let dave = new Worker('Dave', 34, 'developer');
  let jane = new Worker('Jane', 38, 'manager');
  console.log(dave);
  console.log(jane);
  console.log(jane.getCompany());
  
  // the prototype property is a hidden property present inside every object created via a constructor function. 
  // Known as the Prototype Object 
  // INstances of the object created from the constructor share the consturctors prototype object. Adding methods to the constructors prototype object will allow instances to access these methods. 
  console.log(Worker.prototype);
  console.log(Worker.prototype.constructor);
  Worker.prototype.location = 'Cupertino'; // this allows you to add functionality to an object, without changing its constructor. 
  Worker.prototype.getAddress = function(anAddress) { return anAddress + ':' + this.age };
  console.log(jane.getAddress('123.11.000'));
  console.log(jane.location);
  
  // Not sure why you'd want to do that as opposed to explicitly adding the props to the constructor...
  
  /* 
  In ES6, constructor, static, class, and extends keywords were added to make class like OOP more explicit.
  
  In ES5 and ES6, access modifiers are not included. 
  Typescript supports this. 
  
  To protect access you can declare porperties with var properties and expose 
  */
  
  function Car(model, color, price) {
    let _model = model;
    let _color = color;
    let _price = price;
    this.getModel = function () { return _model }
  }
  
  let sclass = new Car('sclass', 'black', 45000);
  console.log(sclass._model);
  console.log(sclass.getModel());
  
  /*
  ES6 brings new OOP style keywords and features
   */
  
  
  // Abstraction: The user of the Employee class doesn't need to know how the public methods are implemented. They hide the implementation details. Te low level logic is hidden by an abstraction.  
  // Encapsulation: An employee has a name, age, etc and I can get those values. Usefull functionality is also available. all are self contained in one class
  class Employee {
    constructor(name, age, startDateYear, payPerYear) {
      this._name = name;
      this._age = age; 
      this._startDateYear = startDateYear;
      this._payPerYear = payPerYear;
    }
  
    get age() {
      return this._age;
    }
    // these methods defined outside the constructor of the class are added to the prototype of the object. This is why the instances of the object can access them. You can see the progression from ES5 to ES6 
    getTenure() {
      return new Date().getFullYear() - this._startDateYear;
    }
  
    getTotalWagesEarned() {
      return this.getTenure() * this._payPerYear;
    }
  }
  
  const michael = new Employee('Michael', 25, 2021, 140000);
  // the method is essentially taken from Employee.prototype. Instances have access to the class prototype object. 
  console.log(michael.getTotalWagesEarned()); // 0
  
  // Protecting class properties. 
  
  class Student {
    constructor(name, age, major) {
      var _name = name;
      var _age = age;
      var _major = major;
  
      this.getAge = function() {
        return _age;
      }
  
      this.getName = function() {
        return _name;
      }
    }
  
    static whoIsOlder(student1, student2) {
      return (student1.getAge() > student2.getAge()) 
         ? student1.getName() 
         : student2.getName();
    }
  }
  const student = new Student('Michael', 25, 'Electircal Engineering');
  console.log(student.getName());
  
  // static methods: methods of the class, not the object instance
  // they are not in the class prototype, but directly in the class itself, so instances of the class cannot access them. 
  
  const laura = new Student('Laura', 23, 'Biology');
  
  console.log(Student.whoIsOlder(student, laura));
  
  /* 
  Inheritance uses object __proto__ under the hood
  
  */ 
  
  let Shape = {
    name: 'Rectangle'
  }
  
  let Rectangle = {
    length: 2,
    height: 4
  }
  
  Rectangle.__proto__ = Shape
  
  console.log(`My name is ${Rectangle.name} and my area is ${Rectangle.length * Rectangle.height}`);
  
  /* 
  Shape is the prototype of Rectangle
  or
  Rectangle inherits prototypically from Shape.
  
  So, upon accessing, if a property is not found in the object, such as if the name property is not found in Rectangle, JavaScript will automatically take it from the prototype of the object, Shape. This is known as prototypal inheritance.
  */
  
  class Animal {
    constructor(name, species) {
      this._name = name;
      this._species = species;
    }
  
    getSpecies() {
      return this._species;
    }
  }
  
  class Bear extends Animal {
    constructor(name, species, region, type) {
      super(name, species)
      this._region = region;
      this._type = type;
    }
  
    getName() {
      return this._name;
    }
  
    getSpecies() {
      // super.getSpecies();
      return 'bear';
    }
  }
  
  const grizzly = new Bear('Kodiak', 'Mammal', 'Alaska', 'Grizzly Bear');
  console.log(`My bears name is ${grizzly.getName()} and is a ${grizzly.getSpecies()}`)