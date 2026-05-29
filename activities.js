// activities.js

const activitiesSection = document.getElementById("activities-section");

const activitiesInformation = [
    {
        "org_name": "Hong Kong Student Association",
        "points": [
            "Provide advice in fundraising activities"
        ],
        "position_name": "Fundraising Advisor",
        "position_duration": "May 2026 - Present",
        "org_description": "Cultural organization dedicated bringing together students from diverse backgrounds to learn about cantonese culture.",
        "visible": false
    },
    {
        "org_name": "Echoish",
        "points": [
            "Maintain board meeting minutes"
        ],
        "position_name": "Secretary",
        "position_duration": "Apr 2026 - Present",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Math Club",
        "points": [
            "Created social media graphics promoting the club on Instagram",
            "Facilitated club operations"
        ],
        "position_name": "Officer",
        "position_duration": "Jun 2025 - Present",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Hong Kong Student Association",
        "points": [
        ],
        "position_name": "Fundraising Chair",
        "position_duration": "May 2025 - May 2026",
        "org_description": "Cultural organization dedicated bringing together students from diverse backgrounds to learn about cantonese culture.",
        "visible": false
    },
    {
        "org_name": "BigThink AI",
        "points": [
            "Create social media graphics to promote the club on Instagram and LinkedIn"
        ],
        "position_name": "Marketing Lead",
        "position_duration": "May 2025 - Present",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Campus Coders Crew",
        "points": [
            "Manage a development team of 4 developers"
        ],
        "position_name": "Team Lead",
        "position_duration": "Apr 2025 - Present",
        "org_description": "A web development organization that creates pro-bono software for clubs, startups, and other organizations around UMD.",
        "visible": false
    },
    {
        "org_name": "International Genetically Engineered Machine Club",
        "points": [
            ["Developed graphic designs to promote our organization’s presence on campus."], 
            ["Implemented an aggressive marketing tactic to reach a wide student audience."],
            ["Increased our social media presence by 8%."],
            ["Implemented aggressive marketing tactics, increasing social media presence by 8%."],
        ],
        "position_name": "Chair of Student Membership & Outreach",
        "position_duration": "Mar 2025 - Feb 2026",
        "org_description": "A multi-discipline club that participates in an annual synethetic biology competition for the International Genetically Engineered Machine organization. I am in the Design Committee",
        "visible": false
    },
    {
        "org_name": "Campus Coders Crew",
        "points": [
            "Manage the direction of the organization",
        ],
        "position_name": "President",
        "position_duration": "Feb 2025 - Present",
        "org_description": "A web development organization that creates pro-bono software for clubs, startups, and other organizations around UMD.",
        "visible": false
    },
    {
        "org_name": "Global Communities Student Association",
        "points": [
            ["Led the GCSA Executive Board in meetings and events"],
            ["Managed event reservation requests"]
        ],
        "position_name": "President",
        "position_duration": "Dec 2024 - May 2025",
        "org_description": "Plans community events for students in the Honors Global Challenges and Solutions Honors Program",
        "visible": false
    },
    {
        "org_name": "Chinese Student Association",
        "points": [
            ["Planned general body meetings for association members."],
            ["Shadowed executive board meetings for the Chinese Student Associations."],
            ["Created social media graphics for various events."],
            ["Starred in an Instagram reel that increased views by 12%."],
        ],
        "position_name": "Auxiliary Officer",
        "position_duration": "Sep 2024 - May 2025",
        "org_description": "Plans community events for students in the Honors Global Challenges and Solutions Honors Program",
        "visible": false
    },
    {
        "org_name": "Global Communities Student Association",
        "points": [
            ["Organized folder directory of all organization notes and information"],
            ["Assist in executive board members' roles and responsibilities"],
            ["Ensure board members' assigned duties are fulfilled"],
        ],
        "position_name": "Vice President",
        "position_duration": "Aug 2024 - Dec 2024",
        "org_description": "Plans community events for students in the Honors Global Challenges and Solutions Honors Program",
        "visible": false
    },
    {
        "org_name": "Computer, Mathematical, and Natural Sciences Ambassadors",
        "points": [
        ],
        "position_name": "Ambassador",
        "position_duration": "Jun 2024 - Present",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "International Genetically Engineered Machine Club",
        "points": [
            ["Developed the wiki for the 2024 competition"], 
            ["https://2024.igem.wiki/umaryland/", "wiki"],
            ["Worked with a team of developers to create a central club page"],
            ["https://umarylandigem.github.io/", "Club Website"],
        ],
        "position_name": "Lead Web Developer",
        "position_duration": "Feb 2024 - Present",
        "org_description": "A multi-discipline club that participates in an annual synethetic biology competition for the International Genetically Engineered Machine organization. I am in the Design Committee",
        "visible": false
    },
    {
        "org_name": "Vietnamese Student Association",
        "points": [
        ],
        "position_name": "Executive Experience Program (EEP) Member",
        "position_duration": "Feb 2024 - Mar 2024",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Honors Ambassadors",
        "points": [
        ],
        "position_name": "HGLO Co-Captain",
        "position_duration": "Oct 2023 - Present",
        "org_description": "",
        "visible": false
    },
    {
        "org_name": "Resident Hall Association: North Hill Area Council",
        "points": [
        ],
        "position_name": "VP of Sustainability",
        "position_duration": "Sep 2023 - May 2024",
        "org_description": "",
        "visible": false
    },
]



import { renderInformation } from "./portfolio_renderer.js";


renderInformation(activitiesInformation, activitiesSection);
