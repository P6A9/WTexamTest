var a = prompt("Enter the table border"," ");
document.write("<br/><br/>");
switch(a)
{
  case 0: document.write("<table>");
          break;
  case 1: document.write("<table border=1>");
          break;
  case 2: document.write("<table border=2>");
          break;
  default:document.write("<table border=3>");
}
document.write("<tr>","<th>Car type</th>","<th>Model</th>","<th>Year</th>","</tr>");
document.write("<tr>","<td>type 1</td>","<td>ALto k10</td>","<td>2014</td>","</tr>");
document.write("<tr>","<td>type 2</td>","<td>La Ferrari</td>","<td>2019</td>","</tr>");
document.write("</table>");

var ar= [1,2,"three","four"];
console.log(ar.sort());
