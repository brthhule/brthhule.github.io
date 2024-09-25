function initCourseData(name) {
    fetch('CMSC216.txt')
      .then(response => response.text())  // Parse the file content as text
      .then(data => {
        console.log(data);
        // Insert the file content into an HTML element
        //document.getElementById('fileContent').textContent = data;
      })
      .catch(error => {
        console.error('Error fetching the text file:', error);
        //document.getElementById('fileContent').textContent = "Error loading file.";
      });
      window.location.href = `${name}.html`;
      console.log("Name: " + name);
}


const courses = document.getElementById("courses");
const courseLinks = ["../index.html", "../index.html", "../index.html"];
const courseNames = ["CMSC131", "CMSC132", "CMSC216"];

courseNames.forEach(function(name, index) {
    console.log("Name: " + name);
    const courseBox = document.createElement("div");
    courseBox.className = "course-box";

    courseBox.addEventListener('click', function() {
        initCourseData(name);
    });

    const courseTitle = document.createElement("div");
    courseTitle.className = "course-title";
    courseTitle.innerHTML = name;

    courseBox.append(courseTitle);

    courses.append(courseBox);

    console.log(courseBox);
})

console.log(courses);