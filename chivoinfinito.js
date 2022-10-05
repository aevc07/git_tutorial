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
    




