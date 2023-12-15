let easyFs = require("./easyFs");
let cryptog = require("./cryptog");

exports.cleanUp = async (databaseDirPath) => {
    let dbRootPath = databaseDirPath + "database/";
    easyFs.rmDir(dbRootPath + "temp/")
}

exports.checkExist = async (databaseDirPath) => {
    let dbRootPath = databaseDirPath + "database/";

    let isExist = easyFs.checkFile(dbRootPath + "masterKey.dbf");

    return isExist;
}

exports.create = async (databaseDirPath, password) => {
    let dbRootPath = databaseDirPath + "database/";
    easyFs.mkDir(dbRootPath);

    let mk = cryptog.random256hex();
    let encryptedMk = cryptog.aes256.encrypt(mk, cryptog.slowSha256(password));

    await easyFs.writeFile(dbRootPath + "masterKey.dbf", JSON.stringify(encryptedMk));
}

exports.newId = () => {
    return cryptog.newUUID();
}

exports.getMasterKey = async (databaseDirPath, password) => {
    let dbRootPath = databaseDirPath + "database/";
    
    let encryptedMk = JSON.parse(await easyFs.getFileText(dbRootPath + "masterKey.dbf"));
    let mk = cryptog.aes256.decrypt(encryptedMk.aesMessage, cryptog.slowSha256(password), encryptedMk.aesIv);

    return mk;
}

exports.generateEntityTypeObject = async (name, validator) => {
    return({name, validator});
}

exports.setEntity = async (databaseDirPath, mk, entityType, entityId, entityObj) => {
    let dbRootPath = databaseDirPath + "database/";

    if (!(entityType.validator(entityObj))) {
        throw new Error("Invalid entity");
    }

    let idListFilePath = (dbRootPath + entityType.name + ".dbf");

    if(!easyFs.checkFile(idListFilePath)) {
        await easyFs.writeFile(idListFilePath, JSON.stringify([]));
    }

    let idList = JSON.parse(await easyFs.getFileText(idListFilePath));
    let isEnityExist = false;
    let i = 0;
    for (let j in idList) {
        if (idList[i] == entityId) { isEnityExist = true; i = j; break;}
    }
    isEnityExist ? idList[i] = entityId : idList.push(entityId);
    await easyFs.writeFile(idListFilePath, JSON.stringify(idList));

    let dirPath = dbRootPath + entityId[0] + entityId[1] + "/" + entityId[2] + entityId[3] + "/";
    await easyFs.mkDir(dirPath);

    let entityFilePath = dirPath + entityId + ".dbf";

    let cryptedEntityJson = JSON.stringify(cryptog.aes256.encrypt(JSON.stringify(entityObj), cryptog.toByte(mk)));

    await easyFs.writeFile(entityFilePath, cryptedEntityJson);

}

exports.getEntitiesIdsByType = async (databaseDirPath, mk, entityType) => {
    let dbRootPath = databaseDirPath + "database/";

    let idListFilePath = (dbRootPath + entityType.name + ".dbf");

    if(!easyFs.checkFile(idListFilePath)) {
        await easyFs.writeFile(idListFilePath, JSON.stringify([]));
    }

    let idList = JSON.parse(await easyFs.getFileText(idListFilePath));

    return(idList);
}

exports.getEntity = async (databaseDirPath, mk, entityType, entityId) => {
    let dbRootPath = databaseDirPath + "database/";

    let dirPath = dbRootPath + entityId[0] + entityId[1] + "/" + entityId[2] + entityId[3] + "/";
    let entityFilePath = dirPath + entityId + ".dbf";
    let encryptedEntity = JSON.parse(await easyFs.getFileText(entityFilePath));
    let decryptedEntityJson = cryptog.aes256.decrypt(encryptedEntity.aesMessage, cryptog.toByte(mk), encryptedEntity.aesIv);
    let entityObj = JSON.parse(decryptedEntityJson);

    if (!(entityType.validator(entityObj))) {
        throw new Error("Invalid entity");
    }

    return entityObj;
}

exports.changePassword = async (databaseDirPath, oldPassword, newPassword) => {
    let dbRootPath = databaseDirPath + "database/";
    
    let encryptedMk = JSON.parse(await easyFs.getFileText(dbRootPath + "masterKey.dbf"));
    let mk;
    try {
        mk = cryptog.aes256.decrypt(encryptedMk.aesMessage, cryptog.slowSha256(oldPassword), encryptedMk.aesIv);
    } catch (error) {
        throw new Error("Wrong password");
    }

    encryptedMk = cryptog.aes256.encrypt(mk, cryptog.slowSha256(newPassword));

    await easyFs.writeFile(dbRootPath + "masterKey.dbf", JSON.stringify(encryptedMk));
}

exports.rmEntity = async (databaseDirPath, mk, entityType, entityId) => {
    let dbRootPath = databaseDirPath + "database/";
    let dirPath = dbRootPath + entityId[0] + entityId[1] + "/" + entityId[2] + entityId[3] + "/";
    let entityFilePath = dirPath + entityId + ".dbf";
    await easyFs.rmFile(entityFilePath);

    let idListFilePath = (dbRootPath + entityType.name + ".dbf");
    let idList = JSON.parse(await easyFs.getFileText(idListFilePath));
    let i = 0;
    for (let j in idList) {
        if (idList[i] == entityId) { i = j; break;}
    }
    idList.splice(i, 1);
    await easyFs.writeFile(idListFilePath, idList);
}

exports.setFile = async (databaseDirPath, mk, fileId, inputFilePath) => {
    let dbRootPath = databaseDirPath + "database/";
    let dirPath = dbRootPath + fileId[0] + fileId[1] + "/" + fileId[2] + fileId[3] + "/";
    await easyFs.mkDir(dirPath);
    let encryptedFilePath = dirPath + fileId + ".dbf";

    let iv = (await cryptog.aes256.encryptFile(inputFilePath, encryptedFilePath, cryptog.toByte(mk))).aesIv;

    let idivListFilePath = dbRootPath + "file.dbf";
    if(!easyFs.checkFile(idivListFilePath)) {
        await easyFs.writeFile(idivListFilePath, JSON.stringify([]));
    }

    let idivList = JSON.parse(await easyFs.getFileText(idivListFilePath));
    let isFileExist = false;
    let i = 0;
    for (let j in idivList) {
        if (idivList[i] == fileId) { isFileExist = true; i = j; break;}
    }
    isFileExist ? idivList[i] = {id: fileId, iv: iv} : idivList.push({id: fileId, iv: iv});
    await easyFs.writeFile(idivListFilePath, JSON.stringify(idivList));
}

exports.getFilesIdsAndIVs = async (databaseDirPath, mk) => {
    let dbRootPath = databaseDirPath + "database/";

    let idivListFilePath = dbRootPath + "file.dbf";
    if(!easyFs.checkFile(idivListFilePath)) {
        await easyFs.writeFile(idivListFilePath, JSON.stringify([]));
    }

    let idivList = JSON.parse(await easyFs.getFileText(idivListFilePath));
    return(idivList);
}

exports.getFilePath = async (databaseDirPath, mk, fileId) => {
    let dbRootPath = databaseDirPath + "database/";

    let dirPath = dbRootPath + fileId[0] + fileId[1] + "/" + fileId[2] + fileId[3] + "/";
    await easyFs.mkDir(dirPath);
    let encryptedFilePath = dirPath + fileId + ".dbf";

    let idivListFilePath = dbRootPath + "file.dbf";
    if(!easyFs.checkFile(idivListFilePath)) {
        await easyFs.writeFile(idivListFilePath, JSON.stringify([]));
    }
    let idList = JSON.parse(await easyFs.getFileText(idivListFilePath));

    let iv;
    for (let i of idList) {
        if(i.id == fileId) iv = i.iv;
    }
    let decryptedDirPath = dbRootPath + "temp/";
    await easyFs.mkDir(decryptedDirPath);
    let decryptedFilePath = decryptedDirPath + fileId + ".dbf";

    await cryptog.aes256.decryptFile(encryptedFilePath, decryptedFilePath, cryptog.toByte(mk), iv);
    
    return(decryptedFilePath);
}

exports.rmFile = async (databaseDirPath, mk, fileId) => {
    let dbRootPath = databaseDirPath + "database/";

    let dirPath = dbRootPath + fileId[0] + fileId[1] + "/" + fileId[2] + fileId[3] + "/";
    await easyFs.mkDir(dirPath);
    let encryptedFilePath = dirPath + fileId + ".dbf";

    easyFs.rmFile(encryptedFilePath);

    let idivListFilePath = dbRootPath + "file.dbf";
    let idivList = JSON.parse(await easyFs.getFileText(idivListFilePath));
    
    let i = 0;
    for (let j in idivList) {
        if (idivList[i].id == fileId) { i = j; break;}
    }
    idivList.splice(i, 1);
    await easyFs.writeFile(idivListFilePath, idivList);
}