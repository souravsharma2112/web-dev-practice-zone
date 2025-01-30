# **JavaScript Classes with OOP Concepts Explained**  

Object-Oriented Programming (**OOP**) is a programming paradigm that structures code into **objects** that contain **properties (data)** and **methods (functions).** JavaScript follows OOP principles using **classes and objects.**  

---

## **1. What is OOP? (Object-Oriented Programming)**
OOP is based on four main principles:  

1️⃣ **Encapsulation** – Bundling data (properties) and methods (functions) inside objects.  
2️⃣ **Abstraction** – Hiding implementation details and exposing only necessary parts.  
3️⃣ **Inheritance** – Allowing one class (child) to acquire properties and behaviors of another class (parent).  
4️⃣ **Polymorphism** – Allowing methods to take different forms (e.g., overriding methods in child classes).  

JavaScript uses **classes** to implement OOP.

---

## **2. What is a Class?**
A **class** is a blueprint for creating objects. It defines **properties (variables)** and **methods (functions)** that describe the behavior of an object.  

### **Example: Defining a Simple Class**
```javascript
class Person {
    constructor(name, age) {  // Constructor initializes object properties
        this.name = name;
        this.age = age;
    }

    greet() {  // Method (function inside a class)
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object from the class
const person1 = new Person("Sourav", 22);
person1.greet();  
// Output: Hello, my name is Sourav and I am 22 years old.
```
👉 **Key Points:**  
✔️ `constructor()` is a special method that runs when a new object is created.  
✔️ `this.name` and `this.age` define instance properties.  
✔️ `greet()` is a method that belongs to the class.  
✔️ `new Person("Sourav", 22)` creates an **object** from the class.  

---

## **3. OOP Concepts in JavaScript Classes**  

### **🔵 Encapsulation (Data Hiding & Grouping)**
Encapsulation means keeping related data and methods **inside the class** to avoid direct access to properties from outside.

#### **Example of Encapsulation:**
```javascript
class BankAccount {
    #balance = 1000; // Private property (Encapsulation)

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(500); // Deposited: 500, New Balance: 1500
console.log(myAccount.getBalance()); // 1500
console.log(myAccount.#balance); // ❌ Error: Cannot access private property
```
🔹 **Why use Encapsulation?**  
✔️ Prevents unauthorized access to properties.  
✔️ Data is only modified through controlled methods.  

---

### **🟢 Abstraction (Hiding Complex Details)**
Abstraction means **hiding unnecessary implementation details** and exposing only the required methods.

#### **Example of Abstraction:**
```javascript
class Car {
    startEngine() {
        console.log("Engine started");
    }

    drive() {
        console.log("Car is driving");
    }
}

const myCar = new Car();
myCar.drive(); // Output: Car is driving
myCar.startEngine(); // Output: Engine started
```
🔹 **Why use Abstraction?**  
✔️ Users only need to know how to use the class (e.g., `startEngine()` and `drive()`), not the internal workings.  
✔️ Hides complexity from the user.  

---

### **🟠 Inheritance (Extending Functionality)**
Inheritance allows a **child class** to inherit properties and methods from a **parent class** using the `extends` keyword.

#### **Example of Inheritance:**
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal makes a sound");
    }
}

// Dog class inherits from Animal
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks!`); // Method Overriding (Polymorphism)
    }
}

const dog1 = new Dog("Buddy");
dog1.makeSound(); // Output: Buddy barks!
```
🔹 **Why use Inheritance?**  
✔️ Avoids code duplication by reusing parent class properties/methods.  
✔️ Makes the code more organized and scalable.  

---

### **🔴 Polymorphism (Overriding & Overloading)**
Polymorphism allows **different objects to respond differently to the same method call**.

#### **Example of Method Overriding (Polymorphism):**
```javascript
class Employee {
    work() {
        console.log("Employee is working");
    }
}

class Developer extends Employee {
    work() {
        console.log("Developer is coding");
    }
}

class Designer extends Employee {
    work() {
        console.log("Designer is creating designs");
    }
}

const dev = new Developer();
const des = new Designer();

dev.work(); // Output: Developer is coding
des.work(); // Output: Designer is creating designs
```
🔹 **Why use Polymorphism?**  
✔️ Enables dynamic method behavior based on the object.  
✔️ Makes code more flexible and reusable.  

---

## **4. Other Class Features in JavaScript**

### **Static Methods (Class-Level Methods)**
Static methods belong to the class itself, **not** an instance.
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3)); // Output: 8
```
✔️ Called using the class name: `MathUtils.add(5,3)`.  
✔️ Cannot be accessed through an object.  

---

### **Getters and Setters (Access Control)**
- `get` allows controlled property access.  
- `set` allows controlled modification of properties.  

#### **Example:**
```javascript
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length < 3) {
            console.log("Name is too short");
        } else {
            this._name = newName;
        }
    }
}

const user = new User("Sourav");
console.log(user.name); // Output: Sourav
user.name = "Sa"; // Output: Name is too short
```
✔️ Protects data from invalid modifications.  

---

## **5. Summary Table: OOP Principles in JavaScript**

| Concept       | Description | Example |
|--------------|------------|---------|
| **Encapsulation** | Hides data & methods inside a class | Private properties `#balance` |
| **Abstraction** | Hides unnecessary details | `Car.startEngine()` hides inner logic |
| **Inheritance** | Child class inherits from Parent class | `class Dog extends Animal` |
| **Polymorphism** | Same method behaves differently in different classes | `work()` overridden in `Developer` |

---

## **6. Final Thoughts**
JavaScript **classes** bring a structured, OOP-based approach to coding.  
They help with **code reuse**, **maintainability**, and **scalability**.

✅ **Use OOP principles to:**  
- Organize code into reusable components  
- Improve code readability  
- Reduce complexity in large applications  

---

🔥 Let me know if you need more **examples** or **detailed explanations**! 🚀