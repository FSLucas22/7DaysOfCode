let name = prompt("Qual o seu nome?");
let age = prompt("Quantos anos você tem?");
let lang = prompt("Qual linguagem de programação você está estudando?");

let msg = `Olá ${name}, você tem ${age} anos e já está aprendendo ${lang}!`;
alert(msg);


while (true){
    let like = prompt(`Você gosta de estudar ${lang}? Responda com o número 1 para SIM ou 2 para NÃO.`);
    if (like === "1") {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
        break;
    } else if (like === "2") {
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
        break;
    } else if (like === null){
        alert("Já vai embora? Certo então. Volte sempre e boa sorte nos estudos!");
        break;
    } else{
        alert("Não entendi... Responda com 1 ou 2, por gentileza.");
    }
}