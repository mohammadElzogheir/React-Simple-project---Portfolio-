import myPhoto from "../assets/images/myphoto.png";

export const profile = {
  name: "Mohammad Elzogheir",
  role: "Fresh Graduate in Artificial Intelligence",
  summary:
    "I’m passionate about Data Engineering, Web Development, and Artificial Intelligence. I enjoy solving problems, building useful applications, and continuously learning new technologies.",

  bullets: [
    "Trained at the Central Bank of Jordan in cybersecurity.",
    "Completed courses in Oracle SQL, Full Stack Development, and Data Analysis.",
    "Currently building projects that combine data engineering and web development."
  ],

  value:
    "My goal is to build efficient data-driven solutions that create real value for businesses.",

  quick: [
    "🎓 Graduated July 2024 – Computer Science",
    "🌍 Based in Amman, Jordan",
    "🌐 Interested in AI, Cloud, and Data Engineering"
  ],

  links: {
    github: "https://github.com/mohammadElzogheir",
    linkedin: "https://www.linkedin.com/in/mohammad-elzogheirr",
    cv: "/myResume/Mohammad_Elzogheir_CV.pdf" 
  },

  photo: myPhoto,

  services: [
    { title: "Data Engineering", desc: "ETL/ELT, SQL, data modeling, reports." },
    { title: "Web Development", desc: "React + Bootstrap, responsive UI." },
    { title: "Automation", desc: "Scripts to clean data and speed up tasks." }
  ],

  skills: [
  "HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS",
  "Next.js (basics)",
  "Java", "SQL", "Oracle", "PostgreSQL (basics)", "MongoDB (basics)",
  "Git", "GitHub", "VS Code", "Docker (basics)", "Power BI (basics)",
  "Python", "Problem Solving", "Teamwork", "Communication"
]

,

  education: [
    {
      degree: "B.Sc. Artificial Intelligence",
      school: "Al-Zaytoonah University of Jordan",
      period: "2020 – 2024",
      note: "Graduation: July 2024"
    }
  ],

  experience: [
    {
      title: "Trainee (Cybersecurity)",
      company: "Central Bank of Jordan",
      period: "Mar 2024 – May 2024",
      points: [
        "Supported security monitoring and learned SIEM basics.",
        "Documented incidents and improved response checklists."
      ]
    },
    {
      title: "Full-Stack Trainee",
      company: "Youth Creativity Forum – Ministry Program",
      period: "Jul 2025 – Sep 2025 (ongoing)",
      points: [
        "Built React components and REST API exercises.",
        "Practiced SQL/Oracle and simple dashboards."
      ]
    },
    {
      title: "Oracle SQL & Developer Training",
      company: "Tuned Applications – Amman, Jordan",
      period: "Feb 2025 – Aug 2025",
      points: [
        "Completed SQL, PL/SQL, Forms, and Reports.",
        "Worked on database queries and reporting tools."
      ]
    },
    {
      title: "Data Science Fundamentals",
      company: "Coursera",
      period: "During University",
      points: [
        "Introduction to Data Science concepts.",
        "Learned basics of data analysis and visualization."
      ]
    }
  ],

  projects: [
    {
  name: "Todo App",
  tagline: "CRUD with localStorage",
  stack: ["JavaScript", "HTML", "CSS"],
  link: "https://github.com/mohammadElzogheir/JavaScript-Final-Project-List-to-do-"
},
{
  name: "Portfolio",
  tagline: "Personal website",
  stack: ["React", "Bootstrap"],
  link: "https://github.com/mohammadElzogheir/Capstone-Project-Create-portfolio"
}
,
    {
  name: "Learning Platform UI",
  tagline: "Online courses platform (similar to Coursera / Udemy)",
  stack: ["React", "Bootstrap", "API Integration"],
  link: "" 
    }

  ],

  
};
