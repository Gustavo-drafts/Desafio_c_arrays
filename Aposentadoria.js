const arr = {
    nome: "Marcelo",
    sexo: "M",
    idade: 68,
    contribuição: 43
};

tempoContrib = (valor1, valor2) => {
    const res = arr.idade + arr.contribuição;
    const message = {
        pode: ", voçê já pode se aposentar!",
        nao: ", voçê ainda não pode se aposentar!"
    };

    if (res >= 85 && arr.sexo == "F") {
        console.log(arr.nome + message.pode);
    } else if (res >= 95 && arr.sexo == "M") {
        console.log(arr.nome + message.pode);
    } else {
        console.log(arr.nome + message.nao);
    };

    return (valor1 + valor2)
}

tempoContrib();






// const total = 

// const apoMasc = [arr.idade] + [arr.contribuição] >= 95 || arr.sexo == "M" == true 
// const apoFem = [arr.idade] + [arr.contribuição] >= 85 || arr.sexo == "F" == true

// apoFem ?  
// console.log(arr.nome + ", voçê pode se aposentar!") :

