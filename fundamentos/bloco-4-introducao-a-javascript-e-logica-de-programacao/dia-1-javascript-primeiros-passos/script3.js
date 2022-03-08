const a = 17;
const b = 17;
const c = 17;

if (a>b && a>c) {
    console.log("o maior valor é " + a);
}   else if (b>a && b>c) {
    console.log("o maior valor é " + b);
} else if (c>a && c>b) {
    console.log("o maior valor é " + c);
} else {
    console.log("Os valores são iguais");
}