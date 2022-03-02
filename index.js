function Calculate() {
  var num1 = document.getElementById("num1").value;

  var num2 = document.getElementById("num2").value;
  num1_parsed = parseFloat(num1);    

  num2_parsed = parseFloat(num2);

  if (isNaN(num1_parsed) || isNaN(num2_parsed) ) {    
     alert("Wrong input!!!");
     return false;    
  }

  var total = num1_parsed + num2_parsed;
  alert("The total sum of your numbers are: " + total);
}
