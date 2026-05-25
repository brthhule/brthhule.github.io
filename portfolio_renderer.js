function renderInnerParagraph(name, index) {

}

function renderPositionBar(fields) {
    const positionBar = document.createElement("div");
    positionBar.className = "position-bar"
    const positionTitle = document.createElement("div");
    positionTitle.className = "position-title"
    positionTitle.innerHTML = fields.position_name;
    const positionDuration = document.createElement("div");
    positionDuration.className = "position-duration"
    positionDuration.innerHTML = fields.position_duration
    positionBar.appendChild(positionTitle);
    positionBar.appendChild(positionDuration);
    return positionBar;
}

function renderParagraphList(fields) {
    const list = document.createElement("ul");
    const points = fields.points
    console.log("Points:")
    console.log(points)
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

function renderParagraph(fields, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";

    
    paragraph.appendChild(renderPositionBar(fields));

    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = fields.org_name;
    paragraph.appendChild(paragraphTitle)

    const paragraphText = document.createElement("div")
    paragraphText.className = "paragraph-text"
    paragraphText.innerHTML = fields.org_description

    const paragraphPoints = document.createElement("div")
    paragraphPoints.className = "paragraph-points";

    const list = renderParagraphList(fields);

    paragraphPoints.appendChild(list);
    paragraphText.appendChild(paragraphPoints)
    paragraph.appendChild(paragraphText)
    
    
    //console.log(paragraph)
    return paragraph;
}


function renderParagraphHead(fields, index) {
    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";

    
    paragraph.appendChild(renderPositionBar(fields));

    const paragraphTitle = document.createElement("div")
    paragraphTitle.className = "paragraph-title"
    paragraphTitle.innerHTML = fields.org_name;
    paragraph.appendChild(paragraphTitle)

    
    
    //console.log(paragraph)
    return paragraph;
}

export function renderInformation(information, section) {
    information.forEach(function(fields, index) {
        const paragraphContainer = document.createElement("div");
        paragraphContainer.className = "paragraph-container";

        const paragraphHead = renderParagraphHead(fields, index);
        const paragraph = renderParagraph(fields, index);

        paragraphContainer.appendChild(paragraphHead);


        paragraphContainer.addEventListener('click', function() {
            fields.visible = !fields.visible;
            if (fields.visible == true) {
                paragraphContainer.removeChild(paragraphHead);
                paragraphContainer.appendChild(paragraph);
            } else {
                paragraphContainer.removeChild(paragraph);
                paragraphContainer.appendChild(paragraphHead);
            }
            
        })
        section.appendChild(paragraphContainer)
    })
}