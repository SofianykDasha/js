// 1.2.3
var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = {
    name: "Годована Стефка",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

// 1.2.4
var car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Голодна Параска",
        category: "B",
        personalLimitations: null //персональні обмеження
    },
    tuning: false,
    numberOfAccidents: 2
};

// 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive();

// 1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive();

// 1.2.7 // 1.2.9
function Truck(color, weight, avgSpeed, brand, model) { //визначає конструктор функції Truck,
    this.color = color;                                 //яка буде використовуватися для створення нових екземплярів грузовиків
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
  
    // Додамо метод trip до прототипу класу Truck
    this.trip = function() { //Ця функція this.trip визначає метод trip для об'єкта, який буде створений за допомогою конструктора Truck.  
      if (!this.driver) {  //Метод trip перевіряє, чи призначений водій для даного грузовика (this.driver). Якщо водій не призначений, виводиться повідомлення "No driver assigned".
        console.log("No driver assigned");  
      } else {   //Якщо ж водій призначений, виводиться детальна інформація про водія, така як ім'я, чи він водить вночі, та його досвід.
        console.log('Driver ' + this.driver.name + '\n' +     
                    (this.driver.nightDriving ? 'drives at night' : 'does not drive at night') + '\n' +
                    ' and has ' + this.driver.experience + ' years of experience');
      }
    };
  }

// 1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience) { //Цей код визначає метод AssignDriver для прототипу об'єкта Truck. 
    this.driver = {                        //Цей метод призначає водія для грузовика, встановлюючи властивості об'єкта driver.
        name: name,   
        nightDriving: nightDriving,
        experience: experience
    };
};
var truck1 = new Truck("yellow", 5000, 60, "Volvo", "VNL");
truck1.AssignDriver("Обскубана Гуска", true, 5);

// 1.2.10
const truck_first = new Truck("green", 6000, 70, "Scania", "R500");
truck_first.AssignDriver("Безголова Курка", true, 10);
truck_first.trip();

const truck_second = new Truck("green", 6000, 70, "Scania", "R500");
truck_second.AssignDriver("Лисий Півень", false, 4);
truck_second.trip();

// 1.2.12  | 1.2.13  |  1.2.15

class Square { //голошує клас Square. Він має конструктор, який приймає сторону квадрата a і зберігає її як властивість об'єкта.
    constructor(a) {
        this.a = a;
    }

    static help() { //статичний метод help(), який виводить інформацію про квадрат. Цей метод є статичним, 
                    //оскільки він визначений за допомогою ключового слова static і викликається без створення екземпляра класу.
        console.log("Square is a geometric figure with four equal sides and four right angles.");
    }

    length() {  //периметр
        console.log("Perimeter of the square: ", 4 * this.a);
    }

    square() {  //площа
        console.log("Area of the square: ", this.a ** 2);
    }

    info() {
        console.log("Square Characteristics:");
        console.log("- Length of all 4 sides:", this.a);
        console.log("- Sum of all angles: 360 degrees");
        console.log("- Perimeter:", 4 * this.a);
        console.log("- Area:", this.a ** 2);
    }
}

// 1.2.16

const square1 = new Square(5); //Цей код створює новий екземпляр класу Square зі стороною 5 і викликає різні методи цього екземпляру, а також статичний метод класу.
square1.length();
square1.square();
square1.info();
Square.help();

// 1.2.17

class Rectangle extends Square { //наслідування з перевизначенням (довизначенням)
    constructor(a, b) {  //Він викликає конструктор батьківського класу Square за допомогою super(a), 
                        //щоб передати значення сторони a, а потім ініціалізує сторону b.
        super(a);

        this.b = b;     // Цей рядок коду в конструкторі класу Rectangle ініціалізує сторону b прямокутника значенням b, 
                        //яке передається як аргумент конструктору. Таким чином, він присвоює значення сторони b об'єкту прямокутника.
    }

    static help() {
        console.log("Rectangle is a geometric figure with 2 equal sides");
    }

    length() {
        console.log("Perimeter of the rectangle: ", );
    }

    square() {
        console.log("Area of the rectangle: ", this.a * this.b);
    }

    info() {
        console.log("Square Characteristics:");
        console.log("- Length of height:", this.a);
        console.log("- Length of weight:", this.b);
        console.log("- Sum of all angles: 360 degrees");
        console.log("- Perimeter:", this.a + this.a + this.b + this.b);
        console.log("- Area:", this.a * this.b);
    }
}

// 1.2.18

  class Rhombus extends Square {
    constructor(a, alpha, beta) {
      super(a);
      this._alpha = alpha;
      this._beta = beta;
    }
  
    static help() {
      console.log("Rhombus is a geometric figure with parallel in pairs sides");
    }

    // 1.2.22
    get alpha() {
      return this._alpha;
    }

    set alpha(value) {
      this._alpha = value;
    }

    get beta() {
      return this._beta;
    }

    set beta(value) {
      this._beta = value;
    }
  
    length() {
      console.log("Perimeter of the rhombus: ", 4 * this.a);
    }
  
    square() {
      console.log("Area of the Rhombus: ", (this.a ** 2) * Math.sin(this._alpha));
    }
  
    info() {
      console.log("Rhombus Characteristics:");
      console.log("- Length of all sides:", this.a);
      console.log("- Perimeter:", 4 * this.a);
      console.log("- Area:", (this.a ** 2) * Math.sin(this._alpha));
    }
}

