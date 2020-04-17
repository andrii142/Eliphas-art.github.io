const getMin = () => {
    let getText = document.getElementById('getMin').value.split(',');

    let  min = +getText[0];
    for (let i = 0; i < getText.length; i++) {
        getText[i] = +getText[i];
        if (getText[i] < min) {
            min = getText[i]
        }
    }
    console.log('Минимальное число, которое вы ввели: ' + min);
};
document.getElementById('getMinButton').addEventListener('click', getMin);
