// Get match id from URL
const params = new URLSearchParams(window.location.search);
const matchId = params.get("id");

// Teams and players
const teams = {
  ARFAKSHAD: [
    'Adam "Ad4matec" Cohen',
    'Jad "spartixxx" Cohen',
    'Waseem "wesside" Sadaka',
    'Asher "Asher" Cohen',
    'Sam "Kreo" Cohen'
  ],
  SALAFAD: [
    'Abood "kal" Cohen',
    'Adel "kalypse" Cohen',
    'Atah "Coldi" Cohen',
    'Fuad "Hellsing" Altif',
    'Haroon "ophac" Cohen'
  ],
  FANGS: [
    'Itsik "itsik" Marhiv',
    'Isaac "sw1tch" Altif',
    'Muard "bl1tzz" Altif',
    'Reda "Virus" Altif',
    'Atah "inatanel" Cohen'
  ],
  CRACKHEADS: [
    'Raed "Goldberg" Altif',
    'Khaleel "v1per" Altif',
    'Tawfeeq "Tawfeeq" Marhiv',
    'Yousef "DS" Altif',
    'Hamdi "Sneax" Altif'
  ]
};

// Matches (no results yet)
const matches = {
  1: {
    title: "TEAM ARFAKSHAD vs TEAM CRACKHEADS",
    date: "January 24, 2026",
    time: "6:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "ARFAKSHAD",
    teamBKey: "CRACKHEADS"
  },
  2: {
    title: "TEAM FANGS vs TEAM SALAFAD",
    date: "January 24, 2026",
    time: "7:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "FANGS",
    teamBKey: "SALAFAD"
  },
  3: {
    title: "TEAM ARFAKSHAD vs TEAM FANGS",
    date: "January 31, 2026",
    time: "6:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "ARFAKSHAD",
    teamBKey: "FANGS"
  },
  4: {
    title: "TEAM SALAFAD vs TEAM CRACKHEADS",
    date: "January 31, 2026",
    time: "7:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "SALAFAD",
    teamBKey: "CRACKHEADS"
  },
  5: {
    title: "TEAM ARFAKSHAD vs TEAM SALAFAD",
    date: "February 7, 2026",
    time: "6:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "ARFAKSHAD",
    teamBKey: "SALAFAD"
  },
  6: {
    title: "TEAM CRACKHEADS vs TEAM FANGS",
    date: "February 7, 2026",
    time: "7:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "CRACKHEADS",
    teamBKey: "FANGS"
  },
  7: {
    title: "TEAM CRACKHEADS vs TEAM ARFAKSHAD",
    date: "February 14, 2026",
    time: "6:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "CRACKHEADS",
    teamBKey: "ARFAKSHAD"
  },
  8: {
    title: "TEAM SALAFAD vs TEAM FANGS",
    date: "February 14, 2026",
    time: "7:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "SALAFAD",
    teamBKey: "FANGS"
  },
  9: {
    title: "TEAM FANGS vs TEAM ARFAKSHAD",
    date: "February 21, 2026",
    time: "6:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "FANGS",
    teamBKey: "ARFAKSHAD"
  },
  10: {
    title: "TEAM CRACKHEADS vs TEAM SALAFAD",
    date: "February 21, 2026",
    time: "7:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "CRACKHEADS",
    teamBKey: "SALAFAD"
  },
  11: {
    title: "TEAM SALAFAD vs TEAM ARFAKSHAD",
    date: "February 28, 2026",
    time: "6:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "SALAFAD",
    teamBKey: "ARFAKSHAD"
  },
  12: {
    title: "TEAM FANGS vs TEAM CRACKHEADS",
    date: "February 28, 2026",
    time: "7:30 PM EET",
    map: "TBD",
    format: "BO1",
    teamAKey: "FANGS",
    teamBKey: "CRACKHEADS"
  }
};

function renderMatch() {
  const match = matches[matchId];

  const matchTitle = document.getElementById("matchTitle");
  const matchInfo = document.getElementById("matchInfo");
  const teamAName = document.getElementById("teamAName");
  const teamBName = document.getElementById("teamBName");
  const teamAPlayers = document.getElementById("teamAPlayers");
  const teamBPlayers = document.getElementById("teamBPlayers");

  if (!match) {
    matchTitle.textContent = "Match not found";
    matchInfo.innerHTML = "<li>Invalid match ID.</li>";
    return;
  }

  // Title
  matchTitle.textContent = match.title;

  // Info (no result yet)
  matchInfo.innerHTML = "";
  matchInfo.innerHTML += `<li><strong>Date:</strong> ${match.date}</li>`;
  matchInfo.innerHTML += `<li><strong>Time:</strong> ${match.time}</li>`;
  matchInfo.innerHTML += `<li><strong>Map:</strong> ${match.map}</li>`;
  matchInfo.innerHTML += `<li><strong>Format:</strong> ${match.format}</li>`;
  matchInfo.innerHTML += `<li><strong>Status:</strong> UPCOMING</li>`;

  // Teams and players
  teamAName.textContent = match.title.split(" vs ")[0];
  teamBName.textContent = match.title.split(" vs ")[1];

  teamAPlayers.innerHTML = "";
  (teams[match.teamAKey] || []).forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    teamAPlayers.appendChild(li);
  });

  teamBPlayers.innerHTML = "";
  (teams[match.teamBKey] || []).forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    teamBPlayers.appendChild(li);
  });
}

renderMatch();