// 1.2.20

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b)

        this.alpha = alpha;
        this.beta = beta;
    }

    // 1.2.21
    static help() {
        console.log("Parallelogram is a geometric figure with parallel in pairs sides");
    }

    length() {
        console.log("Perimeter of the parallelogram: ", 4 * this.a);
    }

    square() {
        console.log("Area of the Parallelogram: ", (this.a ** 2) * Math.sin(alpha));
    }

    info() {
        console.log("Square Characteristics:");
        console.log("- Length of all sides:", this.a);
        console.log("- Perimeter:", this.a + this.a + this.b + this.b);
        console.log("- Area:", (this.a ** 2) * Math.sin(this.alpha));
    }
}

// 1.2.23

Square.help()
Rectangle.help() 
Rhombus.help()
Parallelogram.help()

// 1.2.24
//Ці рядки коду створюють нові об'єкти за допомогою конструкторів класів Square, Rectangle, Rhombus і Parallelogram. 
//Кожен об'єкт представляє відповідну геометричну фігуру з заданими параметрами.

let square = new Square(4);
let rectangle = new Rectangle(4, 5);
let rhombus = new Rhombus(4, 30, 60);
let parallelogram = new Parallelogram(4, 5, 30, 60);

square.info()
rectangle.info()
console.log('Тутво');
console.log("Beta " + rhombus.beta);
console.log("Alpha " + rhombus.beta);
rhombus.info()
parallelogram.info()

// 1.2.25

function Triangular(a = 3, b = 4, c = 5) {
    { 
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

// 1.2.26

t_a1 = Triangular(10, 15, 20);
t_a2 = Triangular(20, 15, 10);
t_a3 = Triangular();

// 1.2.27
//У цьому коді створюється функція PiMultiplier, 
//яка приймає числовий аргумент num і повертає іншу функцію. 
//Ця зовнішня функція містить константу π, що дорівнює значенню числа π, та внутрішню функцію, 
//яка множить π на аргумент num та повертає результат.

const PiMultiplier = (num) => {
    const π = Math.PI;
    return function() {
      return π * num;
    };
  };
  
  const multiplyByTwo = PiMultiplier(2);
  const multiplyByThree = PiMultiplier(3);
  const divideByTwo = PiMultiplier(0.5);
  
  console.log(multiplyByTwo());
  console.log(multiplyByThree());
  console.log(divideByTwo());

// 1.2.28

const first_pi = PiMultiplier(2);
const second_pi = PiMultiplier(2/3);
const third_pi = PiMultiplier(0.5);

console.log(first_pi());
console.log(second_pi());
console.log(third_pi());

// 1.2.29

function Painter(color, type = undefined) {
    if (type === undefined) {
        console.log("No 'type' property occured!")
        return null;
    }

    return () => { console.log(`${color} - ${type}`) } //Якщо type не є undefined, то повертається анонімна стрілкова функція, 
                    //яка приймає нуль аргументів і виводить рядок, що містить color і type, за допомогою шаблонні літерали.
}

Painter('black')

// 1.2.30

function Painter(color) { 
    return function paint(obj) { //Функція paint приймає об'єкт obj в якості параметра. 
                                //Якщо obj не передано або має значення undefined, виводиться повідомлення "No 'type' property occurred!".
        if (obj === undefined) {
            console.log('No \'type\' property occurred!');
        } else {
            console.log(`${color} - ${obj.type || obj.maxSpeed}`);  //Якщо obj не є undefined, виводиться рядок, що містить значення color, 
                                                                    //а також значення властивості type або maxSpeed об'єкта obj. 
                                                                    //Якщо властивості type немає, то виводиться значення властивості maxSpeed.
        }
      };
}

const PaintBlue = Painter('Blue'); //cтворюється замикання (closures)
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');
console.log('Painter');
PaintBlue({ maxSpeed: 280, type: 'Sportcar', color: 'magenta' }); //Викликаються функції PaintBlue, PaintRed 
                                                                    //і PaintYellow з відповідними об'єктами в якості аргументів.
PaintRed({ type: 'Truck', avgSpeed: 90, loadCapacity: 2400 }); //коді використовується IIFE, що дозволяє створювати функцію 
                                                                //та одразу викликати її. 
                                                                //В даному випадку IIFE використовується для створення функції Painter, 
                                                                //яка приймає параметр color та повертає іншу функцію paint. 
                                                                //Ця внутрішня функція paint викликається безпосередньо після оголошення через IIFE.
PaintYellow({ maxSpeed: 180, color: 'purple', isCar: true });
PaintYellow();  //Оскільки для функції PaintYellow не передано жодного аргументу, 
                //вона викликає функцію paint з obj, яка дорівнює undefined. 
                //Таким чином, виконується перша умова у внутрішній функції paint, і виводиться повідомлення "No 'type' property occurred!".
