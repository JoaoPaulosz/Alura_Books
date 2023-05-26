let btnFiltro = document.querySelectorAll('.btn')
btnFiltro.forEach(btn => {
    btn.addEventListener('click', filtrarCategoria)
})

function filtrarCategoria(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria == categoria)
    exibirLivrosNaTela(livrosFiltrados)
}