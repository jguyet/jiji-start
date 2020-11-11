const Jiji = require("jiji-js");

module.exports = {
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
    innerHTML: require("./404.html")
};