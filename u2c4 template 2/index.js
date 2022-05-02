// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myfunction);
var myTeam = JSON.parse(localStorage.getItem("schedule")) || []



function myfunction(event){
    event.preventDefault();

    var teamObj = {
        matchs: masaiForm.matchNum.value,
        team1: masaiForm.teamA.value,
        team2: masaiForm.teamB.value,
        date: masaiForm.date.value, 
        ven: masaiForm.venue.value
    }

    myTeam.push(teamObj)
    localStorage.setItem("schedule" ,JSON.stringify(myTeam));
    window.location.href="matches.html"
}

