// code your solution here
function isWinner(team) {
    return team.result === "W"
}


function superbowlWin(arr) {
    const winner = arr.find(isWinner)
    if (winner === undefined) {return undefined}
    else { return winner.year }

}