// step 1 take order from customer
const foodItem = [
    {
        fooditem: "Shahi Paneer",
        time: "25 min"
    },
    {
        fooditem: "Veg Biryani",
        time: "30 min"
    },
    {
        fooditem: "Dal Makhani",
        time: "35 min"
    },
    {
        fooditem: "Paneer Butter Masala",
        time: "40 min"
    },
    {
        fooditem: "Aloo Gobi",
        time: "20 min"
    },
    {
        fooditem: "Chana Masala",
        time: "25 min"
    },
    {
        fooditem: "Bhindi Masala",
        time: "20 min"
    },
    {
        fooditem: "Veg Pulao",
        time: "25 min"
    },
    {
        fooditem: "Paneer Tikka",
        time: "15 min"
    },
    {
        fooditem: "Malai Kofta",
        time: "30 min"
    }
];


// const foodI = {
//     s : "SAd",
//     d : "dad",
//     f : "fish"
// }



// console.log(foodItem.includes("Panner Tikka"));
// let newObj = Object.entries(foodI)    // this will return an array
// let newObj1 = Object.keys(foodI)    // this will return an array
// let newObj2 = Object.values(foodI)    // this will return an array
// let newObj3 = Object.defineProperty(foodI)    // this will return an array
// console.log(Object.entries(foodI));
// console.log(newObj);
// console.log(newObj1);
// console.log(newObj2);
// console.log(newObj3);

// array in array 
// const fruits = [["apples", 300], ["pears", 900], ["bananas", 500]];

// let fruitsObj = Object.fromEntries(fruits)
// console.log(fruitsObj);



// const takeOrder = (customerName , foodItem , callback) => {
//     console.log(`Hello! ${customerName}  `);
    
// }


// step2 Place the order
// step3 Cook the food
// step 4 food is cooked
// step 6 deliver to customer
// step 5 order completed


const fruits = new Map();
fruits.set('Bananas', 300);
fruits.set('Oranges', 200);
fruits.set('Apples', 500);

console.log(fruits.get('Bananas')); // 300
console.log(fruits);

const obj = {
    '10': 'ten',
    '1': 'one',
    '2': 'two',
    '11': 'eleven'
};

const strObj = {
    a : "hghjg",
    z : "jkj",
    c :"gjg",
    f: "ghf",
    d : "jjk"
}
console.log(obj);
console.log(strObj);

