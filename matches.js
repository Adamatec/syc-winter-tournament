// TEAMS (same names as your site)
const TEAMS = {
  ARFAKSHAD: [
    `🎯 Adam "Ad4matec" cohen`,
    `🔥 Jad "spartixxx" cohen`,
    `💀 Waseem "wesside" sadaka`,
    `⚡ Asher "Asher" Cohen`,
    `🛡️ Sam "Kreo" cohen`,
  ],
  SALAFAD: [
    `❄️ Abood "kal" cohen`,
    `🐺 Adel "kalypse" cohen`,
    `🌨️ Atah "Coldi" cohen`,
    `🧊 fuad "Hellsing" Altif`,
    `⛄ Haroon "ophac" cohen`,
    `🌟 Dan "Dune" Cohen`,
  ],
  FANGS: [
    `🐉 Itsik "itsik" marhiv`,
    `⚔️ isaac "sw1tch" Altif`,
    `🔮 muard "bl1tzz" Altif`,
    `🌟 reda "Virus" Altif`,
    `💫 Atah "inatanel" cohen`,
  ],
  CRACKHEADS: [
    `⛈️ Raed "Goldberg" altif`,
    `🌩️ khaleel "v1per" altif`,
    `🌪️ tawfeeq "tawfeeq" Marhiv`,
    `☔ Yousef "DS" altif`,
    `🌊 Hamdi "Sneax" altif`,
  ],
};

// MATCHES (edit these anytime)
const MATCHES = {
  "arfakshad-vs-crackheads-2026-01-24": {
    teamA: "ARFAKSHAD",
    teamB: "CRACKHEADS",
    date: "January 24, 2026",
    time: "6:30 PM (EET)",
    map: "TBD",
    format: "BO1",
    score: "TBD",
    winner: "TBD",
  },
  "fangs-vs-salafad-2026-01-24": {
    teamA: "FANGS",
    teamB: "SALAFAD",
    date: "January 24, 2026",
    time: "7:30 PM (EET)",
    map: "TBD",
    format: "BO1",
    score: "TBD",
    winner: "TBD",
  },
  "arfakshad-vs-fangs-2026-01-31": {
    teamA: "ARFAKSHAD",
    teamB: "FANGS",
    date: "January 31, 2026",
    time: "6:30 PM (EET)",
    map: "TBD",
    format: "BO1",
    score: "TBD",
    winner: "TBD",
  },
  "salafad-vs-crackheads-2026-01-31": {
    teamA: "SALAFAD",
    teamB: "CRACKHEADS",
    date: "January 31, 2026",
    time: "7:30 PM (EET)",
    map: "TBD",
    format: "BO1",
    score: "TBD",
    winner: "TBD",
  },
  "arfakshad-vs-salafad-2026-02-07": {
    teamA: "ARFAKSHAD",
    teamB: "SALAFAD",
    date: "February 07, 2026",
    time: "6:30 PM (EET)",
    map: "TBD",
    format: "BO1",
    score: "TBD",
    winner: "TBD",
  },
  "crackheads-vs-fangs-2026-02-07": {
    teamA: "CRACKHEADS",
    teamB: "FANGS",
    date: "February 07, 2026",
    time: "6:30 PM (EET)",
    map: "TBD",
    format: "BO1",
    score: "TBD",
    winner: "TBD",
  },
};

function qs(id){ return document.getElementById(id); }

const params = new URLSearchParams(window.location.search);
const matchId = params.get("id");

const match = MATCHES[matchId];

if (!match) {
  qs("matchTitle").textContent = "Match not found ❌";
} else {
  const title = `${match.teamA} vs ${match.teamB}`;
  qs("matchTitle").textContent = title;

  qs("teamAName").textContent = match.teamA;
  qs("teamBName").textContent = match.teamB;

  const info = qs("matchInfo");
  info.innerHTML = `
    <li><b>Date:</b> ${match.date}</li>
    <li><b>Time:</b> ${match.time}</li>
    <li><b>Map:</b> ${match.map}</li>
    <li><b>Format:</b> ${match.format}</li>
    <li><b>Score:</b> ${match.score}</li>
    <li><b>Winner:</b> ${match.winner}</li>
  `;

  const aList = qs("teamAPlayers");
  aList.innerHTML = (TEAMS[match.teamA] || []).map(p => `<li>${p}</li>`).join("");

  const bList = qs("teamBPlayers");
  bList.innerHTML = (TEAMS[match.teamB] || []).map(p => `<li>${p}</li>`).join("");
}
