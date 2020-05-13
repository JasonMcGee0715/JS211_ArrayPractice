let cars = ["Ford", "Honda", "Toyota", "Ferrari"]

let moreCars = ["Chevy", "Lamborghini", "Alfa Romeo", "Honda"]
let totalCars = cars.concat(moreCars)
console.log(totalCars)

console.log(totalCars.indexOf("Honda"))
console.log(totalCars.lastIndexOf("Ford"))

stringOfCars = totalCars.join()
console.log(stringOfCars)

totalCars = stringOfCars.split(" ")
console.log(totalCars)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse = carsInReverse.sort()

alert(carsInReverse.indexOf('Ford'))

let removedCars2 = carsInReverse.slice(0, 1);
removedCars3 = carsInReverse.slice(carsInReverse.length-1, carsInReverse.length);
removedCars = removedCars2.concat(removedCars3);
console.log(removedCars)

carsInReverse.splice(1, 2, "Ford", "Honda")
console.log(carsInReverse)

carsInReverse.push("Ford", "Honda")
console.log(carsInReverse)

carsInReverse.pop()
console.log(carsInReverse)

carsInReverse.shift()
console.log(carsInReverse)

carsInReverse.unshift("Bugatti")
console.log(carsInReverse)

const plusTwoFunction = () => {
  for (let i = 0 ; i < 4 ; i++) {
    newArray = numbers[i] + 2;
    
    console.log(newArray);
    
  }
}

numbers = [23, 45, 0, 2]
console.log(numbers)

numbers.forEach(plusTwoFunction)

console.log(numbers.forEach(plusTwoFunction))
