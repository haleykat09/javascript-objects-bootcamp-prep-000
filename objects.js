var playlist = {maroon5: "Sunday Morning"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"

  return playlist
}

functino removeFromPlaylist (playlist, artistName) {
  delete playlist['Phil Ochs']

  return playlist
}
