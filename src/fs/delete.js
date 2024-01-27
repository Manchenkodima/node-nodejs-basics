
import fs from 'fs'

const remove = async () => {
    const deleteFile = await new Promise((res) => {
        fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
            if (err) {
                throw new Error('FS operation failed')
            }
            res('Файл успешно удален.');
        });
    })
    console.log(deleteFile)
};

await remove();