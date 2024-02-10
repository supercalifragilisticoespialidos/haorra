var usuario=localStorage.getItem("nombre")
var ingresos=localStorage.getItem("ingresos")  
var gastos3 =0 
var ingresos3 =0
document.getElementById("nombre").innerHTML = usuario
document.getElementById("dinero").innerHTML = ingresos


function gastos(){
    gastos3 = document.getElementById("campo3").value
    document.getElementById("dinero2").innerHTML =ingresos-gastos3
}
function gastos(){
    ingresos3 = document.getElementById("campo4").value
    document.getElementById("dinero2").innerHTML =ingresos+gastos3
}
