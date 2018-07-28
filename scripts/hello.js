"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    robot.hear(/Hello/i, (msg) => {
        msg.send("Hi!");
    });
};
//# sourceMappingURL=hello.js.map