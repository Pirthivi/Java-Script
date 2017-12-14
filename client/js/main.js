let DATA = [];
const Request = new XMLHttpRequest();
load();
function load(){
Request.open("GET","http://localhost:3000/data");
Request.send();
Request.onload= (function(){DATA= (JSON.parse(Request.responseText));
render();
})};
function render(){
    for(var i in DATA){
document.getElementById("table").innerHTML+= "<tr><td>"+DATA[i].firstname+"</td><td>"+DATA[i].lastname+"</td><td>"+DATA[i].contact+"</td><td>"+DATA[i].email+"</td></tr>";
}}