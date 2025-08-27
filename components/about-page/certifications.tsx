import React from 'react';
import Header from '../header';
import { HoverEffect } from '../ui/card-hover-effect';
import ibmLogo from "@/public/ibmCertification.png";
import freecodecampLogo from "@/public/freecodecampCertification.png";

const certifications = [
  {
    title: "IBM - Cloud and Computing Fundamentals",
    description:
      "This credential earner demonstrates knowledge of cloud computing, including cloud services, deployment models, virtualization, orchestration, and cloud security. The individual is aware of cloud benefits for users and businesses. The individual has a conceptual understanding of how to create a container, deploy a web app to the cloud, and analyze security in a simulated environment. The earner is aware of the job outlook in cloud computing and the skills required for success in various roles.",
    logo: ibmLogo,
    link: "http://credly.com/badges/7f62e839-2355-4417-847e-341d32279538/linked_in_profile",
  },
  {
    title: "FreeCodeCamp - Frontend Development Libraries",
    description: "Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry. In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass. Later, you'll build a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.",
    logo: freecodecampLogo,
    link: "https://www.freecodecamp.org/certification/vineetp/front-end-development-libraries",
  },
  {
    title: "FreeCodeCamp - JavaScript Algorithms and Data Structures",
    description: "Developers use HTML and CSS to control the content and styling of a page. And they use JavaScript to make that page interactive. In this JavaScript Algorithm and Data Structures Certification, you'll learn the JavaScript fundamentals like variables, arrays, objects, loops, functions, the DOM and more. You'll also learn about Object Oriented Programming (OOP), Functional Programming, algorithmic thinking, how to work with local storage, and how to fetch data using an API.",
    logo: freecodecampLogo,
    link: "https://www.freecodecamp.org/certification/vineetp/javascript-algorithms-and-data-structures",
  },
  {
    title: "Microsoft - Foundational C#",
    description: "This course offers a comprehensive introduction to C# programming, covering its core concepts, syntax, and practical application in software development. Through hands-on exercises and projects, you will learn the fundamentals of C#, including variables, data types, control structures, and object-oriented programming principles. By the end of this course, you will have gained the practical skills and knowledge needed to confidently leverage C# for building applications.",
    logo: ibmLogo,
    link: "https://www.freecodecamp.org/certification/vineetp/foundational-c-sharp-with-microsoft",
  },
  {
    title: "FreeCodeCamp - Responsive Web Design",
    description: "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a quiz site. Finally, you'll learn how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.",
    logo: freecodecampLogo,
    link: "https://www.freecodecamp.org/certification/vineetp/responsive-web-design",
  },
];

export default function Certifications() {
  return (
    <div className="relative flex flex-col w-full justify-center bg-#262626">
      <Header 
        heading="My Certifications" 
        subHeading="Proof of the" 
        coloredText="grind." 
      />
      <HoverEffect items={certifications} />
    </div>
  )
};
