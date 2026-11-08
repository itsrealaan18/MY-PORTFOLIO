/* =====================================================================
   EDIT THIS FILE to customise the whole portfolio.
   Everything you see on the site (name, photo, skills, projects,
   timeline, services, social links) is rendered from this object.
   ===================================================================== */
window.PORTFOLIO = {
  profile: {
    name: "GHANCHI MOH.AAN",
    shortName: "GHANCHI",
    logo: "GM",
    photo: "assets/profile.webp",          // replace with your own image path
    resume: "assets/resume.pdf",           // put your resume PDF here
    title: "Full Stack Developer | UI/UX Designer | Programmer",
    roles: ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Creative Programmer", "Lifelong Learner"],
    intro:
      "I design and build fast, accessible and good-looking web experiences, from pixel-level interfaces to the APIs and databases behind them.",
    location: "Your City, Your Country",
    email: "you@example.com"
  },

  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    instagram: "https://www.instagram.com/yourusername",
    email: "mailto:you@example.com"
  },

  // GitHub username used for the live API section. Leave "" to hide live data.
  githubUsername: "yourusername",

  about: {
    paragraphs: [
      "I'm a computer-science student who loves turning ideas into polished, working products. I enjoy the whole journey: sketching the interface in Figma, structuring the data, writing the API and shipping the final build.",
      "I learn by building. Each project I take on pushes me into something new, whether that is authentication, payments, state management or deployment."
    ],
    cards: [
      { icon: "🎓", title: "Education", text: "B.Tech / B.E. in Computer Science (edit in data.js)" },
      { icon: "💡", title: "Technical Interests", text: "Web apps, UI engineering, AI/ML, cloud and security basics" },
      { icon: "🎯", title: "Career Goals", text: "Grow into a senior full-stack engineer building products people enjoy using" },
      { icon: "⚡", title: "Strengths", text: "Fast learner, detail-oriented, clear communicator, consistent problem solver" },
      { icon: "🧠", title: "My Approach", text: "Plan the data first, build small, test early, refine the UI, then polish and optimise" }
    ]
  },

  /* ---------- SKILLS ----------
     [name, level 0-100]. Level 0 hides the skill.
     Levels below are STARTING VALUES, not claims. Set your honest level,
     or use the "Edit skills" button on the live site (saved in your browser)
     to adjust/remove, then copy the final values back here.
     Rough guide: 0-35 Learning · 36-60 Intermediate · 61-80 Proficient · 81+ Advanced */
  skills: [
    { cat: "Programming Languages", icon: "💻", items: [["C",60],["C++",55],["Java",60],["Python",65],["JavaScript",70],["TypeScript",40],["PHP",35],["SQL",60],["HTML5",80],["CSS3",75]] },
    { cat: "Frontend Development", icon: "🎨", items: [["HTML",80],["CSS",75],["JavaScript",70],["React.js",60],["Next.js",35],["Bootstrap",60],["Tailwind CSS",55],["Responsive Web Design",75],["DOM Manipulation",70],["UI/UX Design",60],["Framer Motion",30],["GSAP",35]] },
    { cat: "Backend Development", icon: "🛠️", items: [["Node.js",55],["Express.js",55],["Java Spring Boot",30],["PHP",35],["Django",30],["Flask",35],["REST APIs",60],["GraphQL",25],["Authentication",50],["Authorization",45],["CRUD Operations",70]] },
    { cat: "Database Management", icon: "🗄️", items: [["MySQL",60],["MongoDB",55],["PostgreSQL",35],["SQLite",40],["Firebase",40],["Supabase",30],["Database Design",55],["Database Normalization",55]] },
    { cat: "Full Stack Development", icon: "🧩", items: [["MERN Stack",55],["MEAN Stack",30],["Full Stack Web Development",55],["Client-Server Architecture",60],["API Integration",60],["MVC Architecture",55],["Server-Side Rendering",30],["State Management",50],["Deployment",45]] },
    { cat: "Data Structures & Algorithms", icon: "🌲", items: [["Arrays",70],["Linked Lists",60],["Stacks",65],["Queues",65],["Trees",55],["Graphs",45],["Hashing",55],["Searching Algorithms",65],["Sorting Algorithms",65],["Recursion",60],["Dynamic Programming",40],["Greedy Algorithms",45],["Graph Algorithms",40],["Time Complexity",60],["Space Complexity",55]] },
    { cat: "Computer Science Fundamentals", icon: "🧬", items: [["Object-Oriented Programming",65],["Operating Systems",50],["Computer Networks",50],["Database Management Systems",60],["Software Engineering",55],["Problem Solving",70],["Algorithm Design",55]] },
    { cat: "AI & Machine Learning", icon: "🤖", items: [["Python for AI",50],["Machine Learning Fundamentals",45],["Deep Learning Fundamentals",35],["Artificial Intelligence",40],["Data Analysis",45],["NumPy",50],["Pandas",50],["Matplotlib",45],["Scikit-learn",40],["TensorFlow",35],["PyTorch",25],["OpenCV",30],["Generative AI",40],["Prompt Engineering",55],["AI API Integration",45]] },
    { cat: "Mobile App Development", icon: "📱", items: [["Android Development",35],["Java",60],["Kotlin",20],["React Native",25],["Flutter",20],["Firebase Integration",35],["Mobile UI Design",45]] },
    { cat: "UI/UX & Design", icon: "✨", items: [["Figma",60],["Adobe Photoshop",45],["Adobe Illustrator",30],["Canva",70],["Wireframing",60],["Prototyping",55],["User Research",40],["Responsive UI Design",70],["Design Systems",40],["Accessibility",45]] },
    { cat: "Cloud & DevOps", icon: "☁️", items: [["AWS",25],["Microsoft Azure",20],["Google Cloud",20],["Docker",30],["Kubernetes",15],["CI/CD",30],["Linux",50],["Git",70],["GitHub",70],["GitLab",35],["Vercel",55],["Netlify",55],["Render",45]] },
    { cat: "Cybersecurity Fundamentals", icon: "🛡️", items: [["Network Security",30],["Web Security",40],["OWASP Fundamentals",35],["Authentication Security",40],["Encryption Fundamentals",35],["Ethical Hacking Fundamentals",25]] },
    { cat: "Development Tools", icon: "🧰", items: [["Visual Studio Code",85],["IntelliJ IDEA",50],["Eclipse",45],["Postman",65],["Git",70],["GitHub",70],["npm",65],["Vite",50],["Webpack",30],["Chrome DevTools",65],["Linux Terminal",50]] },
    { cat: "Soft Skills", icon: "🤝", items: [["Communication",75],["Teamwork",80],["Leadership",65],["Problem Solving",75],["Critical Thinking",70],["Time Management",65],["Creativity",80],["Adaptability",80],["Continuous Learning",90]] }
  ],

  /* ---------- PROJECTS ----------
     image: path to a screenshot (e.g. "assets/shop.png"). Leave "" for a generated cover. */
  projects: [
    { title: "E-Commerce Website", image: "", hue: 350,
      desc: "Full-stack store with product listings, search, shopping cart, user authentication and a checkout interface. Roadmap: payment integration, inventory management and personalised recommendations.",
      stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce", demo: "#",
      details: "Built with a React frontend and a Node/Express REST API on MongoDB. Features: product catalogue with search, cart state management, JWT authentication and a checkout flow. Next steps: payment gateway, stock tracking and a recommendation engine." },
    { title: "Personal Portfolio Website", image: "", hue: 0,
      desc: "Animated, fully responsive personal portfolio with a dark cinematic theme.",
      stack: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/yourusername/portfolio", demo: "#",
      details: "This site: data-driven rendering, scroll animations, particle background, editable skills and a working contact form." },
    { title: "Wireless Mobile Charger", image: "", hue: 215,
      desc: "College engineering project: an inductive charger built on Qi wireless-charging technology.",
      stack: ["Electronics", "Wireless Charging", "Qi Technology"],
      github: "#", demo: "#",
      details: "Designed and assembled a transmitter/receiver coil pair following the Qi standard. Add your measurements, circuit diagram and results here." },
    { title: "Student Management System", image: "", hue: 275,
      desc: "Desktop application for managing student records, registration and course data.",
      stack: ["Java", "MySQL"],
      github: "https://github.com/yourusername/student-management", demo: "#",
      details: "Java application with JDBC connectivity to MySQL. Supports add, update, search and delete of student records with validation." },
    { title: "AI Image Classification", image: "", hue: 160,
      desc: "Neural-network model that classifies images and predicts labels for new inputs.",
      stack: ["Python", "Machine Learning", "TensorFlow"],
      github: "https://github.com/yourusername/image-classifier", demo: "#",
      details: "Trained a convolutional network on an image dataset with TensorFlow/Keras, evaluated accuracy and built a small prediction script. Add your dataset and accuracy here." },
    { title: "Weather Application", image: "", hue: 195,
      desc: "Real-time weather information for any city using a public weather API.",
      stack: ["JavaScript", "API Integration"],
      github: "https://github.com/yourusername/weather-app", demo: "#",
      details: "Fetches current conditions and forecast from a weather API, with city search and error handling." },
    { title: "Calculator Application", image: "", hue: 30,
      desc: "Interactive calculator with a modern, keyboard-friendly interface.",
      stack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/calculator", demo: "#",
      details: "Pure front-end calculator with keyboard input, history and a responsive layout." }
  ],

  /* ---------- EXPERIENCE & EDUCATION TIMELINE ----------
     Replace the sample entries with your real ones. */
  timeline: [
    { type: "Education", period: "20XX – Present", title: "B.Tech in Computer Science", place: "Your College / University", text: "Specialisation, CGPA and academic achievements go here." },
    { type: "Coursework", period: "Ongoing", title: "Relevant Coursework", place: "", text: "Data Structures, DBMS, Operating Systems, Computer Networks, OOP, Software Engineering, Machine Learning." },
    { type: "Internship", period: "20XX", title: "Internship Title", place: "Company Name", text: "What you built, the tools you used and the outcome." },
    { type: "Certification", period: "20XX", title: "Certification Name", place: "Issuing Organisation", text: "Short description and credential link." },
    { type: "Hackathon", period: "20XX", title: "Hackathon Name", place: "Organiser", text: "Your team, project and result." },
    { type: "Workshop", period: "20XX", title: "Workshop / Technical Event", place: "Organiser", text: "What you learned or presented." }
  ],

  coding: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "🐙" },
    { name: "LeetCode", url: "https://leetcode.com/yourusername", icon: "🧮" },
    { name: "HackerRank", url: "https://www.hackerrank.com/yourusername", icon: "🟩" },
    { name: "CodeChef", url: "https://www.codechef.com/users/yourusername", icon: "👨‍🍳" },
    { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/yourusername", icon: "🌿" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yourusername", icon: "💼" }
  ],

  services: [
    ["🌐", "Website Development", "Fast, modern websites built from scratch."],
    ["🖼️", "Frontend Development", "Pixel-accurate, animated interfaces in React or vanilla JS."],
    ["⚙️", "Backend Development", "Secure REST APIs with Node.js and Express."],
    ["🧱", "Full Stack Development", "End-to-end products from database to UI."],
    ["🎨", "UI/UX Design", "Wireframes, prototypes and design systems in Figma."],
    ["📐", "Responsive Website Design", "Layouts that work on phones, tablets and desktops."],
    ["🚀", "Web Application Development", "Dashboards, stores and tools with real functionality."],
    ["🗃️", "Database Development", "Schema design, queries and normalisation."],
    ["⏱️", "Website Optimization", "Performance, SEO and accessibility improvements."],
    ["👤", "Portfolio Website Development", "Personal sites that make you stand out."]
  ]
};
