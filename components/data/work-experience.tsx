import { Briefcase, Code, Rocket } from "lucide-react";

export const workExperience = [
  {
    time: "Jan 2023 - Present",
    company: "Digital Perspective",
    title: "Senior Frontend Developer",
    icon: <Briefcase className="text-white" size={20} />,
    results: [
      "Led development of 5+ client projects resulting in 40% increase in user engagement",
      "Implemented responsive design systems that improved mobile conversion by 25%",
      "Mentored 3 junior developers and established code review processes",
      "Optimized application performance reducing load times by 60%",
    ],
  },
  {
    time: "Jun 2021 - Dec 2022",
    company: "TechStart Solutions",
    title: "Full Stack Developer",
    icon: <Code className="text-white" size={20} />,
    results: [
      "Built and deployed 8 web applications using React, Node.js, and PostgreSQL",
      "Integrated payment systems processing $50K+ monthly transactions",
      "Developed RESTful APIs serving 10,000+ daily active users",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
  },
  {
    time: "Jan 2020 - May 2021",
    company: "Freelance",
    title: "Web Developer",
    icon: <Rocket className="text-white" size={20} />,
    results: [
      "Delivered 15+ custom websites for small businesses and startups",
      "Increased client online presence by average of 200% through SEO optimization",
      "Managed full project lifecycle from requirements gathering to deployment",
      "Built e-commerce solutions generating $100K+ in client revenue",
    ],
  },
];
