var cacaBubu = [
    {principal: "llorones", resultado: "lepe"},
    {principal: "desordenados", resultado: "coñazo"},
    {principal: "llorones", resultado: "agua fria"},
    {principal: "desordenados", resultado: "leones"}
]
var NewCacaBubu = cacaBubu.map(function(cacaBubu) {return cacaBubu.resultado + " merecido pues"})
console.log(NewCacaBubu)

var Comidas = [
{helados: "crema e cacahuate", entrada: "arepa"},
{helados: "agua e coco", entrada: "tequeños de eso"},
{helados: "maní con alcohol", entrada: "guaracha e jipi"},
{helados: "agua e coco", entrada: "miche e teca"}
]
var LaRataCome = Comidas.filter(function(comida) {return comida.helados === "agua e coco"})
console.log(LaRataCome)

var Comidas = [
    {helados: "crema e cacahuate", entrada: "arepa"},
    {helados: "agua e coco", entrada: "tequeños de eso"},
    {helados: "maní con alcohol", entrada: "guaracha e jipi"},
    {helados: "agua e coco", entrada: "miche e teca"}
    ]
    var LaRataCome = Comidas.filter(function(comida) {return comida.helados === "agua e coco"}).map(function(comida) {return comida.entrada})
    console.log(LaRataCome)
   
var Somefood = Comidas.findIndex(function(comida) {return comida.helados === "maní con alcohol"})
console.log(Somefood)

var Comidas = [
    {helados: "crema e cacahuate", entrada: "arepa"},
    {helados: "agua e coco", entrada: "tequeños de eso"},
    {helados: "maní con alcohol", entrada: "guaracha e jipi"},
    {helados: "agua e coco", entrada: "miche e teca"}
    ]

console.log(Comidas.reverse())

var ReversoCarajos = ["allshit", "desoleichon", "basura", "mier", "depre", "miche"]
console.log(ReversoCarajos.reverse())
console.log(ReversoCarajos.lastIndexOf("basura"))

var PedazoDeIdiota = [23, 45, "epale mmgva", [1, 3, "rayos"], 56, ["whaaat", ["chuzaaa", 567]]]
console.log(PedazoDeIdiota.flat(2))


var AnewAlgo = [
    {lala: "que carajos lala le"},
     {lele: "men man mon"},
     {lili: "lap lep lop"}
]
console.log(Array.isArray(AnewAlgo))
console.log(Array.from(AnewAlgo))









