const activitiesSection = document.getElementById("activities-section");
const activitiesPointsMap = new Map();


activitiesPointsMap.set(
    "International Genetically Engineered Machine Club", [
        ["Developed the wiki for the 2024 competition"], 
        ["https://2024.igem.wiki/umaryland/", "wiki"],
        ["Worked with a team of developers to create a central club page"],
        ["https://umarylandigem.github.io/", "Club Website"],
    ]
)
activitiesPointsMap.set(
    "Global Communities Student Association", [
        ["Led the GCSA Executive Board in meetings and events"],
        ["Managed event reservation requests"]
    ]
)

activitiesPointsMap.set(
    "Global Communities Student Association ", [
        ["Organized folder directory of all organization notes and information"],
        ["Assist in executive board members' roles and responsibilities"],
        ["Ensure board members' assigned duties are fulfilled"],
    ]
)

const activitiesNames = [
    "International Genetically Engineered Machine Club",
    "Global Communities Student Association",
    "Global Communities Student Association "
]

const activitiesInformation = [
    [
        "Lead Web Developer",
        "Feb 2024 - Present"
    ],
    [
        "President",
        "Jan 2025 - Present"
    ],
    [
        "Vice President",
        "Aug 2024 - Jan 2025"
    ]
]

const activitiesDescriptions = [
    "A multi-discipline club that participates in an annual synethetic biology competition for the International Genetically Engineered Machine organization. I am in the Design Committee",
    "Plans community events for students in the Honors Global Challenges and Solutions Honors Program",
    "Plans community events for students in the Honors Global Challenges and Solutions Honors Program"
]

const activitiesVisible = [
    false,
    false
]



function renderInnerParagraph(name, index) {

}

function renderPositionBar(index) {
    const positionBar = document.createElement("div");
    positionBar.className = "position-bar"
    const positionTitle = document.createElement("div");
    positionTitle.className = "position-title"
    positionTitle.innerHTML = activitiesInformation[index][0];
    const positionDuration = document.createElement("div");
    positionDuration.className = "position-duration"
    positionDuration.innerHTML = activitiesInformation[index][1]
    positionBar.appendChild(positionTitle);
    positionBar.appendChild(positionDuration);
    return positionBar;
}

function renderParagraphList(name) {
    const list = document.createElement("ul");
    const points = activitiesPointsMap.get(name);
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
    return list;
}

function renderParagraph(name, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "activities-paragraph";

    
    paragraph.appendChild(renderPositionBar(index));

    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = name;
    paragraph.appendChild(paragraphTitle)

    const paragraphText = document.createElement("div")
    paragraphText.className = "paragraph-text"
    paragraphText.innerHTML = activitiesDescriptions[index]

    const paragraphPoints = document.createElement("div")
    paragraphPoints.className = "paragraph-points";

    const list = renderParagraphList(name);

    paragraphPoints.appendChild(list);
    paragraphText.appendChild(paragraphPoints)
    paragraph.appendChild(paragraphText)
    
    
    //console.log(paragraph)
    return paragraph;
}


function renderParagraphHead(name, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "activities-paragraph";

    
    paragraph.appendChild(renderPositionBar(index));

    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = name;
    paragraph.appendChild(paragraphTitle)

    
    
    //console.log(paragraph)
    return paragraph;
}

function renderAllActivities() {
    activitiesNames.forEach(function(name, index) {
        const paragraphContainer = document.createElement("div");
        paragraphContainer.className = "activities-paragraph-container";

        const paragraphHead = renderParagraphHead(name, index);
        const paragraph = renderParagraph(name, index);

        paragraphContainer.appendChild(paragraphHead);


        // console.log("event listener added");
        paragraphContainer.addEventListener('click', function() {
            activitiesVisible[index] = !activitiesVisible[index];
            if (activitiesVisible[index] == true) {
                paragraphContainer.removeChild(paragraphHead);
                paragraphContainer.appendChild(paragraph);
            } else {
                paragraphContainer.removeChild(paragraph);
                paragraphContainer.appendChild(paragraphHead);
            }
            
        })
        activitiesSection.appendChild(paragraphContainer)
    })
}

renderAllActivities();



/**const myDiv = document.getElementById('myDiv');

  myDiv.addEventListener('mouseover', function() {
    myDiv.classList.add('hovered');
  });

  myDiv.addEventListener('mouseout', function() {
    myDiv.classList.remove('hovered');
  }); */

// console.log(activitiesSection)