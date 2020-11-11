const Jiji = require("jiji-js");

Jiji.DetectChange.interval = 200; // set interval detection of 200 is 100 by default

Jiji.initialize("browser", () => {
    Jiji.Router.initialize([
        { path: "/home", controller: require("./home/home.controller") }, // route /home pointe to that controller
        { path: "/", redirect: "/home" }, // route / redirect to /home
        { path: "**", controller: require("./404/404.controller") } // route other path ** pointe to 404 controller
    ]);
    Jiji.Router.route();
});

Jiji.globals.myFunction = () => { // add global function example
    var x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
};