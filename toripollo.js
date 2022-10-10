var LandraBrava = "menol de calacas la landra tan brava"
console.log(LandraBrava)
var números = [23, 43, 10, 3, 9, 5, 13, 12, 65]
var CuentaNúmeros = números.forEach(function(número, i) {console.log(`el número ${número} se encuentra en el indice ${i}`);},)
console.log(números.push(56, 34, 23, "A", "C", "H"))

var Conteo = números.findIndex(function(número) {return número === 65})
console.log(Conteo)


console.log(números.fill(9,2,7))

var SoQue = ["lala", "poo", "tinki", "winki", "tele", "tubbie", "satanicus"]
console.log(SoQue.fill("popo",1,6))

SoQue.push(" brutus mensus cosos esus")
console.log(SoQue)
SoQue.pop()
console.log(SoQue)

var Contar = [23, 34, 45, 56, 67, 78, 89, 90]
Contar.push("GF", "DF", 34, 12, 23)
Contar.push(12, 323, 34)
console.log(Contar)

Contar.pop()
console.log(Contar)


var AprendiendoCarajos = [
    {lala: 45},
    {lele: 67},
    {lili: 23}
]

AprendiendoCarajos.push("I am calling you")
console.log(AprendiendoCarajos)
AprendiendoCarajos.shift()
console.log(AprendiendoCarajos)
AprendiendoCarajos.pop()
console.log(AprendiendoCarajos)
AprendiendoCarajos.unshift("menol", "traición")
console.log(AprendiendoCarajos)

var shadowsFool = ["vcgr", "ghytr", "rtes", "dfe", "dfadsf"]
var Lonely = shadowsFool.slice(1,3)
console.log(Lonely)

var números = [23, 43, 10, 3, 9, 5, 13, 12, 65]
números.fill("H",2,8)
console.log(números)

var números = [23, 43, 10, 3, 9, 5, 13, 12, 65]
números.splice(3,4,"h", "i", "j")
console.log(números)

