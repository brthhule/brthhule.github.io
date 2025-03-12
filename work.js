const workSection = document.getElementById("work-section");
const workPointsMap = new Map();

workPointsMap.set(
    "Lifeguard", [
        ["Aug 2021 - Aug 2024"],
        ["Maintain pool and safety standards while supervising sections of up to 50 patrons"],
        ["Certified by the Red Cross in CPR/AED for Professional Rescuers and First Aid"],
    ]
)


const workNames = [
    "Lifeguard"
]
const workDescriptions = [
    "At Montgomery County Recreation",
]

workNames.forEach(function(name, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";

    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = name;
    paragraph.appendChild(paragraphTitle)

    const paragraphText = document.createElement("div")
    paragraphText.className = "paragraph-text"
    paragraphText.innerHTML = workDescriptions[index]

    const paragraphPoints = document.createElement("div")
    paragraphPoints.className = "paragraph-points";

    const list = document.createElement("ul");



    const points = workPointsMap.get(name);

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
    //console.log(paragraph)
    workSection.appendChild(paragraph)
})

// console.log(workSection)