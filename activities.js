const activitiesSection = document.getElementById("activities-section");
const activitiesPointsMap = new Map();


activitiesPointsMap.set(
    "International Genetically Engineered Machine Club", [
        ["Feb 2024 - Present"],
        ["Position: Senior Web Developer"], 
        ["Develop the wiki for the 2024 competition"], 
        ["https://2024.igem.wiki/umaryland/", "wiki"],
        ["Worked with a team of developers to create a central club page"],
        ["https://umarylandigem.github.io/", "Club Website"],
    ]
)
activitiesPointsMap.set(
    "Global Communities Student Association", [
        ["Aug 2024 - Present"],
        ["Position: Vice President"],
        ["Assist in executive board members' roles and responsibilities"],
        ["Ensure board members' assigned duties are fulfilled"],
        ["Organize folder directory of all organization notes and information"]
    ]
)


const activitiesNames = [
    "International Genetically Engineered Machine Club",
    "Global Communities Student Association",
]
const activitiesDescriptions = [
    "A multi-discipline club that participates in an annual synethetic biology competition for the International Genetically Engineered Machine organization. I am in the Design Committee",
    "Plans community events for students in the Honors Global Challenges and Solutions Honors Program"
]

activitiesNames.forEach(function(name, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";

    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = name;
    paragraph.appendChild(paragraphTitle)

    const paragraphText = document.createElement("div")
    paragraphText.className = "paragraph-text"
    paragraphText.innerHTML = activitiesDescriptions[index]

    const paragraphPoints = document.createElement("div")
    paragraphPoints.className = "paragraph-points";

    const list = document.createElement("ul");



    const points = activitiesPointsMap.get(name);

    console.log("BATMAN: Points: ");
    console.log(points);

    console.log("BATMAN: Name: " + name);
    console.log("BATMAN: activitiesPointsMap: ");
    console.log(activitiesPointsMap);

    console.log("BATMAN: Points:")
    console.log(points);

    if (name === "PandaTech Website") {
        console.log("Getting PandaTech website");
        console.log("BATMAN: activitiesPointsMap: ");
    console.log(activitiesPointsMap);
        console.log(activitiesPointsMap.get(name));
    }

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
    console.log(paragraph)
    activitiesSection.appendChild(paragraph)
})

console.log(activitiesSection)