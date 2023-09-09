
let len = str => str.length;
console.log(`the length of the string is ${len("karthik")}`);

console.log("Map Function")
let a = [10, 15, 20, 21, 30, 40];
let abc = a.map((x) => x * 2);
abc.forEach(x => console.log(x));

console.log("Filter function");
let evens = a.filter(ele => ele % 2 === 0);
evens.forEach(ele => console.log(ele));

console.log("All in array func in one");
a.filter(ele => ele % 2 === 0)
    .map(ele => ele * ele).forEach(ele => a.push(ele));
a.forEach(ele => console.log(ele));

console.log("Deep Copy")
let b = a.slice(1, 4);
console.log(a);
console.log(b);


const person = {
    pid: 1,
    name: "hadvik",
    fathername: "karthik"
}
for (let kk in person) {
    console.log(kk + ":" + person[kk]);
}

//Array of objects
const person1 = [
    { pid: 1, name: "Hadvik", fathername: "karthik" },
    { pid: 2, name: "Poorni", fathername: "krishnamoorthy" },
]


// for (let kk in person1) {
//     console.log(kk + ":" + person1[kk]);
// }

// Destructuring Objects
const restaurant = {
    name: 'hadvik cafe',
    openinghours: {
        thu: {
            open: 12,
            close: 10
        },
        friday: {
            open: 12,
            close: 10
        }
    }
}

// const { openinghours, name } = restaurant;
// const { name, openinghours: hours } = restaurant;
const { friday } = restaurant.openinghours;
console.log(friday);
// console.log(name);

// Spread operator - To spread values to new array
const spread1 = [7, 8, 9];
const newspread = [1, 2, ...spread1];
const newarr1 = [...spread1, ...newspread]
console.log(spread1);
console.log(newspread);
console.log(newarr1);

// Promises
function trackUser() {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (postData) => {
                resolve(postData);
            },
            err => {
                reject(err);
            }
        );
    });
    return promise;
}

function getlocation() {
    trackUser()
        .then(position => {
            console.log(position);
        })
        .catch((err) => {
            console.log(err)
        });
}

getlocation();
