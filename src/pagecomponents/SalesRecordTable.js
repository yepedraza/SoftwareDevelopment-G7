let tareas = [
    {materia: "física", detalle: "Hacer el lab, vago de mierda", fecha: new Date(2021, 8, 29)},
    {materia: "Info", detalle: "Hacer el lab,", fecha: new Date(2021, 5, 29)},
    {materia: "Mate", detalle: "Hacer el lab, mkon", fecha: new Date(2021, 4, 29)},
    {materia: "Ciencias", detalle: "Hacer el lab, hermoso", fecha: new Date(2021, 6, 29)},
];
let SalesRecordTable = function(lista){
    let stringTabla = "<tr><th>Materia</th><th>Detalle</th><th>Fecha</th></tr>"
    for (let element of lista){
        let fila = "<tr><td>"
        fila += element.materia;
        fila += "</td>"

        fila += "<td>"
        fila += element.detalle;
        fila += "</td>"

        fila += "<td>"
        fila += element.fecha;
        fila += "</td>"

        fila += "</tr>";
        stringTabla += fila;
        console.log(stringTabla);
    }
    return stringTabla;
};
document.getElementById("table").innerHTML = SalesRecordTable(tareas);