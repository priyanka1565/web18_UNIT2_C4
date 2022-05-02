// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("schedule")) || []
appendData(data)
console.log(data)

function appendData(data){
   data.forEach(function(el){
    let main_div = document.getElementById("tabaledata");
    let div = document.createElement("div");
    main_div.appendChild(div);

    let number = document.createElement("p");
    number.innerHTML = el.matchs;

    div.append(number);

    let main_div1 = document.getElementById("tabaledata1");
    let div1 = document.createElement("div");
    main_div1.appendChild(div1);
    let teama = document.createElement("p");
    teama.innerHTML = el.team1;

    div1.append(teama)


    let main_div2 = document.getElementById("tabaledata2");
    let div2 = document.createElement("div");
    main_div2.appendChild(div2);
  
    let teamb = document.createElement("p");
    teamb.innerHTML = el.team2;

    div2.append(teamb)
    
    let main_div3 = document.getElementById("tabaledata3");
    let div3 = document.createElement("div");
    main_div3.appendChild(div3);
  
    let date = document.createElement("p");
    date.innerHTML = el.date;

    div3.append(date)

    let main_div4 = document.getElementById("tabaledata4");
    let div4 = document.createElement("div");
    main_div4.appendChild(div4);
  
    let venu = document.createElement("p");
    venu.innerHTML = el.ven;

    div4.append(venu)
   
   })

}