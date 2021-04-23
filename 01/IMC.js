const data = {
    nome = "Carlos",
    peso = 84,
    altura = 1.88
};

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log("Carlos está acima do peso!");
} else (imc < 29.9); {
    console.log("Carlos não está acima do peso");
}