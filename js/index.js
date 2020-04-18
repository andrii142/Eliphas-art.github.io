const searchByNameArr = [// json
    {name: "Jonny Walker", birthDate: "1995-12-17"},
    {name: "Andrew", birthDate: "2001-10-29"},
    {name: "Viktor", birthDate: "1998-11-9"},
    {name: "Andrew", birthDate: "2011-05-09"},
];

const getMin = () => {
    let getText = document.getElementById('getMin').value.split(',');

    let  min = +getText[0];
    for (let i = 0; i < getText.length; i++) {
        getText[i] = +getText[i];
        if (getText[i] < min) {

            min = getText[i];

        }
    }
    document.getElementById('minNameResult').innerHTML = min;
};
document.getElementById('getMinButton').addEventListener('click', getMin);


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

const searchByName = () => {
    let getText = document.getElementById('searchByName').value;
    let result = searchByNameArr.filter(item => item.name == getText);
    if (result.length < 1) {
        document.getElementById('searchByNameResult').innerHTML = "Данного пользователя нету в базе данных";
        let p = document.createElement("p");
        p.innerHTML = "Данного пользователя нету в базе данных";
        p.id = "searchByNameResult";
        let afterResult = document.getElementById("searchByNameResult");

        afterResult.replaceWith(p);
    }
    else {
        let textarea = document.createElement("textarea");
        let resultOut = [];
        for (let i =0; i < result.length; i++){
            resultOut.push(result[i].name + ': ' + result[i].birthDate)
        }
        textarea.innerHTML = resultOut;
        textarea.id = "searchByNameResult";
        let afterResult = document.getElementById("searchByNameResult");
        afterResult.replaceWith(textarea);
    }
    console.log(result);
};

document.getElementById('searchByNameButton').addEventListener('click', searchByName);
