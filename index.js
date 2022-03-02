function Calculate() {
  var num1 = document.getElementById("num1").value;

  var num2 = document.getElementById("num2").value;
  if( !num1 || !num2 ){
     alert("please enter values for num1 and num2");
  } 
  var total = eval(`${num1}+${num2}`);
  if( isNaN(total) ){
     alert("Wrong input!!!");
     return false;    
  }
  alert("The total sum of your numbers are: " + total);
}
