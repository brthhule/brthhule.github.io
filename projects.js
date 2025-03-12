const projectsSection = document.getElementById("projects-section");
const projectsPointMap = new Map();

const projectsMap = new Map(

)


projectsPointMap.set(
    "Peace Treaty", [
        ["Jun 2022 - Present"],
        ["Written in C++12"], 
        ["Status: In development"], 
        ["https://github.com/brthhule/Peace-Treaty-V1.2", "GitHub Link"]
    ]
)
projectsPointMap.set(
    "PTBamboo", [
        ["Jun 2023 - Present"],
        ["Full stack mobile application built in Javascript"],
        ["Front end: React Native, Expo"],
        ["Back end: NodeJS, Express, MySQL"],
    ]
)
projectsPointMap.set(
    "PandaTech Website", [
        ["Spring 2024"],
        ["Built in HTML and CSS"],
        ["https://pandatechbamboo.github.io/", "Website Link"]
    ]
)
projectsPointMap.set(
    "Sudoku Solver", [
        ["Summer 2024"],
        ["Built in NodeJS"],
        ["Utilizes an HTTP request to a Sudoku Solver API"]
    ]
)


const projectInformation = [
    [
        "Peace Treaty",
        "A 4x genre strategy game inspired by \"Civilizations.\" Users pick from a variety of actions, such as attack and development, and explore a map.",
    ]
]
const projectNames = [
    "Peace Treaty",
    "PTBamboo",
    "PandaTech Website",
    "Sudoku Solver",
]
const projectDescriptions = [
    "A 4x genre strategy game inspired by \"Civilizations.\" Users pick from a variety of actions, such as attack and development, and explore a map.",
    "A mobile app that promotes on campus event awareness by consolidating campus information into one centralized source.",
    "Landing website to provide information about my PTBamboo project",
    "Short term project where I learned how to make requests to an API",
]

var projectVisibile = [
    false,
    false,
]

projectNames.forEach(function(name, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";


    /*
    const positionBar = document.createElement("div");
    positionBar.className = "position-bar"
    const positionTitle = document.createElement("div");
    positionTitle.className = "position-title"
    positionTitle.innerHTML = projectPositions[index]
*/





    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = name;
    paragraph.appendChild(paragraphTitle)

    const paragraphText = document.createElement("div")
    paragraphText.className = "paragraph-text"
    paragraphText.innerHTML = projectDescriptions[index]

    const paragraphPoints = document.createElement("div")
    paragraphPoints.className = "paragraph-points";

    const list = document.createElement("ul");



    const points = projectsPointMap.get(name);

    /*
    console.log("BATMAN: Points: ");
    console.log(points);

    console.log("BATMAN: Name: " + name);
    console.log("BATMAN: projectsPointMap: ");
    console.log(projectsPointMap);

    console.log("BATMAN: Points:")
    console.log(points);

    if (name === "PandaTech Website") {
        console.log("Getting PandaTech website");
        console.log("BATMAN: projectsPointMap: ");
    console.log(projectsPointMap);
        console.log(projectsPointMap.get(name));
    }
        */

    points.forEach(function(point) {
        if (point.length > 1) {
            const pointElement = document.createElement("li")
            pointElement.className = "point-element"
            const link = document.createElement("a")
            link.innerHTML = point[1];
            link.href = point[0];
            link.className = "paragraph-link"
            pointElement.appendChild(link)
            list.appendChild(pointElement)
            
        } else {
            const pointElement = document.createElement("li")
            pointElement.textContent = point[0];
            pointElement.className = "point-element"
            list.appendChild(pointElement);
        }
    })

    paragraphPoints.appendChild(list);
    paragraphText.appendChild(paragraphPoints)
    paragraph.appendChild(paragraphText)
    // console.log(paragraph)
    projectsSection.appendChild(paragraph)
})

// console.log(projectsSection)