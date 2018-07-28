# slack-hubot

A Slack bot application.

## Usage

```bash
git clone git@github.com:tat3/slack-hubot.git
```

Firstly you have to create a Slack App. 
You can read "Getting a Slack Token" in the [official documentation](https://slackapi.github.io/hubot-slack/).

Now you can confirm whether your bot could be associated with slack.
You can send a sample message to your channel with Slack API.
`https://slack.com/api/chat.postMessage?token=<OAuth Access Token
>&channel=<channel name>&text=Hello`

Add the token to .env file.
```bash
echo HUBOT_SLACK_TOKEN=<Bot User OAuth Access Token> > .env
```

Then launch application with Docker Compose.

```bash
docker-compose build
docker-compose up
```

Finally invite your bot to your slack channel with `/invite @username` at the channel and say "Hello".

