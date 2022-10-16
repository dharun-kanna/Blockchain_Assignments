//Javascript Assignment 5
// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr
// 2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr
// 3
// where r is the radius
// 3) Cone- Volume= πr
// 2h/3

// where r is the radius and h is the height of the cone.


class Cylinder{
    constructor(r,h){
        this.radius = r;
        this.height = h;
    }

    getVolume = () => {
        console.log(`${(Math.PI*(this.radius**2)*this.height).toFixed(2)}`)
    }
}


class Sphere{
    constructor(r){
        this.radius = r
    }
    getVolume = () => {
        console.log(`${((4/3) * Math.PI * this.radius**3).toFixed(2)}`)
    }

}

class Cone{
    constructor(r,h){
        this.radius = r;
        this.height = h;
    }

    getVolume = () => {
        console.log(`${((Math.PI*(this.radius**2)*this.height)/3).toFixed(2)}`)
    }

}


const c1 = new Cylinder(3,5);

c1.getVolume()

const s1 = new Sphere(4);

s1.getVolume()

const cn = new Cone(5,7)

cn.getVolume()