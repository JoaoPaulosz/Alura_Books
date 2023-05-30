let btnFiltro = document.querySelectorAll('.btn')
btnFiltro.forEach(btn => btn.addEventListener('click', filtrarCategoria))

function filtrarCategoria(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel'? FiltraPorDisponibilidade(): FiltrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria =='disponivel'){
        const valorTotal = calculaValorTotalDeLivrosDisponiveis(livrosFiltrados)
        mostraTotalizador(valorTotal)
    }
    
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function FiltraPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function mostraTotalizador(valorTotal){
    campoTotalizadoDeLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
