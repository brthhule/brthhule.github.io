// work.js

const workSection = document.getElementById("work-section");

const workInformation = [
    {
        "org_name": "Employee Navigator",
        "points": [],
        "position_name": "Software Engineering Intern",
        "position_duration": "Jun 2026 - Aug 2026",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Montgomery County Recreation",
        "points": [
           ["Monitor pool chemicals"],
            ["Supervise 9+ lifeguards"],
        ],
        "position_name": "Pool Operator",
        "position_duration": "Jan 2026 - Present",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Montgomery County Recreation",
        "points": [
            ["Assisted in pool chemical readings."],
            ["Certified Swimming Pool Operator in Montgomery County, Maryland (ID No. 9722)."],
            ["Front Desk trained"]
        ],
        "position_name": "Head Lifeguard",
        "position_duration": "Aug 2023 - Jul 2025",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Montgomery County Recreation",
        "points": [
            ["Took initiative in patron-danger prevention and cleaning duties."],
            ["Identified areas of improvement to maintain a clean, attractive facility environment and acted with perseverance."],
        ],
        "position_name": "Senior Lifeguard",
        "position_duration": "Aug 2023 - Jul 2025",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Montgomery County Recreation",
        "points": [
           ["Maintained pool and safety standards while supervising sections of up to 50 patrons."],
            ["Certified by the Red Cross in CPR/AED for Professional Rescuers and First Aid."],
        ],
        "position_name": "Lifeguard",
        "position_duration": "Aug 2021 - Aug 2023",
        "org_description": "",
        "visible": false
    }
]



import { renderInformation } from "./portfolio_renderer.js";


renderInformation(workInformation, workSection);

