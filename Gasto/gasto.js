function litrosNecessarios(tempo, velocidade) {
    let distancia = tempo * velocidade
    let litros = distancia / 12
    return litros
}

let litrosNecessarios1 = litrosNecessarios(10, 85)
let litrosNecessarios2 = litrosNecessarios(2, 92)
let litrosNecessarios3 = litrosNecessarios(22, 67)
console.log(`${litrosNecessarios1.toFixed(3)}`)
console.log(`${litrosNecessarios2.toFixed(3)}`)
console.log(`${litrosNecessarios3.toFixed(3)}`)