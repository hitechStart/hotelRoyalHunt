$(document).ready(function () {


    $("#otroBoton").click(function () {
      
        document.getElementById("otrCap").style.display = "none";
        document.getElementById("capa").style.display= "none";
        document.getElementById("otraCap").style.display= "none";
        document.getElementById("trCap").style.display = "none";
        document.getElementById("otraCapa").style.display= "block";
        $("#otraCapa").load('./imprimirHuesped.jsp');
        
    });
});