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
    "https://drive.google.com/uc?export=download&id=1TyEeMRXAPZgbT6tL1m32HGC-CORNFW03", // Remplace par le lien vers ton CV
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
    emoji("⚡ Conception et développement d'API REST avec Spring Boot et Java EE."),
    emoji("⚡ Optimisation des performances et fiabilité via tests et qualité logicielle."),
    emoji("⚡ Collaboration Agile (Scrum) avec outillage CI/CD.")
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Java EE",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Maven",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-paper-plane"
    },
    {
      skillName: "SonarQube",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
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
    },
    {
      schoolName: "CPGE Meknès",
      logo: require("./assets/images/cpge.jpeg"),
      subHeader: "Classes Préparatoires aux Grandes Écoles, Maths-Physique",
      duration: "2018 – 2020",
      desc: "Formation intensive en mathématiques et physique."
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
      role: "Ingénieur Analyste Développeur | CDI",
      company: "EDT Company (Groupe Weexa)",
      companylogo: require("./assets/images/edt.png"),
      date: "Avril 2025 – Présent",
      desc: "Plateforme de facturation électronique (PDP) — génération et traitement de factures.",
      descBullets: [
        "Analyse, maintenance et évolution de solutions de dématérialisation / EDI / facturation électronique (PDP, Peppol).",
        "Contribution sur 4 projets : BCP-ASP (Java EE Struts/EJB – tracking/reprocess), BCP-KITS (libs partagées), EIMAv3 (Struts/Hibernate – recherche & export XML/PDF/ZIP), phoss-smp + Access Point (endpoint AS4, mapping End User, traçabilité MongoDB).",
        "Corrections et évolutions sur modules Java (legacy) + documentation technique (architecture/flux/zones d’impact) en Agile/Scrum."
      ]
    },
    {
      role: "Ingénieur Développeur Backend Java | Stage puis CDI",
      company: "SII (client Groupe ADEO)",
      companylogo: require("./assets/images/siiLogo.jpg"),
      date: "Mars 2024 – Mars 2025",
      desc: "Développement de solutions logicielles pour la gestion des échanges de matériel entre les business units.",
      descBullets: [
        "Création d’API pour la gestion des contacts dans un environnement multi‑schéma (BDD).",
        "Sécurisation des APIs : validation des entrées et gestion des erreurs pour protéger les données.",
        "Collaboration en méthodologie Agile avec Jira."
      ]
    },
    {
      role: "Ingénieur Développeur | Stage",
      company: "LAFARGE",
      companylogo: require("./assets/images/holcim-lafarge.jpeg"),
      date: "Avril 2023 – Septembre 2023",
      desc: "Développement d'un système de gestion de catalogues de formules/matières premières.",
      descBullets: [
        "Développement des back-end services pour gérer les flux de données critiques et automatiser les processus.",
        "Optimisation des performances des APIs REST et gestion des données avec PostgreSQL.",
        "Amélioration de la fiabilité des services avec tests unitaires et d’intégration (JUnit, SonarQube)."
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
      image: require("./assets/images/linkedin-bot-logo.png"), // Vous devrez ajouter une image pour ce projet
      projectName: "LinkedIn Bot",
      projectDesc:
        "Un bot Python intelligent conçu pour automatiser la recherche d'emploi sur LinkedIn. Il aide les développeurs Java juniors à trouver des opportunités de premier emploi, en extrayant et analysant automatiquement des offres pertinentes. Le bot recherche des offres de type 'Premier emploi' ou 'Junior', extrait les 20 premières offres correspondantes, vérifie qu'elles sont bien destinées aux profils débutants, et sauvegarde les résultats dans des fichiers Excel structurés. Il analyse également les descriptions d'offres pour détecter les opportunités réellement adaptées aux juniors.",
      footerLink: [
        {
          name: "Voir le code",
          url: "https://github.com/ayoubLems/linkedin-bot"
        }
      ]
    },
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
          url: "https://ayoublems.github.io/portfolioDev/" // Remplace par l'URL de ton portfolio
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
      url: "https://ayoublems.github.io/portfolioDev/",
      title: "Blog à venir",
      description:
        "Articles techniques et retours d’expérience à venir."
    },
    {
      url: "https://www.linkedin.com/in/ayoub-lemsoudi-597a85201/",
      title: "LinkedIn",
      description:
        "Retrouve mes actualités et publications professionnelles."
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
      title: "Conférence / Talk",
      subtitle: "Détails à venir",
      slides_url: "https://ayoublems.github.io/portfolioDev/",
      event_url: "https://ayoublems.github.io/portfolioDev/"
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
    "https://ayoublems.github.io/portfolioDev/"
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
