/*
    O que precisamos fazer? - Quando clicarmos no bbotão de troca de tema temos que alterar
    a cor do tema da página para as cores do tema claro ou do tema escuro

    - Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no
    bory para que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua
        -passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        -passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
        -passo 3 - dar um jeito de indentificar o clique do usuário no botão de troca de tema
        -passo 4 - adicionar a classe modo escuro no body
        -passo 5 - trocar a imagem do botão de alterar tema para Lua

    Objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro Sol
        -passo 6 - verificar se o body já tem o modo-escuro
        -passo 7 - remover a classe do modo-escuro do body
        -passo 8 - trocar a imagem do botão de alterar tema para Sol
*/

//-passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//-passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//-passo 3 - dar um jeito de indentificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    
    //-passo 6 - verificar se o body já tem o modo-escuro
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroAtivo) {
    //-passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }else{
    //-passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    //passo 5 -trocar a imagem do botão de alterar tema para Lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }
    });