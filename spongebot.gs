// Spongebot rewritten in google app script to allow it to be automated with callback url

var botId = "eed3d5d128f5d1729393b56ff7";
// eed3d5d128f5d1729393b56ff7 - test
// 380296e80befbd5547012e816e - sponge

var gifs = ['https://media.giphy.com/media/xTdAji7Uy0GlCjOv5K/giphy.gif',
		    'https://media.giphy.com/media/l41YdYZhynOoJOluE/giphy.gif',
	    	'https://media.giphy.com/media/l0MYv9RO8LthExvig/giphy.gif',
	    	'https://media.giphy.com/media/3o6ZtemX3mjyCQZBEA/giphy.gif',
	    	'https://media.giphy.com/media/fNvXkjC50ywBW/giphy.gif',
	    	'https://media.giphy.com/media/2zj7XCweSmcZq/giphy.gif',
	    	'https://media.giphy.com/media/26FmQD4o8BMFGhT2M/giphy.gif',
	    	'https://media.giphy.com/media/rjN9e4I4mgspy/giphy.gif',
	    	'https://media.giphy.com/media/l4pM35VGqeuL4pfvG/giphy.gif',
            'https://media.giphy.com/media/l1AsAMOkYjwteLRkc/giphy.gif',
            'https://media.giphy.com/media/7DzlajZNY5D0I/giphy.gif',
            'https://media.giphy.com/media/DqhwoR9RHm3EA/giphy.gif',
            'https://media.giphy.com/media/iQ6yGuMhPGWhW/giphy.gif',
            'https://media.giphy.com/media/10briMdj6tGzHa/giphy.gif',
            'https://media.giphy.com/media/RC6j3F8npiOre/giphy.gif',
            'https://media.giphy.com/media/OHNc1Hh7bejU4/giphy.gif',
            'https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif'];

function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

function sendImage(text, imageURL){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '","attachments":[{"type":"image","url":"' + imageURL + '"}]}'})
}

// 'https://www.youtube.com/watch?v=xWILHcsYVj8' - squidward on a chair

//respond to messages sent to the group. Recieved as POST 
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  
  //check if server is running (diagnostics)
  if(text.toLowerCase() == "spongebob")
  {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var gif = gifs.splice(randomIndex,1);
    sendText(gif);
  }
}
