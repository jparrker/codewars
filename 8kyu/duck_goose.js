function duckDuckGoose(players, goose) {
  const playerMod = goose % players.length
  return playerMod === 0 ? players[players.length-1].name : players[playerMod - 1].name
   
  }