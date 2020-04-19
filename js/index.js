const searchByNameArr = [
    {name: "Jonny Walker", birthDate: "1995-12-17"},
    {name: "Andrew", birthDate: "2001-10-29"},
    {name: "Viktor", birthDate: "1998-11-9"},
    {name: "Andrew", birthDate: "2011-05-09"},
    {name: "Nikitchenko", birthDate: "2011-05-09"},
];
const replaceHtmlDom = (tegName, id, content, idReplace = id) => {
    const teg = document.createElement(tegName);
    teg.id = id;
    teg.innerHTML = content;
    const afterResult = document.getElementById(idReplace);
    afterResult.replaceWith(teg);
};

const getMin = () => {
    const getText = document.getElementById('getMin').value.split(',');
    let  min =+ getText[0];
    for (let i = 0; i < getText.length; i++) {
        getText[i] = +getText[i];
        if (getText[i] < min) {
            min = getText[i];
        }
    }
    replaceHtmlDom("p","result__content", min)
};

const getEven = () => {
    const getText = document.getElementById('getEven').value.split(',');
    const array = [];
    for (let i = 0; i < getText.length; i++)
        if (Math.ceil(getText[i] / 2) == getText[i] / 2) {
            if (getText[i])
                array.push(getText[i]);
        }
    replaceHtmlDom("p","result__content",array)
};

const searchByName = () => {
    const getText = document.getElementById('searchByName').value;
    const result = searchByNameArr.filter(item => item.name == getText);
    if (result.length < 1) {
        replaceHtmlDom("p","result__content","Данного пользователя нету в базе данных")
    }
    else {
        const resultOut = [];
        for (let i=0; i < result.length; i++){
            resultOut.push(result[i].name + ': ' + result[i].birthDate+ ", \n")
        }
        replaceHtmlDom(resultOut.length > 1 ? "textarea" : "p", "result__content", resultOut);
    }
    console.log(result);
};

document.getElementById('getMinButton').addEventListener('click', getMin);
document.getElementById('getEvenButton').addEventListener('click', getEven);
document.getElementById('searchByNameButton').addEventListener('click', searchByName);
