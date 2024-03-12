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
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

// 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive;

// 1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive;

// 1.2.7 // 1.2.9
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
  
    // Додамо метод trip до прототипу класу Truck
    this.trip = function() {
      if (!this.driver) {
        console.log("No driver assigned");
      } else {
        console.log('Driver ' + this.driver.name + '\n' +
                    (this.driver.nightDriving ? 'drives at night' : 'does not drive at night') + '\n' +
                    ' and has ' + this.driver.experience + ' years of experience');
      }
    };
  }

// 1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};
var truck1 = new Truck("yellow", 5000, 60, "Volvo", "VNL");
truck1.AssignDriver("Обскубана Гуска", true, 5);

// 1.2.9
const truck_first = new Truck("green", 6000, 70, "Scania", "R500");
truck_first.AssignDriver("Безголова Курка", true, 10);
truck_first.trip();

const truck_second = new Truck("green", 6000, 70, "Scania", "R500");
truck_second.AssignDriver("Лисий Півень", false, 4);
truck_second.trip();

// 1.2.12  | 1.2.13  |  1.2.15

class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square is a geometric figure with four equal sides and four right angles.");
    }

    length() {
        console.log("Perimeter of the square: ", 4 * this.a);
    }

    square() {
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

const square1 = new Square(5);
square1.length();
square1.square();
square1.info();
Square.help();

// 1.2.17

class Rectangle extends Square {
    constructor(a, b) {
        super(a);

        this.b = b;
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
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Rhombus is a geometric figure with parallel in pairs sides");
    }
  
    length() {
      console.log("Perimeter of the rhombus: ", 4 * this.a);
    }
  
    square() {
      console.log("Area of the Rhombus: ", (this.a ** 2) * Math.sin(alpha));
    }
  
    info() {
      console.log("Rhombus Characteristics:");
      console.log("- Length of all sides:", this.a);
      console.log("- Perimeter:", 4 * this.a);
      console.log("- Area:", (this.a ** 2) * Math.sin(this.alpha));
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

let square = new Square(4);
let rectangle = new Rectangle(4, 5);
let rhombus = new Rhombus(4, 30, 60);
let parallelogram = new Parallelogram(4, 5, 30, 60);

square.info()
rectangle.info()
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
t_a3 = Triangular

// 1.2.27

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
const second_pi = PiMultiplier(3/2);
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

    return () => { console.log(`${color} - ${type}`) }
}

Painter('black')

// 1.2.30

function Painter(color) {
    return function paint(obj) {
        if (obj === undefined) {
            console.log('No \'type\' property occurred!');
        } else {
            console.log(`${color} - ${obj.type || obj.maxSpeed}`);
        }
      };
}

const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');
console.log('Painter');
PaintBlue({ maxSpeed: 280, type: 'Sportcar', color: 'magenta' });
PaintRed({ type: 'Truck', avgSpeed: 90, loadCapacity: 2400 });
PaintYellow({ maxSpeed: 180, color: 'purple', isCar: true });
PaintYellow();
