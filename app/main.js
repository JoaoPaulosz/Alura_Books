let livros = buscaLivros()

async function buscaLivros(){
    let requisicaoLivros = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    livros = await requisicaoLivros.json();
    livros = aplicaDesconto(livros)
    exibirLivrosNaTela(livros)
}