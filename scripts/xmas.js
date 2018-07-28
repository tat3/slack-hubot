"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    robot.respond(/Is it (xmas|christmas)\s?\?/i, (msg) => {
        var today = new Date();
        msg.reply(today.getDate() === 25 &&
            (today.getMonth() + 1) === 12 ? "YES" : "NO");
    });
};
//# sourceMappingURL=xmas.js.map