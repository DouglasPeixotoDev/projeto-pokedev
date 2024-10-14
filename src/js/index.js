const listaPokedevs = document.querySelectorAll(".pokedev");

listaPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        desativarMarcadorListagem();
        
        ativarMarcadorListagem(idPokedevSelecionado);
    })
})


function ativarMarcadorListagem(idPokedevSelecionado) {
    const pokedevSelecionadoListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoListagem.classList.add("ativo");
}

function desativarMarcadorListagem() {
    const pokedevAtivoListagem = document.querySelector(".ativo");
    pokedevAtivoListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoParaAbrir = document.getElementById(idPokedevParaAbrir);
    cartaoParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

