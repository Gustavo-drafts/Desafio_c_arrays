const devs = [
    { name: "Carlos", techs: ["HTML", "CSS"] },
    { name: "Jasmine", techs: ["javaScript", "CSS"] },
    { name: "Tuane", techs: ["HTML", "Node.js"] }
];

for (let dev of devs) {
    console.log(`${dev.name} trabalha com ${dev.techs.join}`);
}









/* Função com For  */

// function seraQueUsa() {
//     for (let i = 0; i < devs.length; i++) {
//         const dev = devs[i];

//         if (dev.techs.includes('css')); {
//             console.log(`Os devs ${devs.name} trabalha com CSS`);
//         }
//     }
// }

/* Estrutura if inline */

// let i;
// for (i = devs.length; i < 3; devs.length++) {

//     devs.techs === "CSS" ?
//         console.log(`O dev ${devs.name} trabalha com CSS`) :
//         console.log(`${devs.techs}`);

// }
// console.log(`${devs.techs}`);



// console.log(`${devs[0].name}`);

// console.log(devs[0].techs[1]);