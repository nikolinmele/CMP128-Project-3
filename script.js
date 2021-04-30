//Name: Nikolin Mele
//Date Created: 04/21/2021
//Date modified: 04/29/2021

function insert(value){
  var displayView = document.getElementById("display");
  if(displayView.value == "Error")
    displayView.value = value;
  else
    displayView.value+=value;
}

function clean(){
  document.getElementById("display").value = "";
}

function equal(){
  var displayView = document.getElementById("display");
  try{
    var answer = eval(displayView.value);
  }catch{
    var answer = "Error";
  }
  displayView.value = answer;
}