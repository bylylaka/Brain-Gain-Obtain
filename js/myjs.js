$(document).ready(function(){

  $("#submit").click(function(a){
    if($("#name").val()=="" || $("#mail").val()=="" || $("#number").val()=="" || $("#bio").val()=="")
    {
    a.preventDefault();
    alert("Заполни поля, долбаёб!");

    if($("#name").val()=="")
    $("#name").css("border", "2px solid red");
    else {
      $("#name").css("border", "none");
    }

    if($("#mail").val()=="")
    $("#mail").css("border", "2px solid red");
    else {
      $("#mail").css("border", "none");
    }

    if($("#number").val()=="")
    $("#number").css("border", "2px solid red");
    else {
      $("#number").css("border", "none");
    }

    if($("#bio").val()=="")
    $("#bio").css("border", "2px solid red");
    else {
      $("#bio").css("border", "none");
    }
  }
  });

});
