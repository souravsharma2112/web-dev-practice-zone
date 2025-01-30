const apiData = [
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
                       steps: "Research local educational needs and gaps through surveys and feedback.",
                        requirementsNeeded: "Survey feedback, market analysis, government regulations, and community insights."
                    },
                    {
                        steps: "Develop a curriculum focused on holistic education, combining academics with real-world skills.",
                        requirementsNeeded: "Experienced teachers, partnerships with education NGOs, modern course materials, and digital tools."
                    },
                    {
                        steps: "Begin the pilot phase by setting up a small-scale center and testing the effectiveness of teaching methods.",
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
    },
    {
        name: "Ananya",
        age: 29,
        gender: "Female",
        location: "Bengaluru",
        stream: "Software Development",
        hobby: ["reading novels", "gardening", "learning new languages"],
        travelTour: function (place) {
            return `${this.name} dreams to visit ${place} to experience its culture.`;
        },
        parent: {
            mother: { name: "Sushma", age: 60, gender: "Female", occupation: "Retired Librarian" },
            father: { name: "Rajesh", age: 62, gender: "Male", occupation: "Retired Government Officer" },
            pChildren: [
                { childName: "Ananya", childAge: 29, gender: "Female", childHobby: ["reading novels", "gardening", "traveling"] },
                { childName: "Rohan", childAge: 27, gender: "Male", childHobby: ["playing guitar", "swimming", "photography"] }
            ]
        },
        futurePlan: {
            futureDesc: "Ananya dreams of becoming a full-stack developer and eventually starting her own tech company focused on AI and sustainable technology. Her vision is to create innovative solutions that address environmental issues while making technology accessible to all. She hopes her company will empower young developers to explore creative coding techniques and contribute to meaningful projects.",
            futurePlanning: {
                whatisinMind: "Create an eco-tech startup that combines AI innovation with green technology.",
                stepsTaken: [
                    {
                       steps: "Strengthen programming skills in AI and sustainability-focused tech.",
                        requirementsNeeded: "Advanced certifications in AI, participation in hackathons, and collaboration with eco-tech communities."
                    },
                    {
                        steps: "Develop a prototype product showcasing AI-powered solutions for environmental challenges.",
                        requirementsNeeded: "Funding, expert mentors, and access to real-world problem datasets."
                    },
                    {
                        steps: "Pitch the prototype to investors and incubators, starting the first phase of her company.",
                        requirementsNeeded: [
                            {
                                location: "Bengaluru",
                                infrastructure: "Small office space, workstations with high-end computers, and software licenses.",
                                heroProducts: [
                                    {
                                        firstHeroProduct: [
                                            {
                                                heroProductName: "Eco-AI Assistant",
                                                heroProductDesc: "AI-based app for individuals and companies to track and reduce carbon footprints."
                                            },
                                            ["AI Models", "Real-time Data", ["Green Energy Initiatives", "Data Analytics Tools"]]
                                        ]
                                    },
                                    {
                                        secondHeroProduct: [
                                            {
                                                heroProductName: "Green Connect Platform",
                                                heroProductDesc: "A marketplace to connect green tech innovators with potential investors."
                                            },
                                            ["Community Support", "Sustainability NGOs", ["Workshops", "Open Source Tools"]]
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        aboutUs: `Ananya is a tech enthusiast from Bengaluru who combines her love for programming with her passion for environmental conservation. Her journey into software development began in college, where she created a mobile app that monitored air quality. Today, she is recognized for her creative coding solutions and her ability to bring fresh perspectives to real-world problems.`,
        readMore: `When Ananya isn't coding, she enjoys reading historical novels, tending to her garden, or picking up new languages. She believes that personal growth is as important as professional success, which is why she dedicates time to learning and self-improvement. With her dream of starting an eco-tech company, Ananya envisions creating a world where technology and sustainability go hand in hand, offering practical solutions for a greener future.`,
        characterDetails: "This character is a software developer from Bengaluru, passionate about blending technology with environmental conservation. Aspiring to start an eco-tech company, she focuses on AI-driven sustainable solutions. With hobbies like reading novels, gardening, and learning new languages, she believes in balancing personal growth with innovative contributions to a greener future."
    },
    {
        name: "Ishaan",
        age: 30,
        gender: "Male",
        location: "Mumbai",
        stream: "Finance and Investment",
        hobby: ["trekking", "playing chess", "listening to podcasts"],
        travelTour: function (place) {
            return `${this.name} dreams to explore the vibrant culture and scenic beauty of ${place}.`;
        },
        parent: {
            mother: { name: "Lata", age: 55, gender: "Female", occupation: "School Teacher" },
            father: { name: "Suresh", age: 59, gender: "Male", occupation: "Bank Manager" },
            pChildren: [
                { childName: "Ishaan", childAge: 30, gender: "Male", childHobby: ["trekking", "chess", "traveling"] },
                { childName: "Nisha", childAge: 27, gender: "Female", childHobby: ["painting", "singing", "yoga"] }
            ]
        },
        futurePlan: {
            futureDesc: "Ishaan aims to establish his own financial consultancy firm in Mumbai. His goal is to guide startups and small businesses in effective financial planning and investment strategies. He envisions empowering entrepreneurs by providing them with the tools and knowledge needed to secure long-term financial success. Ishaan also dreams of organizing workshops for individuals to understand financial literacy better, bridging the gap between knowledge and action in money management.",
            futurePlanning: {
                whatisinMind: "Start a boutique financial consultancy firm to help startups achieve financial independence and stability.",
                stepsTaken: [
                    {
                       steps: "Gain expertise in finance by working with reputed firms and obtaining advanced certifications.",
                        requirementsNeeded: "Chartered Financial Analyst (CFA) certification, hands-on experience with investment firms, and strong networking in the finance industry."
                    },
                    {
                        steps: "Build a portfolio of successful case studies and testimonials from clients to showcase expertise.",
                        requirementsNeeded: "Projects with startups, financial data analysis, and strategic investment planning."
                    },
                    {
                        steps: "Establish the firm by renting an office in Mumbai, hiring a team of financial experts, and marketing the services.",
                        requirementsNeeded: [
                            {
                                location: "Mumbai",
                                infrastructure: "An office space in a commercial hub, high-speed internet, and financial planning software.",
                                heroProducts: [
                                    {
                                        firstHeroProduct: [
                                            {
                                                heroProductName: "Startup Growth Planner",
                                                heroProductDesc: "A tool designed to map out startup growth strategies using data-driven financial insights."
                                            },
                                            ["Data Visualization Tools", "Client Management Software", ["Cloud Analytics", "Financial Dashboards"]]
                                        ]
                                    },
                                    {
                                        secondHeroProduct: [
                                            {
                                                heroProductName: "Investment Optimizer",
                                                heroProductDesc: "An AI-powered tool to help clients make informed investment decisions based on market trends."
                                            },
                                            ["Algorithmic Trading", "Market Research", ["Risk Assessment Tools", "AI Integration"]]
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        aboutUs: `Ishaan is a dynamic financial advisor from Mumbai who is passionate about helping others achieve their financial goals. Raised in a family that valued education and discipline, Ishaan learned the importance of planning and foresight early in life. His love for numbers and problem-solving naturally led him to a career in finance, where he excels at simplifying complex financial concepts for his clients.`,
        readMore: `Beyond his professional life, Ishaan enjoys trekking in the Western Ghats, playing chess to sharpen his strategic thinking, and listening to inspiring podcasts on entrepreneurship. His dream of starting a financial consultancy stems from his desire to create a lasting impact by empowering businesses and individuals with financial literacy. He firmly believes that knowledge and informed decisions are the keys to success in the fast-paced world of finance.`,
        characterDetails: "This character is a skilled financial advisor from Mumbai with a passion for empowering startups and individuals through effective financial planning. With a vision to start a consultancy firm, he focuses on investment strategies and financial literacy. In his free time, he enjoys trekking, playing chess, and listening to entrepreneurial podcasts."
    },
    {
        name: "Rhea",
        age: 26,
        gender: "Female",
        location: "Delhi",
        stream: "Marketing and Advertising",
        hobby: ["photography", "traveling", "volunteering"],
        travelTour: function (place) {
            return `${this.name} dreams to visit ${place} to capture the essence of its culture through her lens.`;
        },
        parent: {
            mother: { name: "Kiran", age: 54, gender: "Female", occupation: "Nurse" },
            father: { name: "Anil", age: 58, gender: "Male", occupation: "Businessman" },
            pChildren: [
                { childName: "Rhea", childAge: 26, gender: "Female", childHobby: ["photography", "traveling", "volunteering"] },
                { childName: "Aryan", childAge: 23, gender: "Male", childHobby: ["reading", "skateboarding", "music"] }
            ]
        },
        futurePlan: {
            futureDesc: "Rhea has a strong vision of transforming the marketing industry by blending creative design with data-driven strategies. She wants to create an agency that helps brands craft stories that resonate with their audience, using digital and traditional media. Her long-term goal is to bring positive social change through campaigns that highlight environmental issues and promote social responsibility in brands.",
            futurePlanning: {
                whatisinMind: "Build an agency that specializes in purpose-driven marketing campaigns focused on sustainability and social causes.",
                stepsTaken: [
                    {
                       steps: "Build a personal brand by collaborating with influencers and emerging brands to establish credibility.",
                        requirementsNeeded: "Building a social media presence, networking with influencers, and collaborating on projects."
                    },
                    {
                        steps: "Create a portfolio of successful campaigns showcasing creative strategies that blend storytelling with analytics.",
                        requirementsNeeded: "Experience in managing large campaigns, strong communication skills, and an eye for design."
                    },
                    {
                        steps: "Launch a marketing agency with a focus on socially responsible and environmentally conscious branding.",
                        requirementsNeeded: [
                            {
                                location: "Delhi",
                                infrastructure: "A creative office space with brainstorming zones, a photography studio, and video production equipment.",
                                heroProducts: [
                                    {
                                        firstHeroProduct: [
                                            {
                                                heroProductName: "Brand Storytelling Workshops",
                                                heroProductDesc: "Workshops designed to help brands craft authentic stories that align with their values."
                                            },
                                            ["Storytelling", "Brand Alignment", ["Content Creation", "Emotional Branding"]]
                                        ]
                                    },
                                    {
                                        secondHeroProduct: [
                                            {
                                                heroProductName: "Social Impact Campaigns",
                                                heroProductDesc: "Campaigns that encourage brands to adopt sustainable practices and raise awareness about environmental issues."
                                            },
                                            ["Sustainability", "Impact Measurement", ["Green Marketing", "Corporate Social Responsibility"]]
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        aboutUs: `Rhea is a passionate marketer from Delhi who believes in the power of storytelling to drive change. With a background in advertising and a love for photography, she blends creativity with strategy to create impactful campaigns. She’s dedicated to promoting brands that make a positive impact, focusing on sustainability and social issues in her work. Rhea also enjoys traveling to capture the beauty of the world through her camera lens, documenting her journey with every shot.`,
        readMore: `Outside of her marketing career, Rhea is a devoted volunteer and is involved in several initiatives that support underprivileged children. She has traveled across India, capturing the cultural diversity of the country and using her photography to raise awareness about important social causes. Rhea’s dream is to combine her passion for creativity with her desire to create a positive change in the world. She envisions a future where brands are more socially responsible, making the world a better place for all.`,
        characterDetails: "This character is based in Delhi and works in the marketing and advertising field, with a focus on socially responsible campaigns. Her hobbies are centered around photography and travel, and she aims to make a difference through her professional work. Let me know if you want more characters or changes!"
    },
    {
        name: "Karan",
        age: 34,
        gender: "Male",
        location: "Chennai",
        stream: "Film Direction and Production",
        hobby: ["acting", "watching movies", "writing scripts"],
        travelTour: function (place) {
            return `${this.name} dreams of visiting ${place} to immerse himself in its artistic culture and film industry.`;
        },
        parent: {
            mother: { name: "Radha", age: 58, gender: "Female", occupation: "Home Maker" },
            father: { name: "Vikram", age: 60, gender: "Male", occupation: "Retired Engineer" },
            pChildren: [
                { childName: "Karan", childAge: 34, gender: "Male", childHobby: ["acting", "watching movies", "script writing"] },
                { childName: "Siddhi", childAge: 27, gender: "Female", childHobby: ["singing", "traveling", "painting"] }
            ]
        },
        futurePlan: {
            futureDesc: "Karan aspires to become one of the leading directors in the Indian film industry. His vision is to create films that not only entertain but also evoke deep emotions and provoke thought. He aims to direct movies that deal with social issues, blending them with strong narratives and captivating performances. Karan also dreams of mentoring young filmmakers to help them find their voice and navigate the complexities of filmmaking.",
            futurePlanning: {
                whatisinMind: "Direct socially impactful films that inspire change and resonate with diverse audiences.",
                stepsTaken: [
                    {
                       steps: "Develop a unique filmmaking style and approach that combines social commentary with engaging storytelling.",
                        requirementsNeeded: "Formal film education, experience on film sets, and building a network of talented actors and crew members."
                    },
                    {
                        steps: "Produce independent short films to gain recognition and build a portfolio for future projects.",
                        requirementsNeeded: "Funding for independent productions, a dedicated team of collaborators, and distribution platforms for short films."
                    },
                    {
                        steps: "Secure funding and partnerships for feature films with a focus on impactful themes and broad social messages.",
                        requirementsNeeded: [
                            {
                                location: "Chennai",
                                infrastructure: "Film production equipment, a post-production studio, and a team of experienced screenwriters and editors.",
                                heroProducts: [
                                    {
                                        firstHeroProduct: [
                                            {
                                                heroProductName: "Cinematic Storytelling Workshops",
                                                heroProductDesc: "Workshops designed to teach aspiring filmmakers the art of storytelling and filmmaking."
                                            },
                                            ["Directorial Vision", "Storytelling Techniques", ["Character Development", "Cinematic Framing"]]
                                        ]
                                    },
                                    {
                                        secondHeroProduct: [
                                            {
                                                heroProductName: "Film Script Development",
                                                heroProductDesc: "A service to help screenwriters develop their scripts into market-ready feature films."
                                            },
                                            ["Script Consulting", "Character Arcs", ["Plot Structure", "Dialogue Crafting"]]
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        aboutUs: `Karan is an emerging film director and producer from Chennai, deeply passionate about the power of cinema to influence society. Growing up surrounded by stories and films, Karan developed an early interest in acting and filmmaking, which led him to pursue a career in the industry. His films are known for their ability to weave complex social issues into compelling narratives, making him one of the most promising young directors in the Indian film industry.`,
        readMore: `When Karan isn’t working on film sets, he enjoys acting in short films and watching classic movies for inspiration. His interest in scriptwriting has led him to explore themes that focus on human rights, mental health, and social justice. Karan is committed to creating films that are not just for entertainment, but for social change. He dreams of collaborating with like-minded filmmakers globally to create projects that spark important conversations in society.`,
        characterDetails: "This character is focused on the film industry, particularly film direction and production. He aims to make socially conscious films while also mentoring new filmmakers. The future plan includes filmmaking, script development, and workshops for aspiring directors and writers. Let me know if you'd like another or if any adjustments are needed!"
    }
]

export default apiData