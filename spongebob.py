import requests
import time
import random

request_params = {'token': 'og28MvQj6PMmUbpm9aNzA1VHNNUbvzwH2na1HUVs'}

gifs = ['https://media.giphy.com/media/xTdAji7Uy0GlCjOv5K/giphy.gif', 
		'https://media.giphy.com/media/l41YdYZhynOoJOluE/giphy.gif',
	    	'https://media.giphy.com/media/l0MYv9RO8LthExvig/giphy.gif',
	    	'https://media.giphy.com/media/3o6ZtemX3mjyCQZBEA/giphy.gif',
	    	'https://media.giphy.com/media/fNvXkjC50ywBW/giphy.gif',
	    	'https://media.giphy.com/media/2zj7XCweSmcZq/giphy.gif',
	    	'https://media.giphy.com/media/26FmQD4o8BMFGhT2M/giphy.gif',
	    	'https://media.giphy.com/media/rjN9e4I4mgspy/giphy.gif',
	    	'https://media.giphy.com/media/l4pM35VGqeuL4pfvG/giphy.gif']

response = requests.get('https://api.groupme.com/v3/groups/19736537/messages', params = request_params)

if (response.status_code == 200):
	response_messages = response.json()['response']['messages']

for message in response_messages:

    if (message['text'] == 'Spongebob'):
    	
    	to_send = random.choice(gifs)

    	post_params = { 'bot_id' : '380296e80befbd5547012e816e', 'text': to_send }
    	requests.post('https://api.groupme.com/v3/bots/post', params = post_params)

    	request_params['since_id'] = message['id']

	  break
