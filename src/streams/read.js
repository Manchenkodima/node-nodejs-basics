import fs from 'fs'
import path from 'path';

const read = async () => {
    const readFile = path.join('./src/streams/files', 'fileToRead.txt');
    const stream = fs.createReadStream(readFile, { encoding: 'utf-8' });
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    stream.on('end', () => {
        console.log('/nЧтение файла завершено.');
    })
    stream.on('error', (error) => {
        console.error(`Ошибка при чтении файла: ${error.message}`);
    });
};

await read();