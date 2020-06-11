app.get('/', function(req,res) {
  res.send(browserRefresh('index.html'));
});
  
function browserRefresh(filePath) {
  var html = fs.readFileSync(filePath);
  var $ = cheerio.load(html);
  $('body').append(`<script src="${process.env.BROWSER_REFRESH_URL}"></script>`);
  return $.html();
}
let cars = ["Ford", "Honda", "Toyota", "Subaru"];
// console.log(cars.length);
let moreCars = ["Lincoln", "Bugatti", "Datsun", "Honda"];
let totalCars = cars.concat(moreCars);
// console.log(totalCars);
// console.log(totalCars.indexOf("Honda"));
// console.log(totalCars.lastIndexOf("Ford"));
stringOfCars = totalCars.join();
// console.log(stringOfCars);
totalCars = stringOfCars.split(' ');
// console.log(totalCars);
carsInReverse = totalCars.reverse();
// console.log(carsInReverse);
carsInReverse = carsInReverse.sort();
console.log(carsInReverse);
// alert(carsInReverse.indexOf('yourPrediction'));
let removedCars2 = carsInReverse.slice(0, 1);
removedCars3 = carsInReverse.slice(carsInReverse.length-1, carsInReverse.length);
removedCars = removedCars2.concat(removedCars3);
console.log(removedCars);
carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);
carsInReverse.splice(1,2);
carsInReverse.push("Ford", "Honda");
console.log(carsInReverse);
carsInReverse.pop();
console.log(carsInReverse);
carsInReverse.shift();
carsInReverse.unshift("Maserati");
let number = [23, 45, 0, 2];
number.forEach((element)=>{
  console.log(element + 2)
});
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach((element)=>{
  console.log(element + 2)
});