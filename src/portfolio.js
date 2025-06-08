/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Reyansh Kaushik",
  title: "Hi all, I'm Reyansh",
  subTitle: emoji(
    "A passionate Data Analyst and QA Enthusiast 🚀 with hands-on experience in analyzing real-world data, creating interactive dashboards, ensuring software quality through debugging and testing, and applying cybersecurity practices using Python, SQL, Power BI, and software testing tools."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/reyansh8104/",
  linkedin: "https://www.linkedin.com/in/reyansh-kaushik-b64608249/",
  gmail: "kaushikreyansh81@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA ANALYST AND QA ENTHUSIAST WHO LOVES DIGGING INTO DATA AND BREAKING BUGS",
  skills: [
    emoji("⚡ Perform data cleaning, preprocessing, and analysis to extract actionable insights"),
    emoji("⚡ Create interactive dashboards and reports using Power BI and Python libraries"),
    emoji("⚡ Conduct software testing, debugging, and validation to ensure product quality"),
    emoji("⚡ Use cybersecurity skills to spot and fix threats")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "data analysis",
    fontAwesomeClassname: "fas fa-chart-line"  // line chart icon for data analysis
  },
  {
    skillName: "power bi",
    fontAwesomeClassname: "fas fa-chart-bar"  // bar chart as closest to Power BI
  },
  {
    skillName: "tableau",
    fontAwesomeClassname: "fas fa-table"  // table icon for Tableau
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Microsoft Office",
    fontAwesomeClassname: "fas fa-file-alt"  // generic file icon
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "HTML",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "Manual Testing",
    fontAwesomeClassname: "fas fa-vials"  // flask icon as symbolic of testing
  },
  {
    skillName: "Cybersecurity",
    fontAwesomeClassname: "fas fa-shield-alt"
  }
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KIET Group of Institutions",
      logo: require("./assets/images/aa.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering with specialization in AI & ML",
      duration: "September 2022 - May 2026",
      desc: "Completed coursework in Data Structures, Algorithms, Database Systems, and Cybersecurity. Developed two innovative software solutions currently under patent review."
    },
    {
      schoolName: "S.S.Children Academy",
      logo: require("./assets/images/tl96rbo503k4g84k8c044gwscsg8400.jpg"),
      subHeader: "CBSE - 12th with 85.2% and CBSE - 10th with 93.4%",
      duration: "September 2007 - April 2022",
      desc: "Head Boy – S.S. Children Academy",
    }
  ]
};

// Your top 3 proficient stacks/tech experience


const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Quality Assurance",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend Web Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Oasis Infobyte",
      companylogo: require("./assets/images/ai.jpg"), 
      date: "May 2025 - June 2025",
      desc: "Performed data cleaning and preprocessing to ensure data accuracy and readiness. Created insightful data visualizations and dashboards using Power BI to communicate analytical findings effectively."
    },
    {
      role: "Cyber Security Intern",
      company: "UP Police Internship Moradabad",
      companylogo: require("./assets/images/ap.jpg"), 
      date: "Jan 2025 - Mar 2025",
      desc: "Analyzed digital evidence and online activities to investigate financial fraud and cybercrimes. Collaborated with cybersecurity teams to enhance data protection and support fraud detection."
    },
    {
      role: "Mentor and Contributor",
      company: "Open Source Contribution (Remote)",
      companylogo: require("./assets/images/open.webp"), 
      date: "May 2024 - Oct 2024",
      desc: "Contributed to GSSOC’24 under web development projects, gaining experience as a full-stack developer. Participated in Hacktoberfest, completing four pull requests on web development projects."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT SOLVE REAL-WORLD PROBLEMS USING DATA, AR, AND VISUALIZATION",
  projects: [
    {
      image: require("./assets/images/Screenshot 2025-05-12 233348.png"), 
      projectName: "Data Visualization Projects – Power BI and Tableau",
      projectDesc:
        "Developed interactive dashboards and reports to visualize key business metrics, uncover trends, and support data-driven decision-making using real-world datasets.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/reyansh8104/rkPowerBI_pj3" // 
        }
      ]
    },
    {
      image: require("./assets/images/vayu.png"), 
      projectName: "AquaVayuCheck",
      projectDesc:
        "Tracked AQI and WQI data to ensure timely updates, generated actionable insights, and triggered SOS alerts during critical conditions. Designed interactive dashboards for environmental trend analysis and informed decision-making.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/reyansh8104/AquaVayuCheck" 
        }
      ]
    },
    {
      image: require("./assets/images/91c2af9c-d799-4764-a063-6d3094ffcefd.jpeg"), 
      projectName: "EduQuestAR",
      projectDesc:
        "Transforms traditional textbooks by overlaying interactive AR content on images. Built using HTML, CSS, JavaScript, React, and Unity to deliver a cross-platform AR learning experience.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://devfolio.co/projects/eduquest-cfe8" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Patents Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",
    resumeLink: "https://drive.google.com/file/d/1YqGolVTLVtO1JLG3PCHdiX4kmWqONZF4/view?usp=sharing",  // <-- add your resume URL here
  // Please Provide with Your Podcast embeded Link
  display: true// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 94576 74205",
  email_address: "kaushikreyansh81@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};