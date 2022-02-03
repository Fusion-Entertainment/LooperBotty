//This Chatbot is programmed By Freaksheep (Erasmus Kranenburg) from Fusion Entertainment



const tmi = require('tmi.js');
//const { channel } = require('tmi.js/lib/utils');
require('dotenv').config();


const opts = {
    options: { debug: true,},
    connection: {
        reconnect: true,
        secure: true,
    },
    identity: {
        username: process.env.USER_TOKEN,
        password: process.env.AUTH_TOKEN
    },
    channels: [ process.env.CHANNEL_TOKEN ]
};


//Bot Connect//
const client = new tmi.client(opts);
client.connect().catch(console.error);

client.on('connected', (channel, address, port) => {
    client.action(process.env.CHANNEL_TOKEN, 'freaks51Hype Hello, The LitteLam is ready to play! freaks51Hype ')


});


                                                            //USER MESSAGE RESPONDS///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', (channel, user, message, self) => {
    if(self) return;
    if(message == 'Evening') {
        client.say(channel, `Hello @${user.username} welcome back to the stream!`);
    }
});



client.on('message', (channel, user, message, self) => {
    if(self) return;
    if(message == 'gg') {
        client.say(channel, `@${process.env.CHANNEL_TOKEN} well played!`);
    }
})

client.on('message', (channel, user, message, self) => {
    if(self) return;
if(message == '!rip') {
    client.say(channel, `@${user.username} well we tryed better luck next time!`);
}
});



                                                            //BOT CHAT COMMANDS///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



client.on('chat', (channel, user, message, self) => {
    if (message === '!discord') {
        client.action(process.env.CHANNEL_TOKEN, 'Join the Best Discord in universe Here: discord.me/freaksheeplive')
    }
});



client.on('chat', (channel, user, message, self) => {
    if (message === '!twitter') {
        client.action(process.env.CHANNEL_TOKEN, ' Join my twitter and stay updated on all latest news about the Game Development Or Twitch channel twitter.com/FreaksheepL')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!lag') {
        client.action(process.env.CHANNEL_TOKEN, 'if the stream is lagging try refreshing using a hard reset for Windows: CTRL+F5 for MAC: Command + Option + R this will refresh the browser + clearing the browser cache')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!merch') {
        client.action(process.env.CHANNEL_TOKEN, 'The new Merch is here Check it out: merch.streamelements.com/gn_apexdevil')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!commands') {
        client.action(process.env.CHANNEL_TOKEN, 'Current Active Commands / !giveaway / !merch / !discord / !Fur ( are pointsPoints) / !nano / !nanovip  / !sc / !corp / !mining / !twitter / !as / !lag')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!youtube') {
        client.action(process.env.CHANNEL_TOKEN, 'New Video is out check it here: https://youtu.be/gdOcDwUuJO8')
    }
});


client.on('chat', (channel, user, message, self) => {
    if (message === '!sc') {
        client.action(process.env.CHANNEL_TOKEN, 'Buy Star Citizen here, and use my Referral code to get 5K extra starting UEC, (  STAR-9LKC-7ZCX  ) robertsspaceindustries.com/pledge')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!corp') {
        client.action(process.env.CHANNEL_TOKEN, 'Find more info about our Star Citizen Corporation here: robertsspaceindustries.com/citizens/LogicViper/organizations')
    }
});



client.on('chat', (channel, user, message, self) => {
    if (message === '!mining') {
        client.action(process.env.CHANNEL_TOKEN, 'Here you can find the most updated mining Database For Star Citizen: gallog.co/trading')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!nano') {
        client.action(process.env.CHANNEL_TOKEN, 'All NanoLeaf Commands:  !pride')
    }
});


client.on('chat', (channel, user, message, self) => {
    if (message === '!nanovip') {
        client.action(process.env.CHANNEL_TOKEN, '!chill / ! lc  / ! japan  / !party ')
    }
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!streamlooper') {
        client.action(process.env.CHANNEL_TOKEN, 'The official StreamLooper website is now live go to this link and check it out: streamlooper.me')
    }
});




                                                            //BOT CAMMANDS THAT NEEDS THE BOT TO BE SUBBED///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





client.on('chat', (channel, user, message, self) => {
    if (message === '!raid') {
        client.action(process.env.CHANNEL_TOKEN, 'Flock Squad freaks51ChannelRaid Raid freaks51ChannelRaid incoming freaks51ChannelRaid Flock Squad freaks51ChannelRaid Raid freaks51ChannelRaid incoming freaks51ChannelRaid Flock Squad freaks51ChannelRaid Raid freaks51ChannelRaid incoming freaks51ChannelRaid  ')    }

});



                                                            //USER DEFIND BOT CHAT COMMANDS///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('chat', (channel, user, message, self) => {
    if (message === '!lurk') {
        client.action(process.env.CHANNEL_TOKEN, `${user["display-name"]} is watching on the back seat`);
    }
});


client.on('chat', (channel, user, message, self) => {
    if (message === '!unlurk') {
        client.action(process.env.CHANNEL_TOKEN, `${user["display-name"]} is back at the front seat`);
    }
});



client.on('chat', (channel, user, message, self) => {
    if (message === '!as') {
        client.action(process.env.CHANNEL_TOKEN, "Check out this amazing streamster she streams Apex Legends most of the time twitch.tv/arai_somnia");
    }
});

                                                            //GIVEAWAY///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//client.on('chat', (channel, user, message, self) => {
  //  if (message === '!giveaway') {
  //      client.action(process.env.CHANNEL_TOKEN, "We are giving away a 10$ giftcard for any System or shop you like when the sub goal is med (if you win one of my mods or myself will contact you!!)");
  //  }
// });




                                                            //COMMANDS IN TESTING///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//So command//
 client.on("chat", function(channel, user, message, self){
    let sender = user['display-name']
    if (message.startsWith("!so") && user.mod === true){
  var input = message.split(' ')[1];
  client.say("freaksheep", "Go check out the wonderful " + input + " over at twitch.tv/" + input);
   };
   });




//Link Detection//
client.on('chat', (channel, user, message, self) => {
    if (self) return;
    let sender = user['display-name']
    if (user['mod'] === false){
        if(message.includes("www.") || message.includes(".com") || message.includes(".tk") || message.includes("https://") || message.includes("porn")){
            client.timeout(channel, sender, 600, "Links are not allowed if not permited or moderator")
        }
    }
});


// Timed Automated Messages///
     //Set the message time in ms so for example 300000/ms is 5 minutes

     // go here to get the Calculator i use in all my projects 
    // unitconversion.org/time/minutes-to-milliseconds-conversion.html 

client.on('connected', (address, port) => {
    setInterval(function(){ 
        console.log(client.action(process.env.CHANNEL_TOKEN, 'The official StreamLooper website is now live go to this link and check it out: streamlooper.me'));
    }, 2700000);
});


// Giveaway Disabled///

//client.on('connected', (address, port) => {
 //   setInterval(function(){ 
 //       console.log(client.action(process.env.CHANNEL_TOKEN, 'We are giving away a 10$ giftcard for any System or shop you like when the sub goal is med (if you win one of my mods or myself will contact you!!)'));
 
 //   }, 5000000);
//});



client.on('connected', (address, port) => {
    setInterval(function(){ 
        console.log(client.action(process.env.CHANNEL_TOKEN, 'Type: !nano For normal Nano commands  /  !nanovip For Vip commands'));
 
    }, 4585000);
});

client.on('connected', (address, port) => {
    setInterval(function(){ 
        console.log(client.action(process.env.CHANNEL_TOKEN, 'Active chat games  8ball / dual / roulette / slots'));
 
    }, 5070000);
});


client.on('connected', (address, port) => {
    setInterval(function(){ 
        console.log(client.action(process.env.CHANNEL_TOKEN, 'If you enjoy th content then dont forget to hit the follow button and join the fam!!'));
 
    }, 5500000);
});


client.on('connected', (address, port) => {
    setInterval(function(){ 
        console.log(client.action(process.env.CHANNEL_TOKEN, ' Check out the NEW merch !merch for more info'));
 
    }, 6000000);
});






                                                            //CHAT MODE COMMANDS///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Emote Only Mode//
client.on('chat', (channel, user, message, self) => {
    if (self) return;
        let sender = user['display-name']
        if (message.startsWith("!emoteY") && user.mod === true){
        client.emoteonly(process.env.CHANNEL_TOKEN);
    }
});
    client.on('chat', (channel, user, message, self) => {
        if (self) return;
        let sender = user['display-name']
        if (message.startsWith("!emoteN") && user.mod === true){
        client.emoteonlyoff(process.env.CHANNEL_TOKEN);
    }

});



//Sub Only Mode//
client.on('chat', (channel, user, message, self) => {
    if (self) return;
    let sender = user['display-name']
    if (message.startsWith("!subY") && user.mod === true){
        client.subscribers(process.env.CHANNEL_TOKEN)
    }
        });




client.on('chat', (channel, user, message, self) => {
    if (self) return;
    let sender = user['display-name']
    if (message.startsWith("!subN") && user.mod === true){
        client.subscribersoff(process.env.CHANNEL_TOKEN)
        }
});




                                                            // NEW SUBS AND FOLLOWER CHAT POPUPS///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on("subscription", (channel, username, metod, message, userstate) =>{
    console.log("subscription", {channel, username, metod, message, userstate});
    client.say(channel, `Thanks for Subscribing, ${username}`);
});


client.on("resub", (channel, username, _months, message, userstate, metod) =>{
    console.log("resub", {channel, username, metod, message, userstate});
    let streakmonths = userstate["msg-parm-streak-months"];
    let cumulativemonths = userstate["msg-parm-cumulative-months"];
    let sharedstreak = userstate["msg-parm-should-shared-streak"];
    if(sharedstreak){
        client.say(channel, `Thanks for Resubscribing for ${streakmonths} consective months, ${username}!`);
    }
    else{
    client.say(channel, `Thanks for Resubscribing for ${cumulativemonths} months, ${username}!`);
}
});