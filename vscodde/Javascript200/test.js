let a = 10;
let b = 60;

const foo = (a) => {
    a = 100;

    a+b;
}

console.log(foo(a));
console.log(b + a++);