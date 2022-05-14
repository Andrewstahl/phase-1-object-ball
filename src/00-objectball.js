function gameObject() {
   return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7 
        }, 
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15 
        }, 
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5 
        }, 
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise, Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        }, 
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        }, 
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0 
        }, 
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12
        }
      }
    }
  }
}

// console.log(gameObject());

function numPointsScored(player) {
  let game = gameObject();
  debugger
  for (let team in game) {
    debugger
    if (Object.keys(game[team].players).indexOf(player) > -1) {
      return game[team].players[player].points;
    }
  }
}

function shoeSize(player) {
  let game = gameObject();
  debugger
  for (let team in game) {
    debugger
    if (Object.keys(game[team].players).indexOf(player) > -1) {
      return game[team].players[player].shoe;
    }
  }
}

function teamColors(teamParameter) {
  let game = gameObject();
  debugger
  for (let team in game) {
    debugger
    if (team === teamParameter) {
      return game[team].colors;
    }
  }
}

function teamNames() {
  let game = gameObject();
  let allTeamNames = [];
  // debugger
  for (let team in game) {
    // debugger
    allTeamNames.push(game[team].teamName)
  }
  return allTeamNames;
}

function playerNumbers(teamParameter) {
  let game = gameObject();
  let teamNumbers = [];
  debugger
  for (let team in game) {
    debugger
    if (game[team].teamName === teamParameter) {
      for (player in game[team].players) {
        debugger
        teamNumbers.push(game[team].players[player].number);
      }
    }
  }
  return teamNumbers;
}

function playerStats(player) {
  let game = gameObject();
  debugger
  for (let team in game) {
    debugger
    if (Object.keys(game[team].players).indexOf(player) > -1) {
      return game[team].players[player];
    }
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let biggestShoeSize = -Infinity
  let rebounds = 0;
  let playerName = "";
  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].shoe > biggestShoeSize) {
        biggestShoeSize = game[team].players[player].shoe;
        rebounds = game[team].players[player].rebounds
        playerName = player;
      }
    }
  }
  return `N: ${playerName} - S: ${biggestShoeSize} - R: ${rebounds}`
}

function mostPointsScored() {
  let game = gameObject();
  let playerName;
  let pointsScored = -Infinity;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > pointsScored) {
        playerName = player;
      }
    }
  }

  return playerName
}

function mostPointsScored() {
  let game = gameObject();
  let playerName;
  let pointsScored = -Infinity;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > pointsScored) {
        playerName = player;
      }
    }
  }

  return playerName
}

function winningTeam() {
  let winningTeamName;
  let winningTeamPoints = -Infinity;
  let currentTeamPoints;
  let game = gameObject();
  for (let team in game) { 
    debugger
    currentTeamPoints = 0;
    for (let player in game[team].players) {
      debugger
      currentTeamPoints += game[team].players[player].points;
    }
    debugger
    if (currentTeamPoints > winningTeamPoints) {
      winningTeamName = game[team].teamName;
      winningTeamPoints = currentTeamPoints;
    }
  }
  return winningTeamName;
}