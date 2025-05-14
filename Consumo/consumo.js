let consumoMedio = (distanciaPercorrida, combustivelGasto) => (distanciaPercorrida / combustivelGasto) 

let consumoMedio1 = consumoMedio(500, 35.0)
let consumoMedio2 = consumoMedio(2254, 124.4)
let consumoMedio3 = consumoMedio(4554, 464.6)

console.log(`${consumoMedio1.toFixed(3)}km/l`)
console.log(`${consumoMedio2.toFixed(3)}km/l`)
console.log(`${consumoMedio3.toFixed(3)}km/l`)