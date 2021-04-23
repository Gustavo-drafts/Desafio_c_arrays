const dev = {

    nome: "Gustavo",
    idade: "32",
    tecnologias: [
        {
            nome: "JS", 
            especialidade: "Web" 
        },
        {
            nome: "HTML", 
            especialidade: "Web" 
            
        },
        {
            nome: "CSS", 
            especialidade: "Web" 
            
        },
        {
            nome: "Java", 
            especialidade: "Desktop" 
            
        },
        {
            nome: "React Native", 
            especialidade: "Mobile" 
            
        },
        {
            nome: "C#", 
            especialidade: "Desktop" 
            
        }
    ]
};

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}`);