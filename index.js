require('dotenv').config()

if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.')

const Discord = require('discord.js')
const client = new Discord.Client()

// Evento ready, Status do bot, etc.

client.on("ready", () => {
    console.log('log', `O Bot foi iniciado completamente com ${client.users.size} usuarios em ${client.guilds.size} servidores`)
})


// Sistema de comandos

client.on("message", (message) => {

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(process.env.PREFIX.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);

    }
})

client.login(process.env.TOKEN);