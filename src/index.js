const Jiji = require("jiji-js");

Jiji.DetectChange.interval = 200; // set interval detection of 200 is 100 by default

Jiji.initialize("browser", () => {
    Jiji.Router.initialize([
        require("./home/home.controller")
    ]);
    Jiji.Router.route();
});