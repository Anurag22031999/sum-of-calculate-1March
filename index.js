function Calculate() {

  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  
  num1_parsed = parseInt(num1);    
  num2_parsed = parseInt(num2);
  
  
 //console.log((!(isNaN(num1_parsed))).toString() + " " + num1_parsed);
 //console.log((!(isNaN(num2_parsed))).toString() +  " " + num2_parsed);

  if (!(isNaN(num1_parsed)) && !(isNaN(num2_parsed))){
  var total = num1_parsed + num2_parsed;
  alert("The total sum of your numbers are: " + total);
  
  } else {
alert("Wrong input!!!");
    return false;        
  }


}
<input id="num1" />
<input id="num2" />
<button onclick="Calculate()">Calculate</button>
