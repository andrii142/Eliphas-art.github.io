const searchByName = () => {
    let getText = document.getElementById('searchByName').value;
    let result = searchByNameArr.filter(item => item.name == getText);
    if (result.length < 1)
        result = "Данного имени нету в базе данных";
    console.log(result);
};

document.getElementById('searchByNameButton').addEventListener('click', searchByName);
