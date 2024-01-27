
import fs from 'fs'

const read = async () => {
    const readFile = await new Promise((res) => {
        fs.readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
            if (err) {
                throw new Error('FS operation failed')
            }
            res(data);
        });
    })
    console.log(readFile)
}

await read();