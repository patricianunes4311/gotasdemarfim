let indiceImagem = 0; // A primeira imagem (índice 0)

function moverCarrossel(direcao) {
    const imagens = document.querySelectorAll('.carrossel-imagens .imagem');
    const totalImagens = imagens.length;
    
    // Atualiza o índice da imagem atual com base na direção
    indiceImagem += direcao;

    // Se o índice for maior ou igual ao total de imagens, volta para a primeira imagem
    if (indiceImagem >= totalImagens) {
        indiceImagem = 0;  // Vai para a primeira imagem
    }

    // Se o índice for menor que 0, vai para a última imagem
    if (indiceImagem < 0) {
        indiceImagem = totalImagens - 1;  // Vai para a última imagem
    }

    // Move o carrossel para a nova imagem
    const novoDeslocamento = -indiceImagem * 100;
    document.querySelector('.carrossel-imagens').style.transform = `translateX(${novoDeslocamento}%)`;
}
