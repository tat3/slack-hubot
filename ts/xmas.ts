import hubot = require("hubot");

module.exports = (robot: hubot.Robot): void => {
  robot.respond(/Is it (xmas|christmas)\s?\?/i, (msg: hubot.Response) => {
    var today: Date = new Date();

    msg.reply(today.getDate() === 25 &&
      (today.getMonth() + 1) === 12 ? "YES" : "NO");
  });
};
