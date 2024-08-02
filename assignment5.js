//q1.Write a function that returns a closure which adds a specific number to its argument.
function add(a) {//writing a function that takes num
    return function (b) {// returning a function  that also takes another num
        return a+ b// returning the valu of outer function num and inner function num
    };
}

const adder = add(5);//declaring a variable and calling the function
console.log(adder(10));// printing the output


//q2. Create a function using closure to keep track of how many times it has been called.
let counter = 0;//initializing the counter with zero
function myFunction() {//writing a function 
    counter++;// increamenting the counter
}
myFunction();// calling the function
myFunction();//calling the function
myFunction();//calling the function
console.log("Function called:", counter, "times");//printing the outpput

//q3.Implement a prototype method to calculate the area of a rectangle object.
function Rectangle(w, h) {// writing a function
    this.w = w;// using this method to point to the variable
    this.h = h;// using this method to point to the variable
}

Rectangle.prototype.area = function() {// this prototype gives the area of rectangle
    return this.w * this.h;
};
const rect = new Rectangle(8,2 );//declairing a variable
console.log("Area of the rectangle:", rect.area()); //  printing the Output



//q4. Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
function Circle(r) {//writing a function  that accepts radius
    this.r = r;//  using this method to point to the variable
}
Circle.prototype.perimeter = function() {//this prototype will give the perimeter of circle
    return `the perimeter of circle is ${2*3.14*this.r*this.r}`;// returning the value
};
Circle.prototype.area = function() {//this prototype will give the area of circle
    return  `the area of circle is ${3.14*this.r*this.r}`;// returning the value
}
const a= new Circle(4);// declaring the variable
console.log(a.perimeter());//calling the prototype and displaying output
const b = new Circle(2);//declairing the variable
console.log(b.area());// calling the prototype and displaying output

//q5.Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.
function CreateCounter() {//writing a function
    let count = 10;// initialising the count by 10
    return {     // returning
        increment: function() {//increment function
            count++;// incrementing the count
            return count;// returning the incremented count
        },
        decrement: function() {// decrement function
            count--;// decrementing the count
            return count;// returning the decremented count
        },
        reset:function(){// reset fnctioion 
            count=0;// reseting the function
            return count;//return the  count
        },
        getCount: function(){ //getCount function
            return count;//return the count
        },
}};
const counter1=CreateCounter();//declairing the variable
console.log(counter1.increment());//calling and displaying the output
console.log(counter1.decrement());//calling and displaying the output
console.log(counter1.reset());//calling and displaying the output
console.log(counter1.getCount());//calling and displaying the output

