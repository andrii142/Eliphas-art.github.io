const getEven = () => {
    const getText = document.getElementById('getEven').value.split(',');
    const array = [];
    let len = getText.length;
    while (len--)
        if (Math.ceil(getText[len] / 2) == getText[len] / 2) {
            if (getText[len])
                array.push(getText[len]);
        }
    document.getElementById('getEvenResult').innerHTML = array;
};
document.getElementById('getEvenButton').addEventListener('click', getEven);
