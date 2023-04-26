function solution(number, k) {
    number = number.split("");
    const newNumber = [];
    for (let i =0; i<number.length; i++){
        while (newNumber.length > 0 && newNumber[newNumber.length-1] < number[i] && k > 0){
            newNumber.pop(); k--;
        }
        newNumber.push(number[i]);
    }
    while(k-- > 0) newNumber.pop();
    return newNumber.join('');
}