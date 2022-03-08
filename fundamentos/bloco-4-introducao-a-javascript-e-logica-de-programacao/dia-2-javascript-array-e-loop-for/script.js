let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 22];
let soma = 0;
let mediaAritmetica = 0

for (let index = 0; index<numbers.length; index += 1) {
    console.log(numbers[index]);
    soma = (numbers[index] + soma);
    mediaAritmetica = soma/(index+1);
}
console.log("a soma dos elementos é: ",soma);
console.log("a média dos elementos é: ",mediaAritmetica);
