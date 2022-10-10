var CabezadePollo = "los toripollos del tomorow"
console.log(CabezadePollo.toUpperCase() + " que demencia bro dís créizii pípol menool")

var números = [23, 43, 10, 3, 9, 5, 13, 12, 65, 56, 33, 44, 33, 234, 453456]
console.log(números.sort(function(prev,next) {return prev - next}))
console.log(números.join("-"))


var AbecedariusFatis = ["V", "S", "H", "O", "F", "D", "C", "W", "Q"]
console.log(AbecedariusFatis.sort())

var OrdenPues = ["naguará",
"epale",
"chachara",
"pepe",
"carajos"]
console.log(OrdenPues.sort())

var canciones = [
    {name: "Paint it black", track: 5},
     {name: "Desert rose", track: 10},
      {name: "Le pica", track: 4}
]
var NuevosDatos = canciones.some(function(element) {return element.track < 5})
console.log(NuevosDatos)

var InfiniteTotalis = [
    {option: 134},
    {option: 234},
    {option: 322},
    {option: 464},
    {option: 575}
]

var MásInfinito = InfiniteTotalis.some(function(element) {return element.option < 464})
console.log(MásInfinito)

var edades = [
    {name: "Bobo", edad: 23},
    {name: "Ceberro", edad: 24},
    {name: "Lele", edad: 20},
    {name: "Hue", edad: 19},
    {name: "Veivi", edad: 22},
    {name: "Caquin", edad: 18}
]
var students = edades.some(function(valor) {return valor.edad > 20})
console.log(students)
var nombres = edades.some(function(valor) {return valor.name == "Ceberro"})
console.log(nombres)
console.log(edades.join())

var JocusPocus = [
    {wish: "tri", reality: "jaja"},
    {wish: "uán", reality: "keke"},
    {wish: "tri", reality: "jaja"},
    {wish: "uán", reality: "koko"},
    {wish: "tri", reality: "keke"},
    {wish: "faire", reality: "koko"},
    {wish: "faire", reality: "keke"}
]

console.log(JocusPocus.reduce(function(contador, elemento) {if (elemento.reality === "keke") {return contador + 1} else {return contador} }, 0),)

var números = [23, 43, 10, 3, 9, 5, 13, 12, 65, 56, 33, 44, 33, 234, 453456]
var CuentaNúmeros = números.reduce(function(contador, elemento) {return contador + elemento})
console.log(CuentaNúmeros)

