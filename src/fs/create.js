import fs from 'fs'

const create = async () => {
    try {
        let newFile = await new Promise((res, rej) => {
            fs.access('./src/fs/files/fresh.txt', fs.constants.F_OK, (err) => {
                if (err) {
                    res('Файл не найден')
                }
                res('Файл найден')
            }
            )
        }
        )
        if (newFile === 'Файл найден') {
            throw new Error('FS operation failed')
        }
        const content = 'I am fresh and young'
        const result = await new Promise((res, rej) => {
            fs.writeFile('./src/fs/files/fresh.txt', content, (err) => {
                if (err) {
                    rej(err);
                }
                res("Файл успешно записан.");
            })
        });
        console.log(result)
    }
    catch (error) {
        console.log(error.message)
    }
};

await create();