const mensagensDivertidas =
[
 "Sabe qual o remédio que vai na padaria por você? O Buscopan."
 "Socorro, o lensol tá mi matano! Vc está em mal lensois"
]

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagemDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function () {
    //Math.floor(x) retornna o menor número inteiro dentre o número "x".
    //Math.random() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = [Math.floor(Math.random() * mensagensDivertidas.length)]
    
    mensagemDivertida.textContent = mensagemAleatoria;
})