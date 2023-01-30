function solution(e, starts) {
    let answer = [];
    const counts = new Array(e+1).fill(0);
    const maxNums = new Array(e+1)
    
    for(let i=1; i <= e; i++) {
        for (let j=1; j <= e/i; j++) {
            counts[i*j] += 1;
        }
    }
    let maxCnt = 0;
    let maxNumber = 0;
    for(let i=e; i>=1; i--) {
        if (counts[i] >= maxCnt){
            maxCnt = counts[i];
            maxNumber = i;
        }
        maxNums[i] = maxNumber;
    }
    starts.forEach(n => {
        answer.push(maxNums[n])
    })
    return answer;
}