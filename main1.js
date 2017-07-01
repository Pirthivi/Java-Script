function StringToArray1() {
  var x = document.getElementById('input1').value;
  // var work ="I-am-a-Mechanical-Engineer";
  var xarray = x.split(" ");
  // var workary =work.split("-");
  //
  // document.getElementById('para1').innerHTML=intro+ "<br>" + work;
  // document.getElementById("para").innerHTML= introary+"<br>" + workary;
  // document.write(intro+work);
document.getElementById('para1').innerHTML=xarray;
}
function StringToArray2(){
  var x=document.getElementById("input2").value;
  var xarray = x.split("-")
  document.getElementById('para2').innerHTML=xarray;
}

function StringToArray3() {
  var intro = "My name is Pirthivi"
  var work ="I-am-a-Mechanical-Engineer";
  var introary = intro.split(" ");
  var workary =work.split("-");

  document.getElementById('para3').innerHTML=intro+ "<br>" + work;
  document.getElementById("para4").innerHTML= introary+"<br>" + workary;



}

document.write(StringToArray3());
