const individuals = [
    {
        name: "Harshad",
        age: 32,
        gender: "Male",
        location: "Bhopal",
        stream: "Teaching",
        hobby: ["running", "yoga", "watching movies"],
        travelTour: function (place) {
            return `${this.name} dreams to travel to ${place}`;
        },
        parent: {
            mother: { name: "Meera", age: 58, gender: "Female", occupation: "Homemaker" },
            father: { name: "Ramesh", age: 62, gender: "Male", occupation: "Retired School Principal" },
            pChildren: [
                { childName: "Vihan", childAge: 28, gender: "Male", childHobby: ["gaming", "skating", "painting"] },
                { childName: "Arpita", childAge: 26, gender: "Female", childHobby: ["baking", "reading", "dancing"] },
                { childName: "Kavya", childAge: 24, gender: "Female", childHobby: ["cycling", "yoga", "blogging"] }
            ]
        },
        futurePlan: {
            futureDesc: "Harshad aspires to open an educational coaching center in Bhopal, focusing on skill development and modern teaching techniques. The center will emphasize helping underprivileged students gain access to quality education and practical learning tools. Harshad wants to make it a space where students learn life skills along with academics, helping them become independent thinkers. His ultimate aim is to create a ripple effect in education, ensuring that even the remotest areas of the city benefit from accessible and affordable learning.",
            futurePlanning: {
                whatisinMind: "Launch an affordable, high-quality coaching center for underprivileged students in Bhopal and nearby rural areas.",
                stepsTaken: [
                    {
                        firstStep: "Research local educational needs and gaps through surveys and feedback.",
                        requirementsNeeded: "Survey feedback, market analysis, government regulations, and community insights."
                    },
                    {
                        SecondStep: "Develop a curriculum focused on holistic education, combining academics with real-world skills.",
                        requirementsNeeded: "Experienced teachers, partnerships with education NGOs, modern course materials, and digital tools."
                    },
                    {
                        thirdStep: "Begin the pilot phase by setting up a small-scale center and testing the effectiveness of teaching methods.",
                        requirementsNeeded: [
                            {
                                location: "Bhopal",
                                infrastructure: "Leased classroom space with Wi-Fi, audio-visual tools, and books.",
                                heroProducts: [
                                    {
                                        firstHeroProduct: [
                                            {
                                                heroProductName: "Digital Smartboards",
                                                heroProductDesc: "Interactive tools to simplify and enhance learning experiences."
                                            },
                                            ["Modern tech", "Professional teachers", ["Educational Resources", "Online Learning Platforms"]]
                                        ]
                                    },
                                    {
                                        secondHeroProduct: [
                                            {
                                                heroProductName: "Custom Learning Apps",
                                                heroProductDesc: "Mobile and web-based platforms for students to access learning material from anywhere."
                                            },
                                            ["Technology Accessibility", "NGO Support", ["Volunteer Training", "Content Curation"]]
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        aboutUs: `Harshad is a compassionate teacher in Bhopal who believes in empowering young minds through modern education. With his deep knowledge of teaching techniques, he dreams of making learning accessible for all. His dedication stems from his upbringing in an academically inclined family, where his father served as a school principal. Harshad is not only passionate about academics but also values physical and mental well-being, dedicating time to yoga and running.`,
        readMore: `Balancing his professional aspirations with personal well-being, Harshad spends his free time exploring nature and running along the lakes of Bhopal. He watches inspirational movies that motivate him to think differently and adopt innovative teaching practices. With his ambitious plan to launch a coaching center, Harshad is determined to leave a lasting impact on society. His mission is to bridge the gap in education accessibility, ensuring every child gets the opportunity to learn and grow.`,
        characterDetails: "This character is a passionate teacher from Bhopal, dedicated to improving education for underprivileged students. Focused on holistic learning, they aspire to open a coaching center combining academics with life skills. With a love for yoga and running, their innovative teaching methods aim to inspire and empower young minds."
    }
]

for (const key in individuals[0]) {
    if (typeof individuals[0][key] == "object") {
        if (key == "futurePlan") {
            for (const childKey in individuals[0][key]) {
                if (typeof individuals[0][key][childKey] == "object") {
                   for (const grandChildKey in individuals[0][key][childKey]) {
                        if(typeof individuals[0][key][childKey][grandChildKey] == "object"){
                            for (const grandChildKeyChild in individuals[0][key][childKey][grandChildKey][2]) {
                                if(typeof individuals[0][key][childKey][grandChildKey][2][grandChildKeyChild] == "object"){
                                    for (const grandChildKeyChildChild in individuals[0][key][childKey][grandChildKey][2][grandChildKeyChild][0]) {
                                        if(typeof individuals[0][key][childKey][grandChildKey][2][grandChildKeyChild][0][grandChildKeyChildChild] == "object"){
                                            console.log(individuals[0][key][childKey][grandChildKey][2][grandChildKeyChild][0][grandChildKeyChildChild][0].firstHeroProduct[1][2][1]);      
                                        }
                                    } 
                                }
                            }
                        }
                   }
                }
            }
        }
    }
}
const targetValue = individuals[0]?.futurePlan?.futurePlanning?.stepsTaken?.[2]?.requirementsNeeded?.[0]?.heroProducts?.[0]?.firstHeroProduct?.[1]?.[2]?.[1];
console.log(targetValue);
