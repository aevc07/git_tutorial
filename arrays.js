var CabezadePollo = "los toripollos del tomorow"
console.log(CabezadePollo.toUpperCase() + " que demencia bro dís créizii pípol menool")

var números = [23, 43, 10, 3, 9, 5, 13, 12, 65, 56, 33, 44, 33, 234, 453456]
console.log(números.sort(function(prev,next) {return prev - next}))

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
var NuevosDatos = canciones.some(function(element) {return element = 5})
console.log(NuevosDatos)


