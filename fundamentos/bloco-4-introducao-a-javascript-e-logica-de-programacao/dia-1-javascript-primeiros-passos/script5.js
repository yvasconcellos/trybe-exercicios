const a = 20;
const b = 80;
const c = 80;

const soma = a+b+c;
const angulosPositivos = a>0 && b>0 && c>0;

if (angulosPositivos) {
    if (soma == 180) {
    console.log(true);
} else {
    console.log(false);
}
} else {
    console.log("Ângulos não válidos");
}