// Student Portfolio Data
const studentData = {
  // Personal Information
  personal: {
    name: "Shreeya Shrestha",
    title: "Computer Science Student",
    description:
      "Passionate about creating innovative solutions through code. Currently pursuing my degree in Computer Science with a focus on web development and artificial intelligence.",
    profileImage: "/placeholder.svg?height=300&width=300",
    email: "shreeyastha72@email.com",
    phone: "9765006016",
    location: "lokanthali,bhaktapur",
    website: "www.shreeya.dev",
  },

  // Social Links
  social: {
    github: "https://github.com/shreeyaaaa22",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    instagram: "https://instagram.com/shreeya_xtha_",
  },

  // About Section
  about: {
    description:
      "I'm a dedicated Computer Science student with a passion for technology and innovation. My journey in programming started during high school, and since then, I've been constantly learning and exploring new technologies. I enjoy solving complex problems and creating user-friendly applications that make a difference in people's lives.",
    quickFacts: [
      "mobile chalauna ma 1 number",
      "i can laugh anytime at any situation",
      "i can dance",
      
    ],
    stats: {
      projectsCount: 15,
      experienceYears: 3,
      skillsCount: 12,
    },
  },

  // Education
  education: [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Science in Computer Science",
      institution: "swastik collage",
      description:
        "Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Machine Learning, Web Development. Current GPA: 3.8/4.0",
    },
    {
      year: "2020 - 2022",
      degree: "Associate Degree in Mathematics",
      institution: "Community College of San Francisco",
      description:
        "Completed foundational mathematics and science courses. Graduated Summa Cum Laude with a 3.9 GPA. Active member of the Math Club and Programming Society.",
    },
    {
      year: "2018 - 2022",
      degree: "High School Diploma",
      institution: "Lincoln High School",
      description:
        "Graduated as Valedictorian. Captain of the Robotics Team, President of Computer Science Club. Winner of State Programming Competition 2021.",
    },
  ],

  // Skills
  skills: {
    "Programming Languages": {
      icon: "💻",
      skills: ["JavaScript", "Python", "Java", "C++", "TypeScript", "SQL"],
    },
    "Web Development": {
      icon: "🌐",
      skills: ["React", "Node.js", "HTML5", "CSS3", "Express.js", "MongoDB"],
    },
    "Tools & Technologies": {
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "Firebase", "VS Code", "Linux"],
    },
    "Design & UI/UX": {
      icon: "🎨",
      skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Responsive Design",
        "Tailwind CSS",
      ],
    },
  },

  // Projects
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce web application built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      icon: "🛒",
      github: "https://github.com/alexjohnson/ecommerce-platform",
      demo: "https://ecommerce-demo.alexjohnson.dev",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Socket.io", "Vuetify"],
      icon: "📋",
      github: "https://github.com/alexjohnson/task-manager",
      demo: "https://tasks.alexjohnson.dev",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts using multiple APIs.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      icon: "🌤️",
      github: "https://github.com/alexjohnson/weather-app",
      demo: "https://weather.alexjohnson.dev",
    },
    {
      title: "Machine Learning Classifier",
      description:
        "A machine learning project that classifies images using convolutional neural networks. Includes data preprocessing and model evaluation.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      icon: "🤖",
      github: "https://github.com/alexjohnson/ml-classifier",
      demo: "https://ml-demo.alexjohnson.dev",
    },
    {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.",
      technologies: ["React", "D3.js", "Express.js", "PostgreSQL"],
      icon: "📊",
      github: "https://github.com/alexjohnson/social-dashboard",
      demo: "https://dashboard.alexjohnson.dev",
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "A React Native mobile app for fitness tracking with workout logging, progress visualization, and social sharing features.",
      technologies: ["React Native", "Redux", "SQLite", "Expo"],
      icon: "💪",
      github: "https://github.com/alexjohnson/fitness-tracker",
      demo: "https://fitness.alexjohnson.dev",
    },
  ],

  // Contact Information
  contact: {
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    availability: "Available for internships and part-time opportunities",
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = studentData;
}
