import myphoto from "../assets/images/myphoto.png";

export const profile = {
  name: "Mohammad Elzogheir",
  role: "Fresh Graduate in Computer Science",
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
  photo: myphoto,

  services: [
    { title: "Data Engineering", desc: "ETL/ELT, SQL, data modeling, reports." },
    { title: "Web Development", desc: "React + Bootstrap, responsive UI." },
    { title: "Automation", desc: "Scripts to clean data and speed up tasks." }
  ],

  skills: [
    "HTML", "CSS", "JavaScript", "React", "Bootstrap",
    "SQL", "Oracle", "Git", "GitHub",
    "Python (basics)", "Power BI (basics)"
  ],

  education: [
    {
      degree: "B.Sc. Computer Science",
      school: "Al-Zaytoonah University of Jordan",
      period: "2019 – 2024",
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
    }
  ],

  projects: [
    {
      name: "Todo App",
      tagline: "CRUD with localStorage",
      stack: ["React", "Bootstrap"],
      link: "https://github.com/mohammadElzogheir/todo-app"
    },
    {
      name: "Portfolio",
      tagline: "Personal website",
      stack: ["React", "Bootstrap"],
      link: "https://github.com/mohammadElzogheir/portfolio"
    },
    {
      name: "Shop UI",
      tagline: "E-commerce layout",
      stack: ["React"],
      link: ""
    }
  ],

  testimonials: [
    { text: "Great attention to detail.", author: "Sara" },
    { text: "Clean code and good communication.", author: "Omar" }
  ]
};
