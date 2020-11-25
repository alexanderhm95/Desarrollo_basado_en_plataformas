document.write("<table class='table table-striped'><tr><td>Resultado</td></tr>");
var input=parseInt(prompt("ingrese la serie para generar la tabla"));
var resultado="";
for(i=1;i<=12;i++){
    resultado+='<tr><td>'+input+' * ' +i+'</td><td>'+(input*i)+'</td></tr>';

}
document.write(resultado);
document.write("</table>");