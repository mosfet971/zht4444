const path = require('path');
const fs = require('fs');

//изменить файл (или создать и изменить если его нет)
exports.writeFile = async function (filePath, fileText) {
    await fs.promises.writeFile(filePath, fileText, { flag: 'w', encoding: 'utf8' });
}

//удалить файл
exports.rmFile = async function (filePath) {
    await fs.promises.rm(filePath);
}

//получить текст из файла
exports.getFileText = async function (filePath) {
    let text = await fs.promises.readFile(filePath, { flag: 'r', encoding: 'utf8' });
    return (text);
}

//проверить сушествует ли файл
exports.checkFile = function(filePath) {
    return(fs.existsSync(filePath));
}

//создать папку
exports.mkDir = function(filePath) {
    fs.mkdirSync(filePath, { recursive: true });
}

//удалить папку
exports.rmDir = function(filePath) {
    fs.rmSync(filePath, { recursive: true, force: true });
}