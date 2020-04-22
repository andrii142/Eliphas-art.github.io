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

const getMin1 = (arr) => {
    if(typeof arr !== "object")
        arr = arr.split(',');
    let  min =+ arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    //Добавить ретерн
    return min;
};


const getEven1 = (arr) => {
    if(typeof arr !== "object")
        arr = arr.split(',');
    const array = [];
    for (let i = 0; i < arr.length; i++)
        if (Math.ceil(arr[i] / 2) == arr[i] / 2) {
            if (arr[i])
                array.push(arr[i]);
        }
    return array
};
const searchByName1 = (arr) => {
    const result = searchByNameArr.filter(item => item.name == arr);
    if (result.length < 1) {
        return ("Данного пользователя нету в базе данных");
    }
    else {
        const resultOut = [];
        for (let i=0; i < result.length; i++){
            resultOut.push(result[i].name + ': ' + result[i].birthDate+ "")
        }
        return resultOut;
    }
};

const buttonClick = (functions, content) => {
    if (functions == "getMin")
        replaceHtmlDom("p", "result__content", getMin1(content));
    else if(functions == "getEven")
        replaceHtmlDom("p", "result__content", getEven1(content));
    else
        replaceHtmlDom("textarea", "result__content", searchByName1(content));
};
