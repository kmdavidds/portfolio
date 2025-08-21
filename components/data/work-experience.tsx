import { Book, BookUser, Briefcase, Code, Rocket, Shield, TreePine } from "lucide-react";

export const workExperience = [
  {
    time: "Apr 2025 - Present",
    company: "PolisiMuda.com - Singaraja, Bali",
    title: "Fullstack Developer",
    icon: <Shield className="text-white" size={20} />,
    results: [
      "Developed and maintained 30+ RESTful, stateless API endpoints for a scalable education and testing platform using Go Fiber, PostgreSQL, and PGX, improving system structure and reducing integration friction by 33% through the use of back-end best practices and design patterns.",
      "Built a React admin dashboard and user-facing front-end with 25+ unique pages, utilizing cookies and local storage for seamless session and token management, reducing front-end load times by 30%.",
      "Implemented a live test feature supporting 100+ concurrent users, including a real-time scoreboard updating every 5 seconds, enhancing engagement and delivering instant performance feedback.",
      "Enabled bulk test creation via CSV uploads, decreasing admin setup time by 70%.",
      "Delivered end-to-end development independently, maintaining rapid delivery cycles with a 95% on-time release rate, while coordinating directly with stakeholders.",
    ],
  },
  {
    time: "Jul 2024 - Oct 2024",
    company: "Intrivia - Kota Malang, East Java",
    title: "Back-end Developer",
    icon: <Book className="text-white" size={20} />,
    results: [
      "Developed the back-end system for INTRIVIA 2024, supporting 500+ active users during the event using Go Fiber, PostgreSQL, and GORM.",
      "Implemented JWT authentication, assignment submission, and an admin panel, reducing manual task management by 75%.",
      "Ensured 99% uptime during peak traffic by actively monitoring and optimizing Docker containers.",
    ],
  },
  {
    time: "Jun 2024 - Nov 2024",
    company: "Ormaba - Kota Malang, East Java",
    title: "Fullstack Developer",
    icon: <Rocket className="text-white" size={20} />,
    results: [
      "Developed a fullstack web app for 125+ active users, with UI/UX support from 1 designer, used for onboarding and task tracking.",
      "Created 14+ back-end API endpoints with role-based access (user, admin, mentor) using Go Fiber, PostgreSQL, and GORM, preventing 99% of unauthorized access attempts.",
      "Built 16+ front-end pages using React, MUI, and React Query, improving page load speed and reducing user navigation time by 40%.",
      "Completed 10+ sprints over 5 months, achieving 100% on-time delivery despite frequent mid-sprint changes from stakeholders.",
    ],
  },
  {
    time: "May 2024 - Sep 2024",
    company: "Abdimasa - Kota Malang, East Java",
    title: "Back-end Developer",
    icon: <TreePine className="text-white" size={20} />,
    results: [
      "Designed and developed 25+ REST API endpoints using Go Fiber, PostgreSQL, and GORM, for a village-based platform, managing users, tourism, business data, suggestions, and admin tools.",
      "Secured endpoints with JWT and role-based access, reducing unauthorized access attempts by 99%.",
    ],
  },
];
