// Função para calcular o IMC e classificar
function calcularIMC(nome, peso, altura) 
{
    var alturaMetros = altura / 100;

    var imc = peso / (alturaMetros * alturaMetros);

    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } 
    else if (imc >= 25.0 && imc <= 29.9) {
      
        classificacao = "Excesso de peso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade classe I";
    } 
    else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade classe II";
    } 
    else {
        classificacao = "Obesidade classe III";
    }

    console.log(nome + " - IMC: " + imc.toFixed(2) + " - Classificação: " + classificacao);
}

// Exemplo de uso
calcularIMC("João", 70, 175);

