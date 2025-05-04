// Função para calcular o volume da esfera
function calcularVolumeEsfera(raio) {
    const pi = 3.14159;
    const volume = (4.0 / 3) * pi * Math.pow(raio, 3); // Cálculo do volume
    return volume;
}

// Leitura do valor do raio
const raio = parseFloat(prompt("Digite o valor do raio da esfera:"));

// Cálculo do volume
const volume = calcularVolumeEsfera(raio);

// Saída formatada do resultado
console.log(`VOLUME = ${volume.toFixed(3)}`); //
