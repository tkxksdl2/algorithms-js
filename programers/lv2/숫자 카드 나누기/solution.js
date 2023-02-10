function solution(arrayA, arrayB) {
    arrayA.sort((a,b) => a-b);
    arrayB.sort((a,b) => a-b);
    const aDiv = getDiv(arrayA[0]);
    const bDiv = getDiv(arrayB[0]);

    return Math.max(getResult(aDiv, arrayA, arrayB), getResult(bDiv, arrayB, arrayA));
}
function getResult(div, same, other) {
    for (d of div) {
        if(same.every((v) => v % d ===0) && !other.some((v) => v % d === 0)) return d;
    }
    return 0;
}
function getDiv(n) {
    const a = []; 
    const b = [];
    for(let i=1; i<= Math.sqrt(n); i++) {
        if (i === Math.sqrt(n)) a.push(i);
        else if (n%i === 0) {
            a.push(n/i);
            b.push(i);
        }
    }
    for (let i=b.length-1; i>=0; i--) a.push(b[i])
    return a
}