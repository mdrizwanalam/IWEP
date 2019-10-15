var tim;

var min = 59;
var sec = 60;
var f = new Date();
function f1() {
  f2();
  document.getElementById("starttime").innerHTML =
    "Your started your Exam at " + f.getHours() + ":" + f.getMinutes();
}
function f2() {
  if (parseInt(sec) > 0) {
    sec = parseInt(sec) - 1;
    document.getElementById("showtime").innerHTML =
      "Your Left Time  is :" + min + " Minutes ," + sec + " Seconds";
    tim = setTimeout("f2()", 1000);
  } else {
    if (parseInt(sec) == 0) {
      min = parseInt(min) - 1;
      if (parseInt(min) == 0) {
        clearTimeout(tim);
        location.href = "default5.aspx";
      } else {
        sec = 60;
        document.getElementById("showtime").innerHTML =
          "Your Left Time  is :" + min + " Minutes ," + sec + " Seconds";
        tim = setTimeout("f2()", 1000);
      }
    }
  }
}
