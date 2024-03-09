const express = require('express');
 app = express();

 app.listen(() => console.log('done !'));

 app.use('/ping', (req, res) => {
     res.send(new Date());
 }); 

async function keepAlive() {
  try {
    await fetch('http://us-nyc.pylex.me:8538'); // قم بتغيير الرابط إلى الرابط الخاص بتطبيقك
    console.log('Server is alive!');
  } catch (error) {
    console.error('Error occurred while sending keep-alive request:', error);
  }
}

// استدعاء دالة keepAlive كل 5 دقائق (300000 ميلي ثانية)
setInterval(keepAlive, 300000);
setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);

const Discord = require('discord.js');
const { Client, MessageActionRow, MessageButton, Modal, MessageButtonStyle, TextInputComponent, TextInputStyle, Permissions } = require('discord.js');
const client = new Discord.Client({ intents: [new Discord.Intents(32767)] });
const { Intensts, MessageEmbed, Collection, Collector, Formatters, MessageSelectMenu, Intents, MessageAttachment } = require('discord.js');
var cooldown = new Set()
const { ButtonBuilder, ButtonStyle, Events, ActionRowBuilder } = require('discord.js');
const mongoose = require("mongoose");
const nodeevent = require('node:events');
const ms = require("ms")
const moment = require("moment")
const guild = require('guild');
const request = require('request');
const prefix = "."  
const wait = require('node:timers/promises').setTimeout;

const line = ""; // رابط خطك

client.on('ready', () => {
 console.log(`${client.user.tag} Ready!`);
 client.user.setActivity('🔷 SYSTEM 🔷', { type: 'STREAMING', url: 'https://www.twitch.tv/discord' });
});

client.login(process.env.token)

client.on("messageCreate", async interaction => {
if (interaction.content.startsWith(prefix + 'info')){

  let embed = new Discord.MessageEmbed() 
      .setTitle("** 🔷・BASE CLAN 🔷 - - - - - - - - - - - -  INFO EMBED **")
      .setColor("#4d7bf5")
    .setThumbnail(``)
      .setAuthor(`-----------------------------------------------------------------------`)    
   .setDescription(`**- - The available information includes 
<:DISCORD:1216077014566572073> Discord Rules <:BASE:1215708594444570624> Base Clan Rules <:VENGE1:1215717843228692522> Venge.io Rules  
\n- - 🏳️ Hello everyone, this server is dedicated to showcasing the BASE clan, fostering interaction, promoting other clans, and staying updated with their news 🙂**`)
    .setFooter(`------------------------------------------------------------------------------`)

const menu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()

         .setCustomId('menu_guide') 
         .setPlaceholder('SHOOSE INFORMATION')

         .addOptions([

                        {
             label: 'DISCORD RULES ',
                              description: 'FOR DISCORD RULES',
             emoji: `<:DISCORD:1216077014566572073>`,
             value: 'First_Law',
                        },
                        {              

             label: 'BASE CLAN RULES',
                              description: 'FOR Base Clan RULER',
             emoji: `<:BASE:1215708594444570624>`,
             value: 'Second_Law',
                        },      


             {              

             label: 'VENGE RULES',
                              description: 'FOR VENGE GAME RULLES',
             emoji: `<:VENGE1:1215717843228692522>`,
             value: 'Seventh_Law',
                        },   

                    ]),
        );
    interaction.channel.send({
      embeds: [embed], components: [menu]}).then(m => {
      interaction.delete()
      })

}
}) 

client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

  let embed1 = new Discord.MessageEmbed() 
      .setTitle("**- - - - - - - - - - - - - - - - DISCORD INFO - - - - - - - -**")
      .setColor("#4d7bf5") 
    .setThumbnail("https://cdn.discordapp.com/emojis/1216077014566572073.png?v=1")
      .setAuthor("")     
     .setDescription("** --------------------------------------------------- \n- - Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated. \n- -  No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members. \n- -  No age-restricted or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content. \n- -  If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space! \n --------------------------------------------------- **") 

let embed2 = new Discord.MessageEmbed() 
  .setTitle("**- - - - - - - - - BASE CLAN INFO - - - - - - - - -**")
      .setColor("#4d7bf5") 
    .setThumbnail("https://cdn.discordapp.com/emojis/1215708594444570624.png?v=1")
      .setAuthor("")       
   .setDescription("** ------------------------------------------------------- \n- - Your account level must exceed 30.\n- - Your Kill/Death Ratio (KDR) should be over 2.40.\n- - You must engage in gameplay on a monthly basis to participate in parties exceeding 10.\n- - You must help us develop our clan.\n ------------------------------------------------------- **") 
    let embed7 = new Discord.MessageEmbed() 
      .setTitle("**- - - - - - - - - VENGE INFO - - - - - - - - -**")
      .setColor("#4d7bf5") 
    .setThumbnail("https://cdn.discordapp.com/emojis/1215717843228692522.png?v=1")
      .setAuthor("")  
       .setDescription("**------------------------------------------------------- \n- - All Rules Here <#719552715113496639>\n- - Here ```https://venge.io/tos.txt``` \n -------------------------------------------------------**") 
if (interaction.customId === "menu_guide"){

    if (interaction.values[0] === 'First_Law'){
 interaction.reply({contnet:`For While.`, embeds: [embed1], ephemeral:true})
} 

if (interaction.values[0] === 'Second_Law'){
 interaction.reply({contnet:`For While.`, embeds: [embed2], ephemeral:true})
}


if (interaction.values[0] === 'Seventh_Law'){
 interaction.reply({contnet:`For While.`, embeds: [embed7], ephemeral:true})
}

   } 
});