function volumeEsfera(raioEsfera){
let volume = (raioEsfera * raioEsfera * raioEsfera) * 3.14159 * (4/3)
return volume
}
let volume1 = volumeEsfera(3)
let volume2 = volumeEsfera(15)
let volume3 = volumeEsfera(1523)

console.log(`VOLUME 1 = ${volume1.toFixed(3)}`)
console.log(`VOLUME 2 = ${volume2.toFixed(3)}`)
console.log(`VOLUME 3 = ${volume3.toFixed(3)}`)