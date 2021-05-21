const {
  Client,
  RichEmbed
} = require("discord.js");
const Discord = require("discord.js");
const client = new Client({
  disableEveryone: false //  If set to 'true', the bot will be unable to ping @everyone // if set to false the bot is able to use @everyone
});


// Bunch of Const - Identiers
const config = require("./config.json");
const prefix = config.prefix

const color = require("./config.json");
const footer = config.footer

const thumbnail = config.thumbnail


const command1 = config.command1
const command2 = config.command2
const command3 = config.command3

const description1 = config.description1
const description2 = config.description2
const description3 = config.description3

const title1 = config.title1
const title2 = config.title2
const title3 = config.title3


const status1 = config.status1
const status2 = config.status2








// Launching bot as XXXXX
client.on('ready', c => {
console.log(`Bot has Started up!`);
});


client.on("ready", () => {
  client.user.setPresence({
      game: { 
          name: config.status1,
          type: config.status2
      },
      status: 'idle'
  })
})



client.on('message', message => { // if the bot detects a message being sent
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;



  
  if(message.content === prefix + command1) {
    const about = new RichEmbed()
    .setTitle(config.title1)
    .setColor(config.color)
    .setDescription(config.description1)
    .setThumbnail(config.thumbnail)
    .setFooter(config.footer)
    
    
    message.channel.send(about) 
 
  }
    if(message.content === prefix + command2) {
      const help = new RichEmbed()
      .setTitle(config.title2)
      .setColor(config.color)
      .setDescription(config.description2)
      .setThumbnail(config.thumbnail)
      .setFooter(config.footer)
      
      
      message.channel.send(help) 
   
    }

    if(message.content === prefix + command3) {
      const about = new RichEmbed()
      .setTitle(config.title3)
      .setColor(config.color)
      .setDescription(config.description3)
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter(config.footer)
      
      
      message.channel.send(about) 
   
    }
  

  console.log(`Made by NoahBrahim`);  //DO not remove
});



client.login(config.token); 
