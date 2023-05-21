function aplicaDesconto(livros){
    const reducao = 0.3
    let livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * reducao)}
    })
    return livrosComDesconto
}