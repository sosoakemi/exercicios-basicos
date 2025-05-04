// Função para calcular litros gastos
function calcularLitrosGastos(tempo, velocidade) {
    const consumo = 12; // km/L
    const distancia = tempo * velocidade; 
    const litrosGastos = distancia / consumo; 
    return litrosGastos.toFixed(3); 
}
// Função principal para receber entrada e exibir resultado
function main() {
    const entrada = [10, 85]; 
    const [tempo, velocidade] = entrada; 
    const litros = calcularLitrosGastos(tempo, velocidade);
    console.log(litros); 
}

main();