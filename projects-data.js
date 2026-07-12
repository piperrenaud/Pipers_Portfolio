const projectsData = {

  "wiremus-tour": {
    title: "Wiremu's Tour",
    heroVideo: "assets/wiremus-tour/trailer.mov",
    heroImage: null,
    about: [
      "Wiremu’s Tour is an educational interactive experience that takes children on a journey through Aotearoa’s native wildlife and conservation efforts. Guided by Wiremu, players explore New Zealand’s bush, discover native animals, and learn through interactive storytelling designed specifically for young audiences.",
      "The project combines visual storytelling with interactive educational content, encouraging curiosity and environmental awareness through approachable, engaging gameplay."
    ],
    info: {
      genre: "Educational Visual Novel/Interactive Learning Experience",
      platform: "PC",
      engine: "Unity 6 (6000.3.5f2)",
      devTime: "Ongoing (4th Year Capstone Project)",
      teamSize: "10 Developers (6 Artists, 2 Programmers, 1 Researcher, 1 Producer)",
      targetAudience: ["Children aged 6-8", "Early Readers", "Families and tourists interested in NZ wildlife"]
    },
    myRole: {
      title: "Gameplay Programmer",
      intro: [
        "I am one of two programmers responsible for implementing gameplay systems and creating tools that allow the rest of the team to efficiently build educational content."
      ],
      responsibilities: [
        "Developed a custom dialogue system",
        "Implemented ScriptableObject based dialogue architecture",
        "Built the animal level selection system",
        "Implemented scene management between animal experiences",
        "Worked closely with designers and researchers to present educational content",
        "Supported integration of scanned player artwork into gameplay"
      ]
    },
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["Vuforia", "GitHub"],
      concepts: ["ScriptableObjects", "Data-driven Architecture", "Scene Management", "Dialogue Systems", "Event-driven Programming"]
    },
    whatILearned: [
      "This is my first large-scale collaborative game project, working alongside artists, researchers, and designers.",
      "The project reinforced how important modular architecture becomes as a project grows. Building systems that allows non-programmers to iterate independently significantly improved our team’s workflow and reduced bottlenecks between programming and content creation.",
      "I also gained experience collaborating across multiple disciplines, translating educational design goals into technical systems that were easy for the wider team to use."
    ],
    outcome: [
      "Developed as a 4th-year university capstone project",
      "Designed for in classrooms and educational visitors’ centres",
      "Focused on engaging children with New Zealand conservation through interactive Storytelling."
    ],
    media: [
      { image: "assets/wiremus-tour/dialogue-node.png", caption: "Dialogue system Node" }
    ],
    links: [
      { label: "Git Repo", url: "https://github.com/Shanch1/WiremusTour", icon: "github" },
      { label: "Pitch Presentation", url: "assets/wiremus-tour/presentation.pdf", icon: "google" }
    ]
  },

  "streetside": {
    title: "Streetside",
    heroVideo: "assets/streetside/demo.mov",
    heroImage: null,
    about: ["A fast-paced two-player co-op puzzle game where players race through city mazes to tag graffiti spots while solving environmental puzzles together. Players control Joey and Coco, two aspiring graffiti artists determined to make a name for themselves throughout Clyde City.",
        "The game combines Pac-Man-inspired grid-based movement with cooperative puzzles solving, unique player abilities, and spray-paining mechanics to create short, repayable levels that reward teamwork and quick decision-making."
    ],
    info: {
      genre: "Co-op Puzzle Game",
      platform: "PC & Console (Couch Co-op, Online multiplayer)",
      engine: "Unity 6 (6000.3.5f2)",
      devTime: "Ongoing (4th Year Capstone Project)",
      teamSize: "4 Developers (2 Programmers, 1 Artist, 1 Level Designer)",
      targetAudience: ["Ages 13+", "Fans of cooperative puzzle games", "Fans of fast-paced arcade games", "Couch co-op and online multiplayer audiences"]
    },
    myRole: {
      title: "Gameplay Programmer",
      intro: ["I am one of two programmers responsible for developing the game’s core gameplay systems and cooperative mechanics."],
      responsibilities: ["Supported development of grid-based player movement system", "Helped implement two-player gameplay systems", "Built the graffiti spray-painting mechanics", "Developed puzzle interaction systems", "Helping implement player abilities", "Assisting with gameplay integration across levels", "Collaborating with level designer to support puzzle implementation"]
    },
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["GitHub"],
      concepts: ["Grid-based Movement", "Multiplayer Gameplay", "Cooperative Gameplay", "Puzzle System Design", "State-based Logic", "Event-driven Programming"]
    },
    whatILearned: [
        "Working on a smaller multidisciplinary team highlighted the importance of designing gameplay systems that were both reusable and easy to build puzzles around.", 
        "I gained valuable experience implementing cooperative mechanics and I learned how strongly player movement influences puzzle design. Creating systems that felt responsive while remaining predictable was essential for maintaining satisfying gameplay.", 
        "This project also strengthened my understanding of designing gameplay around a clear core fantasy and ensuring every mechanic supported that vision."
    ],
    outcome: ["Designed as a cooperative game that combines fast-paced arcade movement with puzzle-solving and teamwork. The project focused on creating short, repayable levels where every mechanic reinforced cooperation and player expression through graffiti."],
    media: [
    ],
    links: [
      { label: "Git Repo", url: "https://github.com/piperrenaud/Streetside", icon: "github" },
      { label: "Demo Pitch Presentation", url: "assets/streetside/presentation.pdf", icon: "google" }
    ]
  },

  "echoes": {
    title: "Echoes in the Facility",
    heroImage: null,
    heroVideo: "assets/echoes/trailer.mp4",
    about: ["Echoes in the Facility is a third-person horror game where the player must explore an abandoned research facility while avoiding a sound-reactive monster AI. Players search for keys and tools, carefully manage noise, and use stealth mechanics such as hiding and slow walking to escape.",
        "The project was primarily an AI programming exercise focused on building believable enemy behaviour using modular gameplay systems."
        ],
    info: {
      genre: "Third-Person Horror/Stealth",
      platform: "PC",
      engine: "Unity 6 (6000.3.5f2)",
      devTime: "5 Weeks (University Assignment)",
      teamSize: "Solo",
      targetAudience: ["Indie Horror game enjoyers"]
    },
    myRole: {
      title: "Developer",
      intro: ["As the sole developer, I was responsible for designing and implementing every gameplay and AI system."],
      responsibilities: [
        "Designed and implemented the enemy AI Finite State Machine",
        "Built sound-based player detection",
        "Developed vision-based detection using field-of-view checks",
        "Created investigation and search behaviours",
        "Implemented chase and patrol systems",
        "Built hiding mechanics and stealth gameplay",
        "Implemented player interaction systems (doors, lights, pickups)",
        "Designed objective progression and inventory systems",
        "Created scene flow and game state management"
      ]
    },
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["GitLab", "Unity NavMesh"],
      concepts: ["Finite State Machine", "AI State Management", "NavMesh Navigation", "Object-Oriented Programming", "Vision Cone Detection"]
    },
    whatILearned: ["Developing the AI early in the project proved invaluable, as it allowed me to identify and fix core issues before they became deeply integrated into the rest of the game. Structuring the enemy using a finite state machine also reinforced the importance of modular architecture, making behaviours easier to maintain, debug, and extend as new features were added.",
        "Regular playtesting highlighted AI behaviours and edge cases that weren't obvious during solo development, demonstrating how essential player feedback is when designing gameplay systems. I also learned the value of reducing project scope to focus on polishing a smaller number of mechanics, resulting in a more cohesive and enjoyable gameplay experience. Finally, the project gave me a much deeper appreciation for how closely sound design and AI behaviour work together to create tension in horror games."
    ],
    outcome: ["Given more development time, I would expand the enemy AI with additional behavioural states such as suspicion, investigation memory, and more varied search patterns to create less predictable encounters. I would also improve the pathfinding system so the enemy could better navigate complex environments and react more naturally to the player's actions.",
        "Beyond the AI itself, I would introduce multiple enemy types with distinct behaviours to create greater gameplay variety, alongside a dynamic difficulty system that adapts to player performance. Finally, I would expand the game's accessibility options, allowing players to customise stealth and horror elements to better suit their preferred play style."
    ],
    media: [
    ],
    links: [
      { label: "Git Repo", url: "https://eng-git.canterbury.ac.nz/SoPD/prod323/26-s1/pre55/prod323_pre55_assignment2", icon: "github" },
      { label: "Game Design Document", url: "assets/echoes/design-document.pdf", icon: "trophy" }
    ]
  },

  "ai-car-racer": {
    title: "AI Car Racer",
    heroImage: "assets/ai-car-racer/cover.png",
    about: ["AI Racing Royale was an AI programming competition where each student developed an autonomous racing car and designed a custom race track under a strict set of competition rules. Every AI car competed on every participant's track, with overall performance determining the final rankings.",
        "My submission placed 5th out of 20 competitors, demonstrating consistent performance across a wide variety of track layouts."
    ],
    info: {
      genre: "Artificial Intelligence / Racing Competition",
      platform: "PC",
      engine: "Unity 6 (6000.3.5f2)",
      devTime: "6 Weeks (University Tournament)",
      teamSize: "Individual Entry",
      targetAudience: ["Fans of car racing games"]
    },
    myRole: {
      title: "AI Programmer",
      intro: ["As an individual competitor, I was responsible for designing, programming, testing, and optimizing both the racing AI and the competition track."],
      responsibilities: ["Developed an autonomous racing AI",
        "Programmed steering and throttle behaviour",
        "Designed and built a competition race track",
        "Optimised AI performance under competition constraints",
        "Tested AI performance across multiple track layouts",
        "Tuned vehicle behaviour for reliability and consistency"
      ]
    },
    technologies: {
      programming: ["C#","Unity", "Git"],
      tools: ["GitLab", "Unity Terrain Tools", "Unity Physics"],
      concepts: ["Artificial Intelligence", "Autonomous Agents", "Path Following", "AI Optimisation"]
    },
    whatILearned: ["This project reinforced how even small changes to AI behaviour can have a significant impact on overall performance. Through continuous testing and iteration, I found that designing systems for consistency and reliability often produced better results than trying to optimise for ideal scenarios that rarely occurred during gameplay.",
        "Working within technical constraints also encouraged more thoughtful engineering decisions, requiring me to balance performance, complexity, and maintainability. Finally, benchmarking my AI against alternative implementations provided valuable insight into its strengths and weaknesses, helping me identify opportunities for further refinement and optimisation."
    ],
    outcome: ["With additional development time, I would experiment with more advanced driving strategies to create AI opponents that feel more competitive and adaptable. I would also refine cornering behaviour and racing lines to improve lap times and produce more natural driving performance across different tracks.",
        "I would also like to implement adaptive behaviour that adjusts to different track layouts, allowing the AI to make better decisions in a wider variety of environments. Finally, I would expand the telemetry and debugging tools used during development to collect more detailed performance data, making it easier to identify bottlenecks and further improve obstacle recovery and overall driving behaviour."
    ],
    media: [
      { image: "assets/ai-car-racer/track.png", caption: "Track Preview" },
      { image: "assets/ai-car-racer/results.png", caption: "Final Tournament Results" },
    ],
    links: [
      { label: "Git Repo", url: "https://eng-git.canterbury.ac.nz/pre55/pre55_prod323_a1", icon: "github" },
      { label: "Tournament Rules", url: "assets/ai-car-racer/rules.pdf", icon: "trophy" },
      { label: "Tournament Live Stream Recording", url: "https://www.youtube.com/watch?v=MGrFW7DHzpQ&t=3s", icon: "youtube" }
    ]
  },

  "deep-clean": {
    title: "Deep Clean",
    heroImage: null,
    heroVideo: "assets/deep-clean/demo.mp4",
    about: ["Deep Clean is a first-person psychological mystery where players take on the role of a freelance cleaner hired to tidy a reclusive homeowner's cluttered house. What begins as an ordinary cleaning job gradually becomes a dangerous investigation as disturbing evidence surfaces throughout the home.",
        "Players must carefully balance cleaning tasks with secretly gathering evidence, questioning the homeowner, and building a case without raising suspicion. Every decision affects the outcome, leading to one of several endings ranging from successfully exposing the killer to becoming the next victim."
    ],
    info: {
      genre: "First-Person Mystery / Puzzle",
      platform: "PC",
      engine: "Unity 6 (6000.0.28f1)",
      devTime: "14 Weeks (University Assignment)",
      teamSize: "Solo",
      targetAudience: ["Fans of puzzle games", "Fans of true crime/mysteries"]
    },
    myRole: {
      title: "Sole Developer",
      intro: ["I focused on implementing core gameplay systems that connected the cleaning simulation with the investigation mechanics, while ensuring each system interacted cohesively to support the game's tension and progression."],
      responsibilities: ["Developed player interaction systems ", 
        "Implemented inventory and item inspection",
        "Built evidence colleciton mechanics",
        "Developed camera and photography system",
        "Implemented NPC interaction and dialogue systems",
        "Programmed AI behaviour and player following",
        "Created cleaning gameplay mechanics",
        "Built puzzle interaction systems",
        "Integrated suspicion and gameplay progression systems",
        "Assisted with gameplay balancing and iteration"
    ]
    },
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["GitHub", "Unity URP", "Unity NavMesh"],
      concepts: ["State Machines", "Object-Oriented Programming", "AI Behaviour", "Dialogue Systems", "Risk/Reward Gameplay Design", "Performance Optimisation"]
    },
    whatILearned: ["This project reinforced the value of designing large gameplay systems using a modular architecture, allowing individual mechanics to evolve independently without affecting the rest of the game. As more systems were introduced, careful planning became increasingly important to ensure mechanics interacted cleanly and avoided unintended conflicts.",
        "I also gained a deeper understanding of how player psychology influences gameplay design. Creating tension was not just about implementing technical systems, but about carefully balancing uncertainty, progression, and player freedom through regular playtesting and iteration. Overall, developing a larger-scale project strengthened my appreciation for scalable code, clear system boundaries, and building gameplay systems that remain maintainable as a project grows."
    ],
    outcome: ["With additional development time, I would expand the homeowner's AI with more advanced investigation, search, and suspicion behaviours to create more dynamic and unpredictable encounters. I would also introduce additional environmental interactions and evidence types, allowing players greater freedom in how they gather clues and approach each investigation.",
        "I would further develop the case-building system by adding deeper deduction mechanics that encourage players to connect evidence and draw their own conclusions. Finally, I would continue refining the balance between cleaning objectives and investigation gameplay while optimising the underlying systems to better support larger, more detailed environments."
    ],
    media: [
    ],
    links: [
      { label: "Git Repo", url: "https://github.com/piperrenaud/DeepClean_Demo", icon: "github" },
      { label: "Game Design Document", url: "assets/deep-clean/design-document.pdf", icon: "google" }
    ]
  },

  "procedural-generation": {
    title: "Procedural Generation",
    heroImage: "assets/procedural-generation/cover.png",
    heroVideo: null,
    about: ["This project explored procedural content generation through the creation of two independent systems: a procedurally generated maze and a procedurally generated terrain generator. The project began with a research phase investigating procedural generation techniques before applying that knowledge to create interactive technical prototypes.",
        "The focus was on understanding the underlying algorithms behind procedural generation rather than using pre-built tools, resulting in reusable systems capable of producing unique environments at runtime."
    ],
    info: {
      genre: "Technical Prototype / Procedural Generation",
      platform: "PC",
      engine: "Unity 6",
      devTime: "4 weeks",
      teamSize: "Solo",
      targetAudience: []
    },
    myRole: {
      title: "Developer",
      intro: ["As the sole developer, I researched procedural generation techniques before implementing and refining two procedural generation systems in Unity."],
      responsibilities: ["Researched procedural generation algorithms",
        "Implemented procedural terrain generation",
        "Developed procedural maze generation",
        "Created mesh generation pipeline",
        "Implemented terrain texturing",
        "Added terrain Level of Detail (LOD)",
        "Tuned procedural generation parameters",
        "Documented development process and findings"
      ]
    },
    technologies: {
      programming: ["C#", "Unity 6", "Git"],
      tools: ["Unity Mesh API", "Unity Animation Curves"],
      concepts: ["Procedural Generation", "Perlin Noise", "Multi-Octave Noise", "Depth-First Search (DFS)", "Recursive Backtracking",
        "Mesh Generation", "Height Maps", "Falloff Maps", "Terrain Texturing", "Algorithm Design"
      ]
    },
    whatILearned: ["This project gave me a much deeper understanding of how procedural generation combines mathematical algorithms with creative design to produce varied and engaging gameplay content. Experimenting with Perlin Noise demonstrated how layering multiple octaves creates far more natural-looking terrain, while falloff maps proved to be an effective way of shaping landscapes into believable islands.",
        "I also learned the importance of separating generation logic from rendering, making procedural systems easier to maintain, test, and extend. Implementing maze generation using depth-first search and recursive backtracking reinforced how relatively simple algorithms can produce complex, solvable structures. Throughout the project, I found that even small mathematical adjustments could dramatically change the appearance and feel of procedurally generated environments, highlighting the iterative nature of procedural content generation."
    ],
    outcome: ["With additional development time, I would combine the terrain and maze generators into a single playable experience, allowing players to explore procedurally generated islands containing dynamically created dungeons. I would also expand the terrain generation system with biome generation driven by temperature and moisture maps, alongside procedurally generated rivers and lakes to create richer and more varied environments.", 
        "To build on the maze generation system, I would implement A* pathfinding to visualise optimal solutions and support gameplay mechanics based on navigation. Finally, I would experiment with runtime terrain streaming to generate much larger worlds, while exploring alternative maze generation algorithms such as Prim's, Kruskal's, and Cellular Automata to compare the unique layouts and gameplay experiences each approach produces."
    ],
    media: [
      { image: "assets/procedural-generation/maze.png", caption: "Maze" }
    ],
    links: [
        { label: "Terrain Analysis", url: "assets/procedural-generation/terrain-video.mp4", icon: "youtube" },
        { label: "Maze Analysis", url: "assets/procedural-generation/maze-video.mp4", icon: "youtube" }
    ]
  },

  "coalesce": {
    title: "Coalesce",
    heroImage: null,
    heroVideo: "assets/coalesce/demo.mp4",
    about: ["Coalesce is an environmental narrative experience set in an abandoned London Underground station during a zombie apocalypse. Rather than focusing on combat or traditional gameplay, the project tells its story through environmental details, atmosphere, and audio design.",
        "Players explore a decaying world filled with remnants of ordinary lives interrupted by catastrophe, uncovering the narrative through abandoned environments, dynamic events, and immersive soundscapes."
    ],
    info: {
      genre: "Environmental Narrative / Walking Simulator",
      platform: "PC",
      engine: "Unreal Engine 5",
      devTime: "14 Weeks (Capstone Project)",
      teamSize: "9 Developers (6 Artists, 1 Programmer, 1 Project Manager, 1 Sound Designer)",
      targetAudience: ["Fans of realistic graphics"]
    },
    myRole: {
      title: "Gameplay & Audio Programmer",
      intro: ["As the project's sole programmer, I was responsible for implementing the player controller, integrating environmental audio systems, and creating scripted events that supported the team's environmental storytelling."],
      responsibilities: ["Developed player movement systems",
        "Integrated gameplay audio provided by the sound designer",
        "Implemented material-based footstep audio",
        "Built spatial audio systems",
        "Configured environmental audio effects (reverb and echoes)",
        "Developed trigger-based environmental events",
        "Collaborated closely with artists and the sound designer to support environmental storytelling"
      ]
    },
    technologies: {
      programming: ["Unreal Engine 5", "Blueprints", "Git"],
      tools: ["GitHub", "Unreal Audio System", "Unreal Trigger Volumes"],
      concepts: ["Environmental Storytelling", "Spatial Audio", "Trigger-based Gameplay", "Event-Driven Programming", "Player Controllers", "Audio Integration", "Team Collaboration"]
    },
    whatILearned: ["Being the sole programmer on a multidisciplinary team strengthened my communication and collaboration skills, as I worked closely with artists and the sound designer to integrate their work into the game. Building reusable gameplay systems also proved invaluable, allowing the project to evolve efficiently as assets and requirements changed throughout development.",
        "The project also reinforced how important audio implementation is to creating atmosphere and player immersion, particularly in narrative-driven experiences. I gained a greater appreciation for environmental storytelling, learning that the strongest moments occur when gameplay systems, visuals, and sound all work together to communicate the world and its history rather than relying on any one element alone."
    ],
    outcome: ["With additional development time, I would expand the environmental interaction system by introducing more dynamic events that respond to the player's actions and exploration. I would also implement adaptive audio that evolves throughout the experience, helping to reinforce the game's atmosphere and narrative progression.",
        "I would further develop the world by introducing more advanced AI-driven environmental behaviours and increasing player interaction with narrative objects to create a richer sense of discovery. Finally, I would optimise the audio systems to better support larger environments while maintaining performance and immersion."
    ],
    media: [
      { image: "assets/coalesce/ss1.png", caption: "Screenshot 1" },
      { image: "assets/coalesce/ss2.png", caption: "Screenshot 2" },
      { image: "assets/coalesce/ss3.png", caption: "Screenshot 3" },
      { image: "assets/coalesce/ss4.png", caption: "Screenshot 4" },
      { image: "assets/coalesce/ss5.png", caption: "Screenshot 5" },
      { image: "assets/coalesce/ss6.png", caption: "Screenshot 6" }
    ],
    links: [
      { label: "Git Repo", url: "https://github.com/piperrenaud/DISC380_Coalesce", icon: "github" },
      { label: "Initial Design Doc", url: "assets/coalesce/design-document.pdf", icon: "trophy" }
    ]
  },

  "portfolio": {
    title: "This Portfolio",
    heroImage: "assets/portfolio/cover.png",
    heroVideo: null,
    about: [
        "This is the very site you're browsing right now. Piper's Portfolio is a personal portfolio website built to showcase my game development projects, technical skills, and background in a way that reflects my own creative identity rather than a generic template.",
        "Rather than using a website builder or existing framework, the site was built from scratch with HTML, CSS, and vanilla JavaScript, styled with NES.css to create a retro, pixel-art aesthetic reminiscent of 8-bit game menus and consoles."
    ],
    info: {
      genre: "Personal Portfolio Website",
      platform: "Web (Desktop & Mobile Browsers",
      engine: "HTML / CSS / JavaScript (NES.css)",
      devTime: "Continuously being updated",
      teamSize: "Solo",
      targetAudience: ["Whoever's reading this :)"]
    },
    myRole: {
      title: "Designer & Developer",
      intro: ["As the sole developer of my own portfolio, I was responsible for every part of this site, from the visual design and layout, to the underlying architecture that powers each project page."],
      responsibilities: ["Designed the overall retro pixel-art visual identity",
        "Built a shared multi-page layout with a persistent nav bar and dark mode toggle",
        "Implemented a single, data-driven project page template used for every project",
        "Centralised all project content into one JavaScript data file",
        "Built the JavaScript rendering engine that reads the URL and populates each project page",
        "Styled the site using NES.css, layered with custom CSS for layout and responsiveness",
        "Structured content sections (About, Project Info, My Role, Technologies Used, Media, Links) to be reusable across every project"
      ]
    },
    technologies: {
      programming: ["HTML", "CSS", "JavaScript"],
      tools: ["NES.css", "Visual Studio", "GitHub", "GitHub Pages"],
      concepts: ["Data-driven Architecture", "Single Template Design Pattern", "URL Query Parameters", "Responsive Design", "DOM Manipulation", "UI/UX Design"]
    },
    whatILearned: [
        "Building my own portfolio reinforced a lot of the same architectural thinking I use in my game projects. Designing a single template that could represent any project, rather than a separate HTML file per project, meant thinking carefully about what data every project actually needed and how to structure it so new projects could be added without ever touching the template code again.",
        "I also learned a lot about translating a specific visual reference (NES.css and 8-bit UI conventions) into a cohesive site-wide design system, rather than treating each page as a one-off. Keeping colours, spacing, and typography consistent across the homepage, project pages, about page, and contact page took more planning than I initially expected.",
        "Finally, this project gave me a much better appreciation for how much good tooling matters. Centralising all project content into a single data file made the site dramatically faster to update and expand, which is exactly the kind of workflow improvement I try to build into my own game projects for other team members."    
    ],
    outcome: [
        "Built as an ongoing personal project to present my game development work professionally while reflecting my interest in retro and pixel-art aesthetics.",
        "With more time, I'd like to add filtering and search on the projects page, expand the dark mode toggle into a few alternate colour themes, and add subtle animations or transitions between pages to lean further into the retro console menu feel."],
    media: [],
    links: [
      { label: "Git Repo", url: "https://github.com/piperrenaud/PiperRenaud.github.io", icon: "github" },
      { label: "NES.css", url: "https://nostalgic-css.github.io/NES.css/#", icon: "trophy" }
    ]
  }

};