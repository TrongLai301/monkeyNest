const test = require("../../schemas/test");
const { execute } = require("./demo");


module.exports = {
    name: 'data',
    description: 'test',
    author:'demo',
    async execute(mess){
        const data = await test.find();
        var values = [];
        await data.forEach(async d => {
            values.push(d.name)
        })
        await mess.reply(`content: ${values.join(`\n`)}`)
    }
}