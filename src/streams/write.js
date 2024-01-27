import fs from 'fs';
import path from 'path';

const write = async () => {
    const filePath = path.join('./src/streams/files', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(filePath, { encoding: 'utf-8' });
    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    });
    process.stdin.on('end', () => {
        writableStream.end();
        console.log(`Данные записаны в файл ${filePath}`);
    });
    writableStream.on('error', (error) => {
        console.error(`Ошибка при записи в файл: ${error.message}`);
    });
};

await write();