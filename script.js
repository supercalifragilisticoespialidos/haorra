function pantalla_guardado() {
    var campo1 =document.getElementById("campo1").value
    var campo2 =document.getElementById("campo2").value
    if (campo1=="") {
   alert("ingresa tu nombre")
    }
    if (campo2=="") {
        window.location="index.html"
        alert("ingresa tu dinero")
    }else {
        window.location="guardado.html"
        localStorage.setItem("nombre",campo1)
        localStorage.setItem("ingresos",campo2)
    }
}