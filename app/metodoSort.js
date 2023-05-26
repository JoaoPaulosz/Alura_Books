let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenaListaPreco)

function ordenaListaPreco(){
    const listaOrdenadaPorPreco = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(listaOrdenadaPorPreco)
}