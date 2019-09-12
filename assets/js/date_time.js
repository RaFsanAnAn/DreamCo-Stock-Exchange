 function displayTime () {
    var r =1000;
    time = setTimeout('showdate()', r);
  }

   function showdate(){
  var d = new Date();
document.getElementById("demo").innerHTML = d;
displayTime();

}