import { Award, Heart, Users } from "lucide-react";

export const volunteerExperience = [
  {
    time: "Mar 2022 - Present",
    company: "Code for Good Brazil",
    title: "Technical Lead",
    icon: <Heart className="text-white" size={20} />,
    results: [
      "Led team of 12 volunteers building apps for 3 local NGOs",
      "Developed donation platform that raised R$50,000+ for children's education",
      "Organized monthly coding workshops for 100+ underprivileged youth",
      "Mentored 20+ aspiring developers through career transition programs",
    ],
  },
  {
    time: "Sep 2021 - Feb 2022",
    company: "Digital Inclusion Project",
    title: "Frontend Developer",
    icon: <Users className="text-white" size={20} />,
    results: [
      "Built accessible learning platform serving 500+ elderly users",
      "Implemented multilingual support for Portuguese and Spanish speakers",
      "Created interactive tutorials reducing learning curve by 40%",
      "Collaborated with UX researchers to improve user experience",
    ],
  },
  {
    time: "Jan 2021 - Aug 2021",
    company: "Open Source Contributor",
    title: "Community Developer",
    icon: <Award className="text-white" size={20} />,
    results: [
      "Contributed to 8 open source projects with 500+ GitHub stars",
      "Fixed 25+ bugs and implemented 10+ new features",
      "Reviewed 100+ pull requests and mentored new contributors",
      "Maintained documentation for developer onboarding processes",
    ],
  },
];
