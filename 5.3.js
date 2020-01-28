function setup(){
    var km = milesToKm(26.3)
    println(km);
    var km2 = milesToKm(100)
}

function milesToKm(miles){
var km = miles * 1.6;
return km;
}