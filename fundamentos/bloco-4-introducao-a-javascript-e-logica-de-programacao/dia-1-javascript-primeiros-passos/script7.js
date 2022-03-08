const notaAluno = -48 ;

if (90<=notaAluno && notaAluno<=100) {

    console.log("Sua nota é: A, com um total de acertos de: " + notaAluno + "%.");

} else if (80<=notaAluno && notaAluno< 90) {

    console.log(console.log("Sua nota é: B, com um total de acertos de: " + notaAluno + "%.")); 

}   else if (70<=notaAluno && notaAluno<80) {

        console.log("Sua nota é: C, com um total de acertos de: " + notaAluno + "%.");
    
    } else if (60<=notaAluno && notaAluno<70) {

        console.log("Sua nota é: D, com um total de acertos de: " + notaAluno + "%.");
    
    } else if (50<=notaAluno && notaAluno<60) {

        console.log("Sua nota é: E, com um total de acertos de: " + notaAluno + "%.");
    
    } else if (0<notaAluno && notaAluno<50) {
        console.log("Sua nota é: F, com um total de acertos de: " + notaAluno + "%."); 
    } else {
        console.log("Erro: Nota não pertence ao intervalo: 0 a 100%");
    };