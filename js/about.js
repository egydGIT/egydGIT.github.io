/*
<tr>
    <td>1.</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn-info btn">
                Módosítás
                               </button>
            <button class="btn btn-danger">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </td>
</tr>
*/

let users = [
    {surname: "Arany", firstname: "János", age: 45},
    {surname: "Petőfi", firstname: "Sándor", age: 32},
    {surname: "Kölcsey", firstname: "Ferenc", age: 24},
    {surname: "Ady", firstname: "Endre", age: 42},
    {surname: "Babits", firstname: "Mihály", age: 58},
    {surname: "Benedek", firstname: "Elek", age: 20},
    {surname: "Zelk", firstname: "Zoltán", age: 34},
    {surname: "Weöres", firstname: "Sándor", age: 23},
    {surname: "Madách", firstname: "Imre", age: 40},
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}
let createBuutonGroup = parent => {
    /*
    <div class="btn-group">
        <button class="btn-info btn">
            Módosítás
        </button>
        <button class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    */
   let group = document.createElement("div");
   group.className = "btn-group";

   let btnInfo = document.createElement("button");
   btnInfo.className = "btn-info btn";
   btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

   let btnDanger = document.createElement("button");
   btnDanger.className = "btn btn-danger";
   btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

   group.appendChild(btnInfo);
   group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    // let td = document.createElement("td");
    // td.innerHTML = parseInt(k)+1;
    // tr.appendChild(td);
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createBuutonGroup(tr);
    tableBody.appendChild(tr);
}