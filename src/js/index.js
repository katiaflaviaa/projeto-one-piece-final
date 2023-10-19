const personagem = document.querySelectorAll(".personagem");
const botoes = document.querySelectorAll('.botao')

botoes.forEach((botao, indice) => {
    botao.addEventListener("click",() =>{
       desselecionarBotao();
       
        botao.classList.add("selecionado");

        desselecionarpersonagem();
        
        personagem[indice].classList.add("selecionado");

    });  
})

function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
