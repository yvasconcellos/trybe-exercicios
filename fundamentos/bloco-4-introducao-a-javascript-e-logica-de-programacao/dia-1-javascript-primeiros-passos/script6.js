const pecaXadrez = "Rainha";

if (pecaXadrez.toLowerCase() === "bispo") {
    console.log(pecaXadrez + ": Sem restrição de número de casas, mas somente no sentido diagonal");
} else if (pecaXadrez.toLowerCase() === "rei") {
    console.log(pecaXadrez + ": Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa."); }
    else if (pecaXadrez.toLowerCase() === "rainha") {
        console.log(pecaXadrez + ": Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.");
    } else if(pecaXadrez.toLowerCase() === "torre") {
        console.log(pecaXadrez + ": pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).");
    } else if (pecaXadrez.toLowerCase() === "cavalo") {
        console.log(pecaXadrez + ": Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.");
    } else if (pecaXadrez.toLowerCase() === "peão") {
        console.log(pecaXadrez + ": Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal."); 
    } else {
        console.log("Erro: Peça Invalida");
    };