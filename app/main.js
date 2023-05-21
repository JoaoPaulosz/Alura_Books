let livros = buscaLivros()

async function buscaLivros(){
    let requisicaoLivros = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    livros = await requisicaoLivros.json();
    exibirLivrosNaTela(livros)
}

var section = document.getElementById('livros');

function exibirLivrosNaTela(listaLivros){
    listaLivros.forEach(livro => {
        section.innerHTML += 
        `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}