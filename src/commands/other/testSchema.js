const test = require("../../schemas/test");

module.exports = {
    name: 'test',
    description: 'test',
    author:'demo',
    async execute(message){
        const description = message.content.split(`!${this.name}`)
        console.log(description)
        // await test.create({
        //     name: message.content
        // });
        await message.channel.send(`Đã lưu`)
    }
}