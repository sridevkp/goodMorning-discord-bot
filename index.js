import dotenv from "dotenv"
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if( message?.author.bot ) return

    if( message.content === '!mod-me'){
        return message.member.roles.add('1179822763654004798')
    }
    if( message.content === '!unmod-me' ){
        return message.member.roles.remove('1179822763654004798')
    }
    if( message.content === 'fekk' ) return message.reply("fekk u beach")
    message.channel.send(`${message.content.toUpperCase()}`)
   
})


client.on( "messageDelete", message => {
    message.channel.send( `@${message.author.displayName}   Entha delete aakiye ?` )
})


client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


client.login(process.env.TOKEN);