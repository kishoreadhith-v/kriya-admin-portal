const events = [
  {
    "eventName": "CodeHub",
    "category": "Coding",
    "eventId": "EVNT03",
    "date": "15",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "NUMERIX",
    "category": "Science",
    "eventId": "EVNT04",
    "date": "15",
    "timing": "9:30 AM - 12:30PM"
  },
  {
    "eventName": "Runway Rush",
    "category": "Fashion and Textile",
    "eventId": "EVNT05",
    "date": "14",
    "timing": "1.30 PM - 4.30 PM"
  },
  {
    "eventName": "HackQuest ",
    "category": "Coding",
    "eventId": "EVNT07",
    "date": "14",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "RoboSumo",
    "category": "Gold",
    "eventId": "EVNT08",
    "date": "15",
    "timing": "9.30 AM-4.30 PM"
  },
  {
    "eventName": "INNOVATION FORUM",
    "category": "Fashion and Textile",
    "eventId": "EVNT09",
    "date": "15",
    "timing": "9.30 AM - 12.30 PM"
  },
  {
    "eventName": "Kriya Open Quiz",
    "category": "Gold",
    "eventId": "EVNT10",
    "date": "15",
    "timing": "9:30 AM - 12:30 PM"
  },
  {
    "eventName": "Auction to Action",
    "category": "Core Engineering",
    "eventId": "EVNT11",
    "date": "15",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "TaskOps",
    "category": "Coding",
    "eventId": "EVNT14",
    "date": "15",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "Binary×Forge",
    "category": "Coding",
    "eventId": "EVNT12",
    "date": "14",
    "timing": "9.30 AM -4.30 PM"
  },
  {
    "eventName": "Kriya Open Quiz",
    "category": "Quiz",
    "eventId": "EVNT10",
    "date": "15",
    "timing": "9:30 AM - 12:30 PM"
  },
  {
    "eventName": "Quizzy Crushy: Auto Edition",
    "category": "Quiz",
    "eventId": "EVNT13",
    "date": "14",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "TaskOps",
    "category": "Gold",
    "eventId": "EVNT14",
    "date": "15",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "COUTURE CHRONICLE",
    "category": "Fashion and Textile",
    "eventId": "EVNT15",
    "date": "16",
    "timing": "9.30 AM -4.30 PM"
  },
  {
    "eventName": "Fortune Flick",
    "category": "Science",
    "eventId": "EVNT16",
    "date": "15",
    "timing": "9.30 AM - 12.30 PM"
  },
  {
    "eventName": "Elegance to the Road: Innovate Assemble Drive",
    "category": "Core Engineering",
    "eventId": "EVNT17",
    "date": "15",
    "timing": "9.30 AM - 12.30 PM"
  },
  {
    "eventName": "Forensicist",
    "category": "Science",
    "eventId": "EVNT18",
    "date": "16",
    "timing": "9.30 AM  - 4.30 PM"
  },
  {
    "eventName": "SpeedDrifters 2.0",
    "category": "Gold",
    "eventId": "EVNT19",
    "date": "14",
    "timing": "9.30 AM -4.30 PM"
  },
  {
    "eventName": "SpeedDrifters 2.0",
    "category": "Bot",
    "eventId": "EVNT19",
    "date": "14",
    "timing": "9.30 AM -4.30 PM"
  },
  {
    "eventName": "RoboSumo",
    "category": "Bot",
    "eventId": "EVNT08",
    "date": "15",
    "timing": "9.30 AM-4.30 PM"
  },
  {
    "eventName": "KRIYA IDEATHON",
    "category": "Platinum",
    "eventId": "EVNT89",
    "date": "15",
    "timing": "9:30 AM - 4:30 PM"
  },
  {
    "eventName": "Codopoly",
    "category": "Coding",
    "eventId": "EVNT20",
    "date": "15",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "CodeStorm",
    "category": "Coding",
    "eventId": "EVNT21",
    "date": "14",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "Aero Glider",
    "category": "Gold",
    "eventId": "EVNT22",
    "date": "15",
    "timing": "1.30 PM - 4.30 PM"
  },
  {
    "eventId": "EVNT88",
    "category": "Quiz",
    "eventName": "Witty Mindz",
    "date": "15",
    "timing": "9.30 AM  - 4.30 PM"
  },
  {
    "eventName": "Aero Glider",
    "category": "Core Engineering",
    "eventId": "EVNT22",
    "date": "15",
    "timing": "1.30 PM - 4.30 PM"
  },
  {
    "eventName": "Innovator's Quest",
    "category": "Core Engineering",
    "eventId": "EVNT23",
    "date": "15",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "TRY AND TRIUMPH",
    "category": "Science",
    "eventId": "EVNT24",
    "date": "15",
    "timing": "9.30 AM -4.30 PM"
  },
  {
    "eventName": "CIVIL SHOWDOWN",
    "category": "Quiz",
    "eventId": "EVNT25",
    "date": "14",
    "timing": "1.30 PM - 4.30 PM"
  },
  {
    "eventName": "Civilphilia",
    "category": "Core Engineering",
    "eventId": "EVNT26",
    "date": "15",
    "timing": "9.30 AM - 12.30 PM"
  },
  {
    "eventName": "Circuityzer",
    "category": "Science",
    "eventId": "EVNT27",
    "date": "15",
    "timing": "9.30 AM  - 12.30 PM"
  },
  {
    "eventName": "TechTrails",
    "category": "Coding",
    "eventId": "EVNT28",
    "date": "14",
    "timing": "9.30 AM  - 12.30 PM"
  },
  {
    "eventName": "WhizZone",
    "category": "Science",
    "eventId": "EVNT29",
    "date": "15",
    "timing": "9.30 AM - 12.30 PM"
  },
  {
    "eventName": "TechWhiz",
    "category": "Core Engineering",
    "eventId": "EVNT30",
    "date": "15",
    "timing": "9.30 AM - 4.30 PM"
  },
  {
    "eventName": "Mindventure",
    "category": "Quiz",
    "eventId": "EVNT31",
    "date": "16",
    "timing": "9.30 AM - 12.30 PM"
  },
  {
    "eventName": "ROBO RALLY",
    "category": "Bot",
    "eventId": "EVNT82",
    "date": "15",
    "timing": "9.30 AM  - 4.30 PM"
  },
  {
    "eventName": "Auto Arena",
    "category": "Core Engineering",
    "eventId": "EVNT32",
    "date": "15",
    "timing": "1.30 PM - 4.30 PM"
  },
  {
    "eventName": "Astral Arena",
    "category": "Science",
    "eventId": "EVNT81",
    "date": "15",
    "timing": "9.30 AM -4.30 PM"
  },
  {
    "eventName": "ROBO RALLY",
    "category": "Gold",
    "eventId": "EVNT82",
    "date": "15",
    "timing": "9.30 AM  - 4.30 PM"
  },
  {
    "eventName": "Fashion Faceoff: The Ultimate Fashion Quiz",
    "category": "Fashion and Textile",
    "eventId": "EVNT83",
    "date": "14",
    "timing": "9.30 AM  - 12.30 PM"
  },
  {
    "eventName": "TeeStory: T-Shirt Design Challenge",
    "category": "Fashion and Textile",
    "eventId": "EVNT84",
    "date": "14",
    "timing": "1.30 PM - 4.30 PM"
  },
  {
    "eventName": "Solar implant",
    "category": "Core Engineering",
    "eventId": "EVNT85",
    "date": "15",
    "timing": "9.30 AM  - 4.30 PM"
  },
  {
    "eventName": "CRITICAL THINKER",
    "category": "Core Engineering",
    "eventId": "EVNT86",
    "date": "16",
    "timing": "9.30 AM -12.30 PM"
  },
  {
    "eventName": "Levitas",
    "category": "Core Engineering",
    "eventId": "EVNT87",
    "date": "15",
    "timing": "9.30 AM -4.30 PM"
  }
]


export default events;