let rows = document.querySelector(".table-row");
let numberOfTeamsSelector = document.querySelector("#number");
let names  = document.querySelector(".names");

function generateTeams() {
    let numberOfTeams = numberOfTeamsSelector.value;
    let random = Math.floor(Math.random()*numberOfTeams);

  for (let i = 0; i < numberOfTeams; i++) {
    let col = document.createElement("div");
    col.setAttribute("class", "col-12 col-md-4 col-sm-6 col-lg-3");
    //tables
    let tables = document.createElement("table");
    tables.setAttribute("class", "table");

    //table head
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = "Team" + " " + (i+1);

    //table data
    let tableBody = document.createElement("tbody")
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");

     for(let y=0; y<names.value.length; y++){
        tableData.innerText = names.value;
    }
    
    
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
    
    

    tr.appendChild(td);
    thead.appendChild(tr);
    tables.appendChild(thead);
    tables.appendChild(tableBody)
    col.appendChild(tables);
    rows.appendChild(col);
   
    
  }
}




