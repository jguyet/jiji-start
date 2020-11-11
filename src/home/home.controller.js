const Jiji = require("jiji-js");

module.exports = {
    path: "/", controller: {
        title: "application-name",
        command: "$ ji new",
        constructor: function (callback) {
            /* before mount */
            console.log("construct");
            callback();
        },
        mounted: function () {
            console.log("mounted");
        },
        destroy: function () {
            console.log(`destroy ${this.title}`);
        },
        innerHTML: require("./home.html")
    }
};