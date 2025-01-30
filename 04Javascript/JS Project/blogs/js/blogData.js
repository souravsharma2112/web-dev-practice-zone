// const blogData = [
//     {
//         name: "Ganesh",
//         age: 22,
//         location: "Kailash",
//         stream: "MERN",
//         hobby: ["singing", "writing", "Playingame"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Shiva",
//             parentAge: 45,
//             location: "Kailash",
//             job: "Defence",
//             pChildren: [
//                 { childName: "Raj", childAge: 21, childHobby: ["cooking", "reading", "writing"] },
//                 { childName: "Sonu", childAge: 25, childHobby: ["cooking", "reading", "writing"] },
//                 { childName: "RajNandini", childAge: 27, childHobby: ["cooking", "reading", "writing"] }
//             ]
//         }
//     },
//     {
//         name: "Aryan",
//         age: 24,
//         location: "Mumbai",
//         stream: "Data Science",
//         hobby: ["painting", "dancing", "hiking"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Ramesh",
//             parentAge: 50,
//             location: "Delhi",
//             job: "Teacher",
//             pChildren: [
//                 { childName: "Amit", childAge: 20, childHobby: ["cycling", "painting", "sketching"] },
//                 { childName: "Priya", childAge: 23, childHobby: ["dancing", "cooking", "swimming"] },
//                 { childName: "Neha", childAge: 26, childHobby: ["yoga", "traveling", "writing"] }
//             ]
//         }
//     },
//     {
//         name: "Priya",
//         age: 23,
//         location: "Chennai",
//         stream: "AI",
//         hobby: ["gaming", "reading", "baking"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Vikram",
//             parentAge: 48,
//             location: "Bangalore",
//             job: "Engineer",
//             pChildren: [
//                 { childName: "Kiran", childAge: 19, childHobby: ["drawing", "singing", "cycling"] },
//                 { childName: "Ananya", childAge: 22, childHobby: ["reading", "traveling", "dancing"] },
//                 { childName: "Rohan", childAge: 25, childHobby: ["swimming", "playing chess", "coding"] }
//             ]
//         }
//     },
//     {
//         name: "Karthik",
//         age: 26,
//         location: "Hyderabad",
//         stream: "Cybersecurity",
//         hobby: ["photography", "coding", "trekking"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Suresh",
//             parentAge: 52,
//             location: "Hyderabad",
//             job: "Doctor",
//             pChildren: [
//                 { childName: "Arjun", childAge: 24, childHobby: ["gaming", "sketching", "hiking"] },
//                 { childName: "Deepa", childAge: 27, childHobby: ["cooking", "painting", "reading"] },
//                 { childName: "Meera", childAge: 28, childHobby: ["singing", "writing", "dancing"] }
//             ]
//         }
//     },
//     {
//         name: "Anjali",
//         age: 25,
//         location: "Pune",
//         stream: "Finance",
//         hobby: ["yoga", "traveling", "blogging"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Rajesh",
//             parentAge: 47,
//             location: "Pune",
//             job: "Business",
//             pChildren: [
//                 { childName: "Sneha", childAge: 22, childHobby: ["baking", "traveling", "dancing"] },
//                 { childName: "Ravi", childAge: 26, childHobby: ["coding", "gaming", "reading"] },
//                 { childName: "Naina", childAge: 24, childHobby: ["painting", "cycling", "yoga"] }
//             ]
//         }
//     },
//     {
//         name: "Sneha",
//         age: 27,
//         location: "Kolkata",
//         stream: "Marketing",
//         hobby: ["singing", "crafting", "hiking"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Ajay",
//             parentAge: 49,
//             location: "Kolkata",
//             job: "Artist",
//             pChildren: [
//                 { childName: "Rohit", childAge: 21, childHobby: ["sketching", "gaming", "traveling"] },
//                 { childName: "Tanya", childAge: 24, childHobby: ["dancing", "singing", "baking"] },
//                 { childName: "Akash", childAge: 26, childHobby: ["coding", "photography", "cycling"] }
//             ]
//         }
//     },
//     {
//         name: "Rahul",
//         age: 28,
//         location: "Jaipur",
//         stream: "HR",
//         hobby: ["cycling", "running", "playing cricket"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Manoj",
//             parentAge: 55,
//             location: "Jaipur",
//             job: "Businessman",
//             pChildren: [
//                 { childName: "Krishna", childAge: 20, childHobby: ["playing guitar", "coding", "traveling"] },
//                 { childName: "Megha", childAge: 22, childHobby: ["writing", "drawing", "singing"] },
//                 { childName: "Ishaan", childAge: 25, childHobby: ["reading", "yoga", "swimming"] }
//             ]
//         }
//     },
//     {
//         name: "Riya",
//         age: 21,
//         location: "Ahmedabad",
//         stream: "Law",
//         hobby: ["reading", "debating", "painting"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Seema",
//             parentAge: 42,
//             location: "Ahmedabad",
//             job: "Lawyer",
//             pChildren: [
//                 { childName: "Aarav", childAge: 15, childHobby: ["painting", "cycling", "coding"] },
//                 { childName: "Avni", childAge: 18, childHobby: ["dancing", "swimming", "baking"] },
//                 { childName: "Raghav", childAge: 24, childHobby: ["photography", "traveling", "playing cricket"] }
//             ]
//         }
//     },
//     {
//         name: "Vikrant",
//         age: 30,
//         location: "Lucknow",
//         stream: "Psychology",
//         hobby: ["writing", "reading", "traveling"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Suman",
//             parentAge: 55,
//             location: "Lucknow",
//             job: "Retired",
//             pChildren: [
//                 { childName: "Ankit", childAge: 25, childHobby: ["swimming", "playing football", "cycling"] },
//                 { childName: "Komal", childAge: 28, childHobby: ["painting", "drawing", "cooking"] },
//                 { childName: "Ritika", childAge: 30, childHobby: ["singing", "crafting", "blogging"] }
//             ]
//         }
//     },
//     {
//         name: "harshad",
//         age: 32,
//         location: "Bhopal",
//         stream: "Teaching",
//         hobby: ["running", "yoga", "watching movies"],
//         travelTour: function (place) {
//             return `${this.name} dreams to travel to ${place}`;
//         },
//         parent: {
//             parentName: "Meera",
//             parentAge: 58,
//             location: "Bhopal",
//             job: "Homemaker",
//             pChildren: [
//                 { childName: "Vihan", childAge: 28, childHobby: ["gaming", "skating", "painting"] },
//                 { childName: "Arpita", childAge: 26, childHobby: ["baking", "reading", "dancing"] },
//                 { childName: "Kavya", childAge: 24, childHobby: ["cycling", "yoga", "blogging"] }
//             ]
//         }
//     }
// ];

