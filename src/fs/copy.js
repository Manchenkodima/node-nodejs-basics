
import fs from 'fs'
import path from 'path'

const copy = async () => {
    try {
        const myFile = './src/fs/files';
        await fs.promises.access(myFile, fs.constants.R_OK);
        const myFileCopy = './src/fs/files_copy';
        await fs.promises.mkdir(myFileCopy, { recursive: true })
        const files = await fs.promises.readdir(myFile);
        await Promise.all(files.map(async (file) => {
            const myFilePath = path.join(myFile, file);
            const myFileCopyPath = path.join(myFileCopy, file);
            try {
                await fs.promises.access(myFileCopyPath, fs.constants.F_OK);
                console.log(`Файл ${file} уже скопирован`);
            } catch (error) {
                await fs.promises.copyFile(myFilePath, myFileCopyPath);
                console.log(`Файл ${file} успешно скопирован`);
            }
        }));
        console.log('Все файлы были скопированы в папку "files_copy"');
    }
    catch (error) {
        console.error(error.message)
    }
};

await copy();




