function sumOfMultiplesBelow (x, y) {
    const n = Math.floor((y-1) / x);
    return x * n * (n + 1) / 2;
}

const b = sumOfMultiplesBelow(3, 10);
const c = sumOfMultiplesBelow(5, 10);
const d = sumOfMultiplesBelow(15, 10);

const a = b + c - d;
console.log(a);