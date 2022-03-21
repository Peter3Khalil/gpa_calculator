var ar = ['...', 'A', '-A', 'B+', 'B', 'C+', 'C', 'D', 'F'];
var value = [-1, 4, 3.67, 3.33, 3, 2.67, 2.33, 2, 0];
//Drawing table
for (var i = 1; i < 11; i++) {
    var x = "<tr><td>" + i + "</td>" + select(i) + "<td><input type='number' id='" + i + i + "'></td>" + "</tr>";
    document.getElementById("table").innerHTML += x;
}
//***************************************

//*******************************************
function option(c = "") {

    var g = "";
    for (var j = 0; j < ar.length; j++)
        g += "<option value='" + ar[j] + "'>" + ar[j] + "</option>";
    return g;
}

function select(c) {
    return "<td><select id='" + c + "'>" + option(c) + "</select></td>";
}
//***************************************************

function sumCredit() {
    var x, c = 0;
    for (var i = 1; i < 11; i++) {
        x = document.getElementById("" + i + i).value;
        if (x != "")
            c += Number(x);
    }
    return c;
}
function succeededHours(){
    var c=0;
    for(var i=1;i<11;i++){
        var y = document.getElementById(""+i+i).value;
        var x = document.getElementById(i).value;
        if(x!='F')
            c+=Number(y);
    }
    return c;
}
function getValue(c) {
    for(var i=0;i<ar.length;i++){
        if(c==ar[i])
            return value[i];
    }
}

function creditPoint() {
   
}

function test() {
    var total=0;
     for(var i =1;i<11;i++){
         var x = document.getElementById(i).value;
         var y = document.getElementById(""+i+i).value;
         if(x!="..."&&y!=""){
             total+=Number(getValue(x)*y);
         }
     }
    var result=total/sumCredit();
    document.getElementById("result1").innerHTML=result.toFixed(2);
    document.getElementById("result3").innerHTML=sumCredit();
    document.getElementById("result4").innerHTML=succeededHours();
    var s = document.getElementById("succeededHours").value;
    var g = document.getElementById("preGpa").value;
    var up = result * succeededHours() +(s*g);
    var down = succeededHours()+Number(s);
    var cgpa = up/down;
    document.getElementById("result2").innerHTML = cgpa.toFixed(2);
    
}
function reset(){
    for(var i =1;i<11;i++){
        document.getElementById(i).value = "...";
        document.getElementById(""+i+i).value = "";
    }
     document.getElementById("result1").innerHTML=0;
    document.getElementById("result3").innerHTML=0;
    document.getElementById("result4").innerHTML=0;
    document.getElementById("result2").innerHTML = 0;
    document.getElementById("succeededHours").value="";
    document.getElementById("preGpa").value="";
}