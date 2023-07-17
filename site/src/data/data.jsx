import techmuseum_logo from "../assets/imgs/Tech-Museum-Logo.png"
import siliconvalleybank_logo from "../assets/imgs/Silicon-Valley-Bank-Logo.png"
import morningstar_logo from "../assets/imgs/Morning-Star-Logo.png"

let data_json = [
  {
    "name": "Tony Doan", 
    "birthday": "2001/05/06 06:00:00",
    "location": "🇺🇸 California, USA", 
    "education": {
      "school": "University of California Merced",
      "degree": ["Bachelors of Science Computer Science and Engineering", "Minor Cognitive Science"],
      "year": "2019 - 2023"
    }, 
    "interests": [
      "Programming and learning new tools", 
      "Philosophy", 
      "Video games (jrpgs and Smash Ultimate)", 
      "Chess"
    ], 
    "proj": {
      "0": {
        "name": "ynotdoan.com",
        "tools": "",
        "desc": ""
      },
      "1": {
        "name": "Assessing and Grading Wood Bin Parts",
        "tools": ["Python", "Reactjs", "HTML", "Flask", "Yolov5", "SQLite", "Git"], 
        "desc": "Developped a modular application that involved machine learning, UI design, and database implementation to deliver The Morning Star Company an initial solution for their wooden bin sort process. This project won 1st place in the agriculture track at Innovate to Grow."
      }, 
      "2": {
        "name": "Mooday Tracker", 
        "tools": ["Python", "Javascript", "HTML", "CSS", "Flask", "SQLAlchemy", "Figma"],
        "desc": "A mood tracking website designed and built as part of the Health & Wellness track at HackMerced VIII. This website was built using Flask and Reactjs for users to fill out daily mood surveys and to journal their thoughts. Entries are saved so users can see a timeline of their mood and what may have contributed to it"
      },
      "3": {
        "name": "Social Media App", 
        "tools": ["Python", "Javascript", "HTML", "CSS", "Flask", "SQLAlchemy", "PythonAnywhere"],
        "desc": "Built and hosted a social media app that allows a user to login or create an account, make a post, follow and share posts to other users, and react to posts on their feed."
      }, 
      "4": {
        "name": "Pokemon Qt", 
        "tools": ["C++", "C", "Qt"],
        "desc": "A game built in a team using C++ and the Qt platform to demonstrate teamwork and object-oriented programming skill. The objective of this game is to wander around a map to find and battle the boss Arceus. The battle is turn-based and the boss’s moves are chosen randomly."
      },
      "5": {
        "name": "Pokedex GUI",
        "tools": "",
        "desc": ""
      }
    },
    "exp": {
      "msc": {
        "company": "The Morning Star Company",
        "location": "Los Banos, CA",
        "year": "2023", 
        "role": "Team Lead and Full Stack Developer (Assessing and Grading Wood Bin Parts Project)",
        "logo": morningstar_logo
      },
      "svb": {
        "company": "Silicon Valley Bank",
        "location": "Santa Clara, CA",
        "year": "2017-2019", 
        "role": "End User Services Intern", 
        "logo": siliconvalleybank_logo
      },
      "tmi": {
        "company": "The Tech Museum of Innovation",
        "location": "San Jose, CA",
        "year": "2015-2017", 
        "role": "Visitor Services Intern", 
        "logo": techmuseum_logo
      }
    }
  }
]

export default data_json
