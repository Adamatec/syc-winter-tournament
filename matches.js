// Match database with all tournament matches
const MATCHES_DB = {
    1: {
        id: 1,
        team1: { name: "ARFAKSHAD", players: [
            { name: "Player1", username: "arf_player1", matches: 500, winrate: "52%" },
            { name: "Player2", username: "arf_player2", matches: 450, winrate: "48%" },
            { name: "Player3", username: "arf_player3", matches: 600, winrate: "55%" },
            { name: "Player4", username: "arf_player4", matches: 400, winrate: "50%" },
            { name: "Player5", username: "arf_player5", matches: 550, winrate: "53%" }
        ]},
        team2: { name: "crackheads", players: [
            { name: "Player1", username: "crack_player1", matches: 520, winrate: "51%" },
            { name: "Player2", username: "crack_player2", matches: 480, winrate: "49%" },
            { name: "Player3", username: "crack_player3", matches: 550, winrate: "54%" },
            { name: "Player4", username: "crack_player4", matches: 420, winrate: "47%" },
            { name: "Player5", username: "crack_player5", matches: 500, winrate: "52%" }
        ]},
        status: "upcoming",
        server: "TBD",
        map: "TBD",
        type: "5v5 - EU"
    },
    2: {
        id: 2,
        team1: { name: "FANGS", players: [
            { name: "Player1", username: "fangs_player1", matches: 480, winrate: "50%" },
            { name: "Player2", username: "fangs_player2", matches: 520, winrate: "53%" },
            { name: "Player3", username: "fangs_player3", matches: 490, winrate: "51%" },
            { name: "Player4", username: "fangs_player4", matches: 510, winrate: "52%" },
            { name: "Player5", username: "fangs_player5", matches: 500, winrate: "50%" }
        ]},
        team2: { name: "salafad", players: [
            { name: "Player1", username: "sala_player1", matches: 470, winrate: "49%" },
            { name: "Player2", username: "sala_player2", matches: 530, winrate: "54%" },
            { name: "Player3", username: "sala_player3", matches: 450, winrate: "48%" },
            { name: "Player4", username: "sala_player4", matches: 540, winrate: "55%" },
            { name: "Player5", username: "sala_player5", matches: 500, winrate: "51%" }
        ]},
        status: "upcoming",
        server: "TBD",
        map: "TBD",
        type: "5v5 - EU"
    },
    3: {
        id: 3,
        team1: { name: "SALAFAD", players: [
            { name: "Player1", username: "sala_player1", matches: 470, winrate: "49%" },
            { name: "Player2", username: "sala_player2", matches: 530, winrate: "54%" },
            { name: "Player3", username: "sala_player3", matches: 450, winrate: "48%" },
            { name: "Player4", username: "sala_player4", matches: 540, winrate: "55%" },
            { name: "Player5", username: "sala_player5", matches: 500, winrate: "51%" }
        ]},
        team2: { name: "CRACKHEADS", players: [
            { name: "Player1", username: "crack_player1", matches: 520, winrate: "51%" },
            { name: "Player2", username: "crack_player2", matches: 480, winrate: "49%" },
            { name: "Player3", username: "crack_player3", matches: 550, winrate: "54%" },
            { name: "Player4", username: "crack_player4", matches: 420, winrate: "47%" },
            { name: "Player5", username: "crack_player5", matches: 500, winrate: "52%" }
        ]},
        status: "upcoming",
        server: "TBD",
        map: "TBD",
        type: "5v5 - EU"
    }
};

// Get match ID from URL parameter
function getMatchId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load match data and update page
function loadMatchData() {
    const matchId = getMatchId();
    const match = MATCHES_DB[matchId];
    
    if (!match) {
        document.body.innerHTML = '<h1 style="color:white;text-align:center;margin-top:100px;">Match not found</h1>';
        return;
    }
    
    // Update team names
    document.getElementById('team1-name').textContent = match.team1.name;
    document.getElementById('team2-name').textContent = match.team2.name;
    
    // Update match info
    document.getElementById('match-type').textContent = match.type;
    document.getElementById('server-region').textContent = match.server;
    document.getElementById('map-name').textContent = match.map;
    
    // Handle match status
    const statusEl = document.getElementById('match-status');
    const team1ScoreEl = document.getElementById('team1-score');
    const team2ScoreEl = document.getElementById('team2-score');
    
    if (match.status === 'upcoming') {
        statusEl.textContent = 'UPCOMING';
        statusEl.style.background = '#4dd9ff';
        team1ScoreEl.textContent = '-';
        team2ScoreEl.textContent = '-';
    } else if (match.status === 'finished') {
        statusEl.textContent = 'FINISHED';
        statusEl.style.background = '#e76f51';
        team1ScoreEl.textContent = match.score1 || '0';
        team2ScoreEl.textContent = match.score2 || '0';
    }
    
    // Update roster headers
    document.querySelectorAll('.roster-header')[0].textContent = match.team1.name + ' Players';
    document.querySelectorAll('.roster-header')[1].textContent = match.team2.name + ' Players';
    
    // Load player cards (simplified version)
    document.getElementById('team1-players').innerHTML = match.team1.players.map(p => createPlayerCard(p)).join('');
    document.getElementById('team2-players').innerHTML = match.team2.players.map(p => createPlayerCard(p)).join('');
}

function createPlayerCard(player) {
    const initial = player.name.charAt(0).toUpperCase();
    return `
        <div class="player-card">
            <div class="player-avatar">${initial}</div>
            <div class="player-info">
                <div class="player-name">${player.name}</div>
                <div class="player-username">@${player.username}</div>
            </div>
            <div class="player-stats">
                <div class="stat-item">
                    <div class="stat-label">Matches</div>
                    <div class="stat-value">${player.matches}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Win Rate</div>
                    <div class="stat-value">${player.winrate}</div>
                </div>
            </div>
        </div>
    `;
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMatchData);
} else {
    loadMatchData();
}
