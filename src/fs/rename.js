
import fs from 'fs'

const rename = async () => {
    const fileRename = await new Promise((res) => {
        fs.rename('./src/fs/files/wrongFilename.txt', 'properFilename.md', (err) => {
            if (err) {
                throw new Error('FS operation failed')
            }
            res('properFilename.md');
        });
    })
    console.log(fileRename)
};

await rename();