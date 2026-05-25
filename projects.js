// projects.js

const projectsSection = document.getElementById("projects-section");


const projectsInformation = [
    {
        "org_name": "PTBamboo",
        "points": [
            ["Full stack mobile application built in Javascript"],
            ["Front end: React Native, Expo"],
            ["Back end: NodeJS, Express, MySQL"],
        ],
        "position_name": "",
        "position_duration": "Jun 2023 - Present",
        "org_description": "A mobile app that promotes on campus event awareness by consolidating campus information into one centralized source.",
        "visible": false
    },
    {
        "org_name": "Peace Treaty",
        "points": [
            ["Written in C++12"], 
            ["Status: In development"], 
            ["https://github.com/brthhule/Peace-Treaty-V1.2", "GitHub Link"]
        ],
        "position_name": "",
        "position_duration": "Jun 2022 - Present",
        "org_description": "A 4x genre strategy game inspired by \"Civilizations.\" Users pick from a variety of actions, such as attack and development, and explore a map.",
        "visible": false
    },
    
    {
        "org_name": "PandaTech Website",
        "points": [
            ["Built in HTML and CSS"],
            ["https://pandatechbamboo.github.io/", "Website Link"]
        ],
        "position_name": "",
        "position_duration": "Spring 2024",
        "org_description": "Landing website to provide information about my PTBamboo project",
        "visible": false
    },
    {
        "org_name": "Sudoku Solver",
        "points": [
            ["Built in NodeJS"],
            ["Utilizes an HTTP request to a Sudoku Solver API"]
        ],
        "position_name": "",
        "position_duration": "Summer 2024",
        "org_description": "Short term project where I learned how to make requests to an API",
        "visible": false
    },
]


import { renderInformation } from "./portfolio_renderer.js";


renderInformation(projectsInformation, projectsSection);