function callBlog() {
    let myBlog = `${blogData[0].name}, a ${blogData[0].age}-year-old from ${blogData[0].location}, is passionate about the ${blogData[0].stream} stack and enjoys ${blogData[0].hobby[0]} , ${blogData[0].hobby[1]}, and ${blogData[0].hobby[2]}. His father, ${blogData[0].parent.parentName} , a ${blogData[0].parent.parentAge}-year-old ${blogData[0].parent.job} professional, has  children: ${blogData[0].parent.pChildren[0].childName}, ${blogData[0].parent.pChildren[1].childName}, and ${blogData[0].parent.pChildren[2].childName}, who share similar hobbies like cooking, reading, and writing. Inspired by his family, ${blogData[0].travelTour("Goa")} while building his career in technology.`
    return myBlog
}


const blogData = [
    {
        name: "Ganesh",
        age: 22,
        location: "Kailash",
        stream: "MERN",
        hobby: ["singing", "writing", "Playingame"],
        travelTour: function (place) {
            return `${this.name} dreams to travel to ${place}`;
        },
        parent: {
            parentName: "Shiva",
            parentAge: 45,
            location: "Kailash",
            job: "Defence",
            pChildren: [
                { childName: "Raj", childAge: 21, childHobby: ["cooking", "reading", "writing"] },
                { childName: "Sonu", childAge: 25, childHobby: ["cooking", "reading", "writindg"] },
                { childName: "RajNandini", childAge: 27, childHobby: ["cooking", "reading", "writing"] }
            ]
        }
    }
]

const aee = ["cooking", "reading", "writing"]
const hobby = ["singing", "writing", "Playingame"]


function checkHobbyMatch(blogData){
    blogData[0].hobby.forEach((pElement) => {
        blogData[0].parent.pChildren.forEach((cElement , index) => {
            if (cElement.childHobby.indexOf(pElement) != -1) {
                console.log(`${blogData[0].name} hobby is ${pElement} and also ${blogData[0].parent.pChildren[index].childName} hobby is ${cElement.childHobby[cElement.childHobby.indexOf(pElement)]}`);
            }
        })
    })
}
checkHobbyMatch(blogData);
