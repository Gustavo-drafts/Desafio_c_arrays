const user = {
    nome: "Gustavo",
    cor: "Roxo",
    foco: "Programação",

    empresa: {
        nome: "Rocketseat",
        endereco: "Rua Inhoaíba",
        numero: "299"
    }
};

console.log("A empresa", user.empresa.nome, "está localizada em", user.empresa.endereco, user.empresa.numero);