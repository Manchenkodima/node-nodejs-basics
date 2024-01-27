
import fs from 'fs'

const list = async () => {
    const fileArray = await new Promise((res) => {
        fs.readdir('./src/fs/files', (err, files) => {
            if (err) {
                throw new Error('FS operation failed')
            }
            res(files);
        });
    })
    console.log('Содержимое директории:',fileArray)
};

await list();