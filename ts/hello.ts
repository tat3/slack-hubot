import hubot = require("hubot")

module.exports = (robot: hubot.Robot): void => {
  robot.hear(/Hello/i, (msg: hubot.Response) => {
    msg.send("Hi!");
  });
};
