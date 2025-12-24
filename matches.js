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

    // Get all the new HTML elements
    const matchStatus = document.getElementById("matchStatus");
    const matchDate = document.getElementById("matchDate");
    const matchTime = document.getElementById("matchTime");
    const matchMap = document.getElementById("matchMap");
    const matchFormat = document.getElementById("matchFormat");
    const teamAName = document.getElementById("teamAName");
    const teamBName = document.getElementById("teamBName");
    const teamAPlayers = document.getElementById("teamAPlayers");
    const teamBPlayers = document.getElementById("teamBPlayers");

    if (!match) {
        matchStatus.textContent = "ERROR";
        matchDate.textContent = "Match not found";
        return;
    }

    // Set match info
    matchStatus.textContent = "UPCOMING";
    matchDate.textContent = match.date;
    matchTime.textContent = match.time;
    matchMap.textContent = match.map;
    matchFormat.textContent = match.format;

    // Set team names (clean version without TEAM prefix)
    const teamNames = match.title.split(" vs ");
    teamAName.textContent = teamNames[0];
    teamBName.textContent = teamNames[1];

    // Render Team A players with glowing dots
    teamAPlayers.innerHTML = "";
    (teams[match.teamAKey] || []).forEach(p => {
        const li = document.createElement("li");
        li.className = "player-item";
        li.innerHTML = `<div class="player-icon"></div>${p}`;
        teamAPlayers.appendChild(li);
    });

    // Render Team B players with glowing dots
    teamBPlayers.innerHTML = "";
    (teams[match.teamBKey] || []).forEach(p => {
        const li = document.createElement("li");
        li.className = "player-item";
        li.innerHTML = `<div class="player-icon"></div>${p}`;
        teamBPlayers.appendChild(li);
    });
}

renderMatch();

// Scoreboard toggle functionality
const scoreboardToggle = document.getElementById('scoreboardToggle');
const scoreboardContainer = document.getElementById('scoreboardContainer');
const toggleIcon = document.getElementById('toggleIcon');

if (scoreboardToggle) {
    scoreboardToggle.addEventListener('click', function() {
        scoreboardContainer.classList.toggle('active');
        if (scoreboardContainer.classList.contains('active')) {
            scoreboardContainer.style.display = 'block';
            toggleIcon.textContent = '📊';
            scoreboardToggle.innerHTML = `<span id="toggleIcon">📊</span> Hide Scoreboard`;
        } else {
            setTimeout(() => {
                scoreboardContainer.style.display = 'none';
            }, 500);
            toggleIcon.textContent = '📊';
            scoreboardToggle.innerHTML = `<span id="toggleIcon">📊</span> View Scoreboard`;
        }
    });
}

// Sample stats data (you can update these after matches are played)
const matchStats = {
    // For now, all matches show "No stats available yet"
    // After matches, you can add real data like:
    // 1: { scoreA: 16, scoreB: 14, statsA: [...], statsB: [...] }
};

// Function to render scoreboard when available
function renderScoreboard() {
    if (!matchStats[matchId]) {
        // No stats yet, show placeholder
        document.getElementById('finalScore').innerHTML = '<span style="font-size: 1.2rem; color: #64748b;">Match not played yet</span>';
        document.getElementById('scoreboardTeamAName').textContent = 'AWAITING MATCH RESULTS';
        document.getElementById('scoreboardTeamBName').textContent = 'AWAITING MATCH RESULTS';
        document.getElementById('statsTeamA').innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Stats will be available after the match</td></tr>';
        document.getElementById('statsTeamB').innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Stats will be available after the match</td></tr>';
    }
}

renderScoreboard();
