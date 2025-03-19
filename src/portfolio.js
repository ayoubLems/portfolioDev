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
  username: "Ayoub Lemsoudi",
  title: "Bonjour, je suis Ayoub",
  subTitle: emoji(
    "Développeur Backend Java passionné 🚀 avec une expérience dans la conception d'API, l'optimisation des performances et l'automatisation des processus métier."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1ad54nPwQxTIQOSKmuZ__669CTV9IFOTL", // Remplace par le lien vers ton CV
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ayoubLems",
  linkedin: "https://www.linkedin.com/in/ayoub-lemsoudi-597a85201/",
  gmail: "lemsoudi.pro@gmail.com",

  // Instagram, Twitter, gitlab, facebook, medium, stackoverflow and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR BACKEND SPÉCIALISÉ EN JAVA ET SPRING BOOT",
  skills: [
    emoji("⚡ Conception et développement d'API RESTful avec Spring Boot."),
    emoji("⚡ Optimisation des performances et de la maintenabilité du code."),
    emoji("⚡ Collaboration en méthodologie Agile avec Jira et Git.")
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Institut Mines-Télécom Nord Europe",
      logo: require("./assets/images/imtLogo.png"),
      subHeader:
        "Diplôme d'ingénieur en Génie Logiciel et Systèmes d'Information",
      duration: "2022 – 2024",
      desc: "Spécialisation en développement backend et gestion de projets logiciels."
    },
    {
      schoolName: "École Nationale Supérieure des Mines de Rabat",
      logo: require("./assets/images/minesRabatLogo.jpeg"),
      subHeader: "Diplôme d'ingénieur en Management des Systèmes d'Information",
      duration: "2020 – 2024",
      desc: "Formation en gestion des systèmes d'information et développement logiciel."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Java", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Angular",
      progressPercentage: "60%"
    },
    {
      Stack: "Base de donnée",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Développeur Full Stack Java/Angular (Freelance)",
      company: "Freelance",
      companylogo: require("./assets/images/LogoFreelancee.jpeg"),
      date: "Octobre 2024 – Présent",
      desc: "Développement d’une application web pour la gestion des réservations d’hôtel.",
      descBullets: [
        "Création d'un système de gestion des chambres, des disponibilités et des réservations pour un hôtel de 100 chambres.",
        "Implémentation d’un système de notifications automatiques par e-mail pour la confirmation des réservations, ce qui a augmenté le taux de réservation de 15%.",
        "Développement de l'application en utilisant Java (Spring Boot) pour le backend et Angular pour le frontend, assurant une gestion fluide de l'application."
      ]
    },
    {
      role: "Développeur Backend Java",
      company: "Sii",
      companylogo: require("./assets/images/siiLogo.jpg"),
      date: "Mars 2024 – Septembre 2024 (6 mois)",
      desc: "Développement de solutions logicielles pour la gestion des échanges de matériel entre les différentes business units de LEROY MERLIN.",
      descBullets: [
        "Création d'API REST pour la gestion des contacts dans un environnement multi-schémas, avec une gestion de plus de 100 000 contacts.",
        "Optimisation de la performance du système, réduction du temps de réponse des API de 30% grâce à l'utilisation de Spring Boot et PostgreSQL.",
        "Amélioration de la maintenabilité du code et réduction des bugs de production de 40% en utilisant SonarQube pour l'analyse de code.",
        "Collaboration en méthodologie Agile avec Jira, gestion de sprints de 2 semaines, livraison continue."
      ]
    },
    {
      role: "Développeur Applications Métier",
      company: "LAFARGE",
      companylogo: require("./assets/images/holcim-lafarge.jpeg"),
      date: "Avril 2023 – Septembre 2023 (5 mois)",
      desc: "Développement d'un système de gestion de catalogues de formules/matières premières pour le laboratoire de Lafarge.",
      descBullets: [
        "Création d'API REST pour la gestion des formules et des mélanges utilisés en laboratoire, permettant de gérer plus de 2000 formules.",
        "Optimisation des performances de traitement des données, réduisant le temps de calcul des formules de 25%.",
        "Travail en méthode agile (Scrum) avec Jira pour la gestion des tâches et des sprints, ce qui a permis d'améliorer la livraison des fonctionnalités de 15%."
      ]
    },
    {
      role: "Concepteur et Développeur d'Outils Web",
      company: "ATOS",
      companylogo: require("./assets/images/LogoAtos.jpg"),
      date: "Mai 2022 – Août 2022 (3 mois)",
      desc: "Conception et mise en œuvre d'une application web pour le suivi et la gestion de projets de développement chez CDG Capital.",
      descBullets: [
        "Conception et mise en œuvre d’une application web pour le suivi et la gestion de plus de 50 projets clients en parallèle.",
        "Optimisation de l'interface utilisateur, permettant une réduction du temps de gestion de projet de 20%.",
        "Collaboration avec des équipes multidisciplinaires pour intégrer les besoins des utilisateurs finaux et optimiser les fonctionnalités."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "QUELQUES PROJETS SUR LESQUELS J'AI TRAVAILLÉ",
  projects: [
    {
      image: require("./assets/images/forestFireLogo.png"), // Remplace par le chemin de l'image du projet
      projectName: "PropagationFeuForet",
      projectDesc:
        "Simulation de la propagation d'un feu de forêt sur une grille. Ce projet met en œuvre une modélisation discrète de la propagation du feu, où chaque case de la grille peut être dans l'un des états suivants : jamais brûlé, en feu, ou rempli de cendre. Le feu se propage aux cases adjacentes avec une probabilité définie, et la simulation s'arrête lorsqu'il n'y a plus de cases en feu. Les paramètres de la simulation (dimensions de la grille, cases initiales en feu, probabilité de propagation) sont configurés via un fichier texte. Ce projet démontre ma capacité à appréhender un problème complexe, à faire des choix architecturaux pertinents, et à présenter un travail clair et structuré.",
      footerLink: [
        {
          name: "Voir le code",
          url: "https://github.com/ayoubLems/simulation-propagation-feu-foret" // Remplace par le lien vers ton dépôt GitHub
        }
      ]
    },
    {
      image: require("./assets/images/logo-cooptin.png"), // Remplace par le chemin de l'image du projet
      projectName: "Cooptin",
      projectDesc:
        "Plateforme de cooptation qui permet aux utilisateurs de publier des annonces pour des offres d'emploi. Les candidats peuvent contacter directement les annonceurs pour se faire coopter, créant ainsi une relation gagnant-gagnant. Ce projet met en avant mes compétences en développement web, en gestion de bases de données, et en création d'interfaces utilisateur intuitives. Il démontre également ma capacité à concevoir des solutions innovantes pour répondre à des besoins concrets.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://cooptin.fr/home" // Lien vers le site du projet
        }
      ]
    },
    {
      image: require("./assets/images/logo-portfolio.png"), // Ajoute ici une image symbolique pour ton portfolio
      projectName: "Mon Portfolio",
      projectDesc:
        "Voici mon portfolio, un projet à la fois simple et ambitieux. Il a été conçu pour non seulement mettre en avant mes compétences en développement, mais aussi pour prouver que même un développeur peut être un peu narcissique en exposant son travail dans un joli cadre. Entre lignes de code et touches créatives, ce portfolio est un exemple parfait de mon parcours, de la gestion des données à la présentation d'un design épuré, avec juste ce qu'il faut de sophistication pour ne pas effrayer les visiteurs. Ce projet prouve qu'un portfolio peut être à la fois un outil professionnel et un projet personnel un peu geek, mais c'est aussi ma façon de me vendre sans complexes ! 😎",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://ton-portfolio.com" // Remplace par l'URL de ton portfolio
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Certifications et réalisations qui montrent mes compétences.",
  achievementsCards: [
    {
      title: "Apache Kafka for Developers using Spring Boot",
      subtitle: "Certification Udemy, 2024",
      image: require("./assets/images/kafkaLogo.png"), // Remplace par une image de la certification
      imageAlt: "Certification Kafka",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.udemy.com/certificate/UC-a727cae1-3068-4206-a49d-662e517b41bc/" // Remplace par le lien de ta certification
        }
      ]
    }
  ],
  display: true
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

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle: "Discutons d'un projet ou simplement pour dire bonjour !",
  number: "+33 6 68 93 41 45",
  email_address: "lemsoudi.pro@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
