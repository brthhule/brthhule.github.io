const projectsSection = document.getElementById("projects-section");
const pointsMap = new Map();


pointsMap.set("Peace Treaty", [["Written in C++12"], ["Status: In development"], ["https://github.com/brthhule/Peace-Treaty-V1.2", "GitHub Link"]])



const projectNames = ["Peace Treaty"]
const projectDescriptions = [
    "A 4x genre strategy game inspired by \"Civilizations\". Users pick from a variety of actions, such as attack and development, and explore a map."
]

projectNames.forEach(function(name, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";

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

    const points = pointsMap.get(name);
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
    projectsSection.appendChild(paragraph)


})

console.log(projectsSection)